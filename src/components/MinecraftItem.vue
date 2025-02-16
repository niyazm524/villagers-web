<script lang="ts" setup>
const props = defineProps<{
    item: Record<string, any>;
}>();

function itemImage(id: string) {
    let stripped = id?.replace("minecraft:", "");
    if (!stripped) return "";
    if(stripped === 'crossbow')
      stripped = 'crossbow_standby'
    return `/images/item/${stripped}.png`;
}
</script>

<template>
    <div class="minecraft-item">
        <img :src="itemImage(item?.id)" />
        <span v-if="item.count?.value > 1">
            {{ item.count.value }}
        </span>
    </div>
</template>

<style scoped lang="scss">
.minecraft-item {
    width: 32px;
    height: 32px;
    position: relative;

    img {
        height: 100%;
    }

    span {
        position: absolute;
        color: white;
        bottom: -4px;
        right: -4px;
        display: inline-block;
        font-family: "Minecraft", sans-serif;
        line-height: 1;
        text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);
    }
}
</style>
