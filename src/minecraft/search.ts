import type {Villager} from '@/types';
import {translateProfession} from '@/minecraft/profession';
import translation from '@/minecraft/ru.json'
import {getItemDescription} from './item-description'

function itemSearchIndex(item: any) {
  const id = item.id.replace('minecraft:', '')
  const name = translation[`item.minecraft.${id}`];
  const descr = getItemDescription(item);
  if (descr) return `${name} (${descr})`
  return name;
}

export function buildSearchIndex(v: Villager) {
  const profession = translateProfession(v.VillagerData?.profession);

  const offers = v.Offers?.Recipes?.map(r => {
    return [
      itemSearchIndex(r.buy),
      r.buyB ? itemSearchIndex(r.buyB) : null,
      itemSearchIndex(r.sell),
    ].filter(Boolean).join(', ')
  })

  return [
    profession,
    ...(offers || []),
  ].filter(Boolean).join(' ').toLowerCase();
}
