<script setup lang="ts">
import {computed} from 'vue';
import type {Villager} from '@/types';
import {translateProfession, professionPicture} from '@/minecraft/profession';
import {getLevelInfo} from '@/minecraft/level';

const props = defineProps<{
  villager: Villager;
}>()

const profession = computed(() => {
  return translateProfession(props.villager.VillagerData?.profession);
})

const picture = computed(() => {
  return professionPicture(props.villager);
})

const level = computed(() => {
  return getLevelInfo(props.villager);
});

const color = computed(() => level.value?.color || '#eeeeee66');
</script>

<template>
  <div class="villager_container" style="`border-color: ${level.color}`">
    <div class="heading">
      <img :src="picture">
      <div class="multiline">
        <div>{{profession}}</div>
        <div style="opacity: 0.7">{{level?.label}}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .villager_container {
    margin: 16px 0;
    box-sizing: border-box;
    border: v-bind(color) solid 1px;
    border-radius: 4px;
      
    .heading {
      display: flex;
      padding: 8px;
      column-gap: 8px;
    }
    
    .multiline {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      column-gap: 8px;
    }
  }
</style>
