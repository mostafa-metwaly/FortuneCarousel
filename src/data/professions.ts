import { Profession } from '../types/game';

export const professions: Profession[] = [
  {
    id: 'doctor',
    name: 'Doctor',
    emoji: '👩‍⚕️',
    imageUrl: '/images/professions/doctor.png',
    characterUrl: '/images/character/doctor.png', 
    description: 'Your style shows dedication to precision, care, and professionalism. You value comfort and functionality while maintaining a clean, trustworthy appearance.',
    illustration: '🏥',
    facts: [
      'Doctors spend 11+ years in medical education and training on average.',
      'The medical field offers over 120 different specialties to choose from.',
      'Healthcare professionals have one of the highest job satisfaction rates.',
      'The stethoscope was invented in 1816 and is still an essential tool today.'
    ]
  },
  {
    id: 'artist',
    name: 'Artist',
    emoji: '👩‍🎨',
    imageUrl: '/images/professions/artist.png',
    characterUrl: '/images/character/artist.png',
    description: 'Your creative spirit shines through your unique style choices. You value self-expression, originality, and aren\'t afraid to stand out from the crowd.',
    illustration: '🎨',
    facts: [
      'The art industry contributes over $760 billion to the global economy annually.',
      'Many famous artists only became successful after their lifetime.',
      'Digital art and NFTs have revolutionized how artists sell their work.',
      'Art therapy is proven to reduce stress and improve mental health.'
    ]
  },
  {
    id: 'barista',
    name: 'Barista',
    emoji: '☕',
    imageUrl: '/images/professions/barista.png',
    characterUrl: '/images/character/athelete.png',
    description: 'Your approachable style and practical choices show you love creating experiences for others. You balance creativity with efficiency in everything you do.',
    illustration: '☕',
    facts: [
      'The perfect espresso shot should be extracted in 25-30 seconds.',
      'Latte art requires months of practice to master.',
      'Coffee is the second most traded commodity in the world after oil.',
      'A skilled barista can identify coffee origins just by taste and aroma.'
    ]
  },
  {
    id: 'police',
    name: 'Police Officer',
    emoji: '👮',
    imageUrl: '/images/professions/police.png',
    characterUrl: '/images/character/police.png',
    description: 'Your authoritative yet approachable style shows you value justice, community service, and making a positive impact on society.',
    illustration: '🚔',
    facts: [
      'Police officers undergo extensive physical and psychological training.',
      'Community policing has reduced crime rates in many cities by 30%.',
      'Modern police work involves much more than crime fighting.',
      'Police dogs can be trained to detect over 19,000 different scents.'
    ]
  },
  {
    id: 'teacher',
    name: 'Teacher',
    emoji: '👩‍🏫',
    imageUrl: '/images/professions/teacher.png',
    characterUrl: '/images/character/artist.png',
    description: 'Your balanced, professional style shows you care about making knowledge accessible. You inspire others while maintaining approachability and authority.',
    illustration: '📚',
    facts: [
      'Teachers impact an estimated 3,000 students during their career.',
      'Finland consistently ranks #1 in education with highly respected teachers.',
      'The teaching profession requires continuous learning and adaptation.',
      'Studies show teacher quality is the most important in-school factor for student success.'
    ]
  },
  {
    id: 'photographer',
    name: 'Photographer',
    emoji: '📸',
    imageUrl: '/images/professions/Photographer.png',
    characterUrl: '/images/character/athelete.png',
    description: 'Your practical yet stylish choices show you see beauty everywhere. You balance functionality with aesthetics, always ready to capture the perfect moment.',
    illustration: '📷',
    facts: [
      'The first photograph took 8 hours of exposure time in 1826.',
      'Professional photographers can earn six figures in specialized fields.',
      'The human eye sees roughly 576 megapixels of detail.',
      'Photography literally means "drawing with light" in Greek.'
    ]
  },
  {
    id: 'athlete',
    name: 'Professional Athlete',
    emoji: '🏃‍♀️',
    imageUrl: '/images/professions/athlete.png',
    characterUrl: '/images/character/athlete.png',
    description: 'Your performance-focused style shows dedication to excellence. You prioritize function, comfort, and peak performance in everything you wear.',
    illustration: '🏆',
    facts: [
      'Professional athletes train 6-8 hours daily on average.',
      'Sports psychology is crucial for peak athletic performance.',
      'The global sports industry is worth over $500 billion annually.',
      'Recovery and nutrition are as important as training itself.'
    ]
  },
  {
    id: 'pilot',
    name: 'Commercial Pilot',
    emoji: '👨‍✈️',
    imageUrl: '/images/professions/pilot.png',
    characterUrl: '/images/character/pilot.png',
    description: 'Your sharp, professional appearance reflects precision and responsibility. You value structure, attention to detail, and maintaining high standards.',
    illustration: '✈️',
    facts: [
      'Commercial pilots require 1,500+ flight hours to get certified.',
      'Pilots must pass medical exams every 6-12 months.',
      'Auto-pilot systems still require constant pilot monitoring.',
      'The aviation industry employs over 65 million people worldwide.'
    ]
  },
  {
    id: 'judge',
    name: 'Judge',
    emoji: '👩‍⚖️',
    imageUrl: '/images/professions/judge.png',
    characterUrl: '/images/character/lawyer.png',
    description: 'Your refined, authoritative style shows wisdom and fairness. You command respect while remaining approachable and maintaining the highest professional standards.',
    illustration: '⚖️',
    facts: [
      'Most judges have 15+ years of legal experience before appointment.',
      'Judicial robes symbolize impartiality and the authority of law.',
      'Judges must recuse themselves from cases where they have conflicts.',
      'The scales of justice represent weighing evidence fairly.'
    ]
  }
];