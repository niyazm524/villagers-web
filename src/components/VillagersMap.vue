<script setup lang="ts">
import {computed, ref, watch} from 'vue';
import type {Villager} from '@/types';
import {professionPicture} from '@/minecraft/profession';

const props = defineProps<{
  villagers: Villager[];
  filter: Villager[];
}>()

const boundingBox = {
  top: Number.MAX_SAFE_INTEGER,
  left: Number.MAX_SAFE_INTEGER,
  right: Number.MIN_SAFE_INTEGER,
  bottom: Number.MIN_SAFE_INTEGER,
};


for (const villager of props.villagers) {
  const posX = villager.Pos[0];
  const posY = villager.Pos[2];
  boundingBox.top = Math.min(posY, boundingBox.top);
  boundingBox.left = Math.min(posX, boundingBox.left);
  boundingBox.bottom = Math.max(posY, boundingBox.bottom);
  boundingBox.right = Math.max(posX, boundingBox.right);
}


const scale = ref(1);
const containerRef = ref<any>();

function setInitialScale(cont: HTMLElement) {
  if(!cont) return;
  const width = boundingBox.right - boundingBox.left;
  const sw = (cont.clientWidth - 10*2) / width;
  const height = boundingBox.bottom - boundingBox.top;
  const sh = (cont.clientHeight - 10*2) / height;
  scale.value = Math.min(sw, sh);

}

watch(containerRef, setInitialScale);

function cssStyles(v: Villager) {
  const localX = v.Pos[0] - boundingBox.left;
  const localY = v.Pos[2] - boundingBox.top;
  const f: Record<string, any> = {};
  if(props.filter && props.filter.includes(v)) {
    f.backgroundColor = 'red'
  }
  return {
    top: `${localY * scale.value + 10}px`,
    left: `${localX * scale.value + 10}px`,
    ...f
  }
}
</script>

<template>
  <div class="villager_map" ref="containerRef">
    <div v-for="(item, idx) in villagers" :key="idx" class="map_point" :style="cssStyles(item)" />
  </div>
</template>

<style scoped lang="scss">
  .villager_map {
  position: relative;
  height: 300px;
  background: rgba(200, 200, 200, 80);
    .map_point {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: green;
      transform: translate(-50%, -50%);
    }

    .multiline {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      column-gap: 8px;
    }
  }
</style>
