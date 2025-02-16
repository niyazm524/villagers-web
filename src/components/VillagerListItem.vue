<script setup lang="ts">
import {computed, ref} from 'vue';
import type {Villager} from '@/types';
import {translateProfession, professionPicture} from '@/minecraft/profession';
import {getLevelInfo} from '@/minecraft/level';
import VillagerRecipe from './VillagerRecipe.vue';

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

const expanded = ref(false);
</script>

<template>
  <div class="villager_container" :class="{expanded}" style="`border-color: ${level.color}`">
    <div class="heading" @click="expanded = !expanded">
      <img :src="picture">
      <div class="multiline grow">
        <div>{{profession}}</div>
        <div style="opacity: 0.7">{{level?.label}}</div>
      </div>
      <div>
        <img class="expand-icon" src="@/assets/expand.svg">
      </div>
    </div>
    <transition name="slidedown">
    <div class="recipes" v-show="expanded">
      <VillagerRecipe v-for="(recipe, idx) in villager.Offers?.Recipes" :key="idx" :recipe="recipe"/>
    </div>
    </transition>
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
      cursor: pointer;

      .expand-icon {
        transition: all 0.3s ease-in-out;
        transform: none;
      }
    }

    &.expanded .heading .expand-icon {
      transform: rotate(180deg);
    }
    .grow {
    flex: 1 0;
    }

    .multiline {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      column-gap: 8px;
    }

    .recipes {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
    }
  }
</style>
