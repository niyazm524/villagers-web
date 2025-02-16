<script setup lang="ts">
import { computed, ref } from "vue";
import exported from "@/exported.json";
import { parse } from "nbt-ts";
import VillagerListItem from "@/components/VillagerListItem.vue";
import VillagersMap from "@/components/VillagersMap.vue";
import { buildSearchIndex } from "@/minecraft/search";

const villagers = exported.map(it => {
    const r = parse(it.data);
    r.id = r.UUID.toString();
    r.search = buildSearchIndex(r);
    return r;
});

const searchModel = ref("");

const filteredVillagers = computed(() => {
    const trimmed = searchModel.value.trim().toLowerCase();
    if (!trimmed.length) return villagers;
    return villagers.filter(v => {
        return v.search.includes(trimmed);
    });
});

console.log(villagers);
</script>

<template>
    <main>
        <VillagersMap :villagers="filteredVillagers" />
        <input type="search" class="search" v-model="searchModel" />
        <div class="villagers-list">
            <VillagerListItem
                v-for="(v, i) in filteredVillagers"
                :key="v.id"
                :villager="v"
            />
        </div>
    </main>
</template>
<style lang="scss">
main {
  max-width: 600px;
}
.search {
    display: block;
    width: 100%;
    padding: 4px;
    margin-top: 12px;
}
</style>
