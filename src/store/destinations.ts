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
      longDescription: '马尔代夫，印度洋上的热带天堂，以其清澈的海水、洁白的沙滩和豪华的水上别墅而闻名。这里是潜水爱好者的梦想之地，拥有世界上最美丽的珊瑚礁和丰富的海洋生物。在这里，您可以享受极致的放松与浪漫，体验奢华度假的完美典范。',
      images: [
        'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
      ],
      highlights: ['水上别墅体验', '浮潜和潜水', '私密沙滩', '水疗中心', '日落巡航'],
      duration: '5天4晚',
      bestTime: '11月至次年4月',
      included: ['往返机票', '豪华水上别墅住宿', '每日三餐', '机场接送', '浮潜装备'],
      excluded: ['个人消费', '小费', '旅游保险', '水上运动项目'],
      itinerary: [
        {
          day: 1,
          title: '抵达马尔代夫',
          description: '抵达马累国际机场，专车接送至码头，乘坐快艇前往度假村',
          activities: ['机场接机', '入住水上别墅', '欢迎晚宴'],
        },
        {
          day: 2,
          title: '海岛探索',
          description: '全天自由活动，享受海岛风光',
          activities: ['浮潜体验', '海滩休闲', '水上运动'],
        },
        {
          day: 3,
          title: '深潜体验',
          description: '专业教练带领，探索海底世界',
          activities: ['潜水课程', '珊瑚礁探索', 'SPA体验'],
        },
        {
          day: 4,
          title: '浪漫之旅',
          description: '日落巡航，享受双人浪漫晚餐',
          activities: ['日落巡航', '沙滩烛光晚餐', '星空观赏'],
        },
        {
          day: 5,
          title: '返程',
          description: '享用早餐后，前往机场返程',
          activities: ['退房', '机场送机', '返程'],
        },
      ],
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
      longDescription: '瑞士阿尔卑斯山，欧洲屋脊的壮丽景观。在这里，您可以乘坐登山火车穿越云端，在世界级滑雪场感受速度与激情，或在山间小镇享受宁静时光。无论是冬季的滑雪胜地，还是夏季的徒步天堂，阿尔卑斯山都会给您带来难忘的体验。',
      images: [
        'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1583582722776-7b1e0a621b4e?w=1200&h=800&fit=crop',
        'https://images.unsplash.com/photo-1606227828035-fbe9abb1e85c?w=1200&h=800&fit=crop',
      ],
      highlights: ['少女峰观光', '滑雪体验', '登山火车', '山间徒步', '特色奶酪品尝'],
      duration: '7天6晚',
      bestTime: '12月至次年3月（滑雪），6月至9月（徒步）',
      included: ['往返机票', '豪华酒店住宿', '每日早餐', '瑞士通票', '滑雪装备租赁'],
      excluded: ['午晚餐', '个人消费', '滑雪课程费用', '旅游保险'],
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

