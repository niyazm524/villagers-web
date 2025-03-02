import type {Villager} from '@/types';
import translation from '@/minecraft/ru.json'


export function getItemDescription(item: any) {
  const enchant = item.components?.['minecraft:stored_enchantments']?.levels || item.components?.['minecraft:enchantments']?.levels;
  if(enchant) {
    return Object.entries(enchant).map(([mcEid, level]) => {
      const eid = mcEid.replace('minecraft:', '');
      const eName = translation[`enchantment.minecraft.${eid}`];
      const levelTranslated = translation[`enchantment.level.${
        level.value}`];
        return `${eName} ${levelTranslated}`
    }).join(', ')
  }
}