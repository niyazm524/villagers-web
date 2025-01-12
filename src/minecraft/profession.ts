import translations from './translations.json';
import type {Villager} from '@/types';
import images from './profession-images.json'

export function translateProfession(prof:string | null | undefined) {
  const def = prof?.replace('minecraft:', '') || 'none';
  return translations.ru[`entity.minecraft.villager.${def}`]
}

const capitalize = s => (s && String(s[0]).toUpperCase() + String(s).slice(1)) || ""

export function professionPicture(villager: Villager) {
  let prof = capitalize(villager.VillagerData?.profession?.replace('minecraft:', '') || 'Unemployed');
  const vtype = capitalize(villager.VillagerData?.type?.replace('minecraft:', '') || 'Plains');
  if(prof === 'None') prof = 'Unemployed'
  return images.find(img => img.Profession === prof)?.[vtype];
}