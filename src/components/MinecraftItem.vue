<script lang="ts" setup>
  import {computed} from 'vue'
const props = defineProps<{
    item: Record<string, any>;
}>();

const itemImage = computed(() => {
   let stripped = props.item?.id?.replace("minecraft:", "");
    if (!stripped) return "";
    if(stripped === 'crossbow')
      stripped = 'crossbow_standby'
    return `/images/item/${stripped}.png`;
});

const src = computed(() => 'url('+itemImage.value+')');

const isEnchanted = computed(() => {
const enchant = props.item.components?.['minecraft:stored_enchantments']?.levels || props.item.components?.['minecraft:enchantments']?.levels ;
return !!enchant;
});
</script>

<template>
    <div class="minecraft-item">
        <img :src="itemImage" />
        <span v-if="item.count?.value > 1">
            {{ item.count.value }}
        </span>
        <div v-if="isEnchanted" class="enchanted" src="/images/glow.png" />
    </div>
</template>

<style scoped lang="scss">
@keyframes animatedBackground {
    0% { background-position: 0 0; }
    100% { background-position: -136px 0; }
}
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
    
    .enchanted {
      width: 32px;
    height: 32px;
    background: url(/images/glow-modified.png);
    background-blend-mode: screen;
    background-repeat: repeat;
    background-position: 0 0;
    //transform: rotate(135deg);
    position: absolute;
    top: 0;
    left: 0;
    mask-image: v-bind(src);
    -webkit-mask-image: v-bind(src);
    -webkit-mask-mode: alpha;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    animation: animatedBackground 5s linear infinite;
    opacity: 70%;
    }
}
</style>
