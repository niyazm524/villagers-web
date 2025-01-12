import type {Villager} from '@/types';

const levels = [
  {
    value: 1,
    name: 'Novice',
    label: 'Новичок',
    badgeUrl: '/images/levels/Villager_badge_Novice.png',
    color: '#666564',
  },
  {
    value: 2,
    name: 'Apprentice',
    label: 'Подмастерье',
    badgeUrl: '/images/levels/Villager_badge_Apprentice.png',
    color: '#c9a1875f'
  },
  {
    value: 3,
    name: 'Journeyman',
    label: 'Ремесленник',
    badgeUrl: '/images/levels/Villager_badge_Journeyman.png',
    color: '#f5e470'
  },
  {
    value: 4,
    name: 'Master',
    label: 'Мастер',
    badgeUrl: '/images/levels/Villager_badge_Master.png',
    color: '#54e387'
  },
  {
    value: 5,
    name: 'Expert',
    label: 'Эксперт',
    badgeUrl: '/images/levels/Villager_badge_Expert.png',
    color: '#74eeda'
  },
]

export function getLevelInfo(villager: Villager) {
  const lvl = villager.VillagerData?.level.value;
  if (!lvl) return null;
  return levels.find(l => l.value === lvl);
}