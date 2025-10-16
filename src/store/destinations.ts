import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Destination } from '@/types/destination';

export const useDestinationsStore = defineStore('destinations', () => {
  const destinations = ref<Destination[]>([
    {
      id: '1',
      name: '马尔代夫',
      description: '碧海蓝天，水上别墅，享受热带天堂的宁静与美丽',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop',
      price: 8999,
      priceUnit: '起/人',
      location: '印度洋',
      rating: 4.9,
    },
    {
      id: '2',
      name: '瑞士阿尔卑斯山',
      description: '壮丽的雪山风光，体验滑雪与登山的极致乐趣',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop',
      price: 12999,
      priceUnit: '起/人',
      location: '瑞士',
      rating: 4.8,
    },
    {
      id: '3',
      name: '京都',
      description: '古色古香的寺庙，传统日式文化的完美体验',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop',
      price: 5999,
      priceUnit: '起/人',
      location: '日本',
      rating: 4.7,
    },
    {
      id: '4',
      name: '巴黎',
      description: '浪漫之都，艺术与时尚的完美融合',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
      price: 9999,
      priceUnit: '起/人',
      location: '法国',
      rating: 4.8,
    },
    {
      id: '5',
      name: '新西兰南岛',
      description: '纯净自然风光，探险者的天堂',
      image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop',
      price: 15999,
      priceUnit: '起/人',
      location: '新西兰',
      rating: 4.9,
    },
    {
      id: '6',
      name: '圣托里尼',
      description: '爱琴海上的白色天堂，蓝白相间的浪漫之地',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop',
      price: 10999,
      priceUnit: '起/人',
      location: '希腊',
      rating: 4.8,
    },
  ]);

  const getDestinationById = (id: string) => {
    return destinations.value.find(d => d.id === id);
  };

  return {
    destinations,
    getDestinationById,
  };
});

