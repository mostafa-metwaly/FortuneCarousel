import { ClothingItem } from '../types/game';

export const clothingData: Record<string, ClothingItem[]> = {
  hat: [
    {
      id: 'beret',
      name: 'Artist Beret',
      imageUrl: '/images/clothing/beret.png',
      color: '#8B5CF6',
      professionWeights: {
        artist: 5,
        teacher: 2,
        photographer: 3,
        barista: 1
      }
    },
    {
      id: 'pilot-cap',
      name: 'Pilot Cap',
      imageUrl: '/images/clothing/pilot-cap.png',
      color: '#3B82F6',
      professionWeights: {
        pilot: 5,
        police: 3,
        judge: 2,
        doctor: 1
      }
    },
    {
      id: 'police-cap',
      name: 'Police Cap',
      imageUrl: '/images/clothing/police-cap.png',
      color: '#1E40AF',
      professionWeights: {
        police: 5,
        judge: 3,
        pilot: 2,
        teacher: 1
      }
    },
    {
      id: 'visor',
      name: 'Sports Visor',
      imageUrl: '/images/clothing/visor.png',
      color: '#10B981',
      professionWeights: {
        athlete: 5,
        photographer: 2,
        barista: 2,
        artist: 1
      }
    },
    {
      id: 'chef-hat',
      name: 'Chef Hat',
      imageUrl: '/images/clothing/chef-hat.png',
      color: '#F59E0B',
      professionWeights: {
        barista: 5,
        doctor: 1,
        artist: 2,
        teacher: 1
      }
    },
    {
      id: 'graduation-cap',
      name: 'Graduation Cap',
      imageUrl: '/images/clothing/graduation-cap.png',
      color: '#6366F1',
      professionWeights: {
        teacher: 5,
        judge: 4,
        doctor: 3,
        artist: 1
      }
    }
  ],

  top: [
    {
      id: 'lab-coat',
      name: 'Lab Coat',
      imageUrl: '/images/clothing/lab-coat.png',
      color: '#F3F4F6',
      professionWeights: {
        doctor: 5,
        teacher: 2,
        judge: 1,
        artist: 0
      }
    },
    {
      id: 'apron',
      name: 'Kitchen Apron',
      imageUrl: '/images/clothing/apron.png',
      color: '#EF4444',
      professionWeights: {
        barista: 5,
        artist: 3,
        teacher: 1,
        doctor: 0
      }
    },
    {
      id: 'suit-jacket',
      name: 'Business Suit',
      imageUrl: '/images/clothing/suit-jacket.png',
      color: '#1F2937',
      professionWeights: {
        judge: 5,
        pilot: 4,
        police: 3,
        teacher: 2
      }
    },
    {
      id: 'hoodie',
      name: 'Casual Hoodie',
      imageUrl: '/images/clothing/hoodie.png',
      color: '#6B7280',
      professionWeights: {
        artist: 4,
        photographer: 4,
        barista: 3,
        athlete: 2
      }
    },
    {
      id: 'uniform',
      name: 'Service Uniform',
      imageUrl: '/images/clothing/uniform.png',
      color: '#059669',
      professionWeights: {
        police: 5,
        pilot: 4,
        judge: 2,
        teacher: 3
      }
    },
    {
      id: 'athletic-wear',
      name: 'Athletic Top',
      imageUrl: '/images/clothing/athletic-wear.png',
      color: '#DC2626',
      professionWeights: {
        athlete: 5,
        photographer: 2,
        barista: 1,
        artist: 1
      }
    }
  ],

  pants: [
    {
      id: 'cargo-pants',
      name: 'Cargo Pants',
      imageUrl: '/images/clothing/cargo-pants.png',
      color: '#78716C',
      professionWeights: {
        photographer: 5,
        police: 4,
        pilot: 3,
        artist: 2
      }
    },
    {
      id: 'dress-pants',
      name: 'Dress Pants',
      imageUrl: '/images/clothing/dress-pants.png',
      color: '#1F2937',
      professionWeights: {
        judge: 5,
        pilot: 4,
        teacher: 3,
        doctor: 4
      }
    },
    {
      id: 'track-pants',
      name: 'Track Pants',
      imageUrl: '/images/clothing/track-pants.png',
      color: '#2563EB',
      professionWeights: {
        athlete: 5,
        barista: 2,
        artist: 2,
        photographer: 1
      }
    },
    {
      id: 'jeans',
      name: 'Casual Jeans',
      imageUrl: '/images/clothing/jeans.png',
      color: '#1E3A8A',
      professionWeights: {
        artist: 4,
        barista: 4,
        photographer: 3,
        teacher: 2
      }
    },
    {
      id: 'skirt',
      name: 'Professional Skirt',
      imageUrl: '/images/clothing/skirt.png',
      color: '#7C2D12',
      professionWeights: {
        teacher: 5,
        judge: 4,
        pilot: 3,
        doctor: 3
      }
    },
    {
      id: 'shorts',
      name: 'Athletic Shorts',
      imageUrl: '/images/clothing/shorts.png',
      color: '#059669',
      professionWeights: {
        athlete: 5,
        barista: 2,
        photographer: 2,
        artist: 1
      }
    }
  ],

  shoes: [
    {
      id: 'boots',
      name: 'Work Boots',
      imageUrl: '/images/clothing/boots.png',
      color: '#92400E',
      professionWeights: {
        police: 5,
        photographer: 4,
        pilot: 3,
        artist: 2
      }
    },
    {
      id: 'sneakers',
      name: 'Athletic Sneakers',
      imageUrl: '/images/clothing/sneakers.png',
      color: '#DC2626',
      professionWeights: {
        athlete: 5,
        barista: 3,
        artist: 3,
        photographer: 2
      }
    },
    {
      id: 'heels',
      name: 'Professional Heels',
      imageUrl: '/images/clothing/heels.png',
      color: '#1F2937',
      professionWeights: {
        judge: 5,
        teacher: 4,
        pilot: 3,
        doctor: 2
      }
    },
    {
      id: 'loafers',
      name: 'Dress Loafers',
      imageUrl: '/images/clothing/loafers.png',
      color: '#451A03',
      professionWeights: {
        judge: 5,
        doctor: 4,
        teacher: 4,
        pilot: 3
      }
    },
    {
      id: 'sandals',
      name: 'Casual Sandals',
      imageUrl: '/images/clothing/sandals.png',
      color: '#D97706',
      professionWeights: {
        artist: 5,
        barista: 4,
        photographer: 2,
        athlete: 1
      }
    },
    {
      id: 'clogs',
      name: 'Medical Clogs',
      imageUrl: '/images/clothing/clogs.png',
      color: '#F3F4F6',
      professionWeights: {
        doctor: 5,
        barista: 3,
        teacher: 2,
        artist: 1
      }
    }
  ]
};