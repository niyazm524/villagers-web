<script lang="ts" setup>
  import {computed} from 'vue';
  import {getItemDescription} from '@/minecraft/item-description';
  import MinecraftItem from './MinecraftItem.vue';
const props = defineProps<{
    recipe: Record<string, any>;
}>();

const description = computed(() => {
  return getItemDescription(props.recipe.sell)
});
</script>

<template>
  <div class="recipe">
    <MinecraftItem :item="recipe.buy" />
    <MinecraftItem v-if="recipe.buyB" :item="recipe.buyB" />
    <div v-else style="width: 32px; min-width: 32px" />
    <img src="/images/icons/arrow_right.png" alt="to" height="32">
        <div class="spacer" />
    <span style="text-align: right" v-if="description">{{description}}</span>
    <MinecraftItem :item="recipe.sell" />
  </div>
</template>

<style lang="scss">
.recipe {
  padding: 8px;
  display: flex;
  flex-wrap: nowrap;
  column-gap: 8px;
  background-color: #777;
  color: white;
  align-items: center;
  border: 2px solid black;
  
  
  .spacer {
    flex: 1 0;
  }
}
</style>