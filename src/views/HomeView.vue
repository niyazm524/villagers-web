<script setup lang="ts">
import {computed} from 'vue';
import exported from '@/exported.json';
import {parse} from 'nbt-ts';
import VillagerListItem from '@/components/VillagerListItem.vue';
import VillagersMap from '@/components/VillagersMap.vue';


const villagers = exported.map(it => parse(it.data));

console.log(villagers);
</script>

<template>
  <main>
    <VillagersMap :villagers="villagers" />
     <div class="villagers-list">
       <VillagerListItem v-for="(v, i) in villagers" :key="i" :villager="v" />
     </div>
  </main>
</template>
