import type {Villager} from '@/types';
import {translateProfession} from '@/minecraft/profession';
import translation from '@/minecraft/ru.json'

function itemSearchIndex(item: any) {
  const id = item.id.replace('minecraft:')
  const name = translation[`item.minecraft.${id}`]
  const enchant = item.components?.['minecraft:stored_enchantments']?.levels;
  if(enchant) {
    const eid = Object.keys(enchant)[0].replace('minecraft:', '')
  }
}

export function buildSearchIndex(v: Villager) {
  const profession = translateProfession(v.VillagerData?.profession);
  
  const offers = v.Offers?.Recipes?.map(r => {
    
  })
  
  return [
    profession
  ].filter(Boolean).join(' ').toLowerCase();
}