<script lang="ts" setup>
  import MinecraftItem from './MinecraftItem.vue';
const props = defineProps<{
    recipe: Record<string, any>;
}>();
</script>

<template>
  <div class="recipe">
    <MinecraftItem :item="recipe.buy" />
    <MinecraftItem v-if="recipe.buyB" :item="recipe.buyB" />
    <div class="spacer" />
    <img src="/images/icons/arrow_right.png" alt="to" height="32">
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
  border: 2px solid black;
  
  
  .spacer {
    flex: 1 0;
  }
}
</style>