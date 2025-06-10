import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.chat': 'Chat IA',
    'nav.mood': 'Humeur',
    'nav.diary': 'Journal',
    'nav.games': 'Jeux',
    'nav.communities': 'Communautés',
    'nav.dashboard': 'Tableau de bord',
    'nav.pricing': 'Tarifs',

    // Home page
    'home.hero.badge': 'Santé mentale IA 24h/24',
    'home.hero.title': 'HopeWell',
    'home.hero.subtitle': 'Votre compagnon IA pour le bien-être mental',
    'home.hero.description': 'Découvrez une nouvelle approche de la santé mentale avec notre plateforme alimentée par l\'IA. Obtenez un soutien personnalisé, suivez votre humeur et connectez-vous avec une communauté bienveillante.',
    'home.cta.chat': 'Commencer à chatter',
    'home.cta.mood': 'Suivre l\'humeur',

    // Features
    'feature.ai.title': 'Assistant IA Personnel',
    'feature.ai.description': 'Chattez avec notre IA empathique 24h/24 pour obtenir du soutien et des conseils personnalisés.',
    'feature.mood.title': 'Suivi d\'Humeur',
    'feature.mood.description': 'Surveillez vos émotions quotidiennes avec des analyses avancées et des insights.',
    'feature.diary.title': 'Journal Personnel',
    'feature.diary.description': 'Écrivez vos pensées et suivez votre progression avec notre journal intelligent.',
    'feature.games.title': 'Jeux Thérapeutiques',
    'feature.games.description': 'Détendez-vous avec des jeux conçus pour réduire le stress et l\'anxiété.',
    'feature.communities.title': 'Communautés Mondiales',
    'feature.communities.description': 'Connectez-vous avec des personnes partageant les mêmes idées du monde entier.',
    'feature.language.title': 'Support Multilingue',
    'feature.language.description': 'Utilisez la plateforme en français, arabe ou anglais selon vos préférences.',

    // Stats
    'stats.support': 'Support disponible',
    'stats.private': 'Confidentialité',
    'stats.ai': 'Alimenté par l\'IA',
    'stats.care': 'Soins personnalisés',

    // Pricing translations
    'pricing.header.badge': 'Plans tarifaires',
    'pricing.header.title': 'Choisissez votre plan HopeWell',
    'pricing.header.subtitle': 'Commencez gratuitement et évoluez selon vos besoins de bien-être mental',
    'pricing.popular': 'Populaire',
    
    'pricing.free.name': 'Gratuit',
    'pricing.free.price': 'Gratuit',
    'pricing.free.description': 'Idéal pour les utilisateurs occasionnels ou ceux qui commencent leur parcours de bien-être.',
    'pricing.free.feature1': 'Sessions de chat IA quotidiennes (3-5 par jour)',
    'pricing.free.feature2': 'Vérifications émotionnelles',
    'pricing.free.feature3': 'Suivi d\'humeur de base',
    'pricing.free.feature4': 'Suggestions de journaling',
    'pricing.free.feature5': 'Historique des conversations et personnalisation',

    'pricing.plus.name': 'HopeWell Plus',
    'pricing.plus.price': '7,99€',
    'pricing.plus.period': '/ mois',
    'pricing.plus.description': 'Pour les utilisateurs qui veulent une expérience de bien-être émotionnel plus approfondie.',
    'pricing.plus.feature1': 'Conversations IA illimitées',
    'pricing.plus.feature2': 'Accès complet à l\'historique des chats',
    'pricing.plus.feature3': 'Analyses d\'humeur avancées et tendances',
    'pricing.plus.feature4': 'Conseils de bien-être personnalisés',
    'pricing.plus.feature5': 'Personnalisation légère (ton du bot, thème)',
    'pricing.plus.feature6': 'Coach humain/escalade (réservé au niveau Pro)',

    'pricing.pro.name': 'HopeWell Pro',
    'pricing.pro.price': '19,99€',
    'pricing.pro.period': '/ mois',
    'pricing.pro.description': 'Pour ceux qui recherchent une croissance sérieuse, une préparation thérapeutique ou un bien-être mental guidé.',
    'pricing.pro.feature1': 'Tout dans Plus, et plus :',
    'pricing.pro.feature2': 'Intégration avec des professionnels de santé mentale agréés',
    'pricing.pro.feature3': 'Outils thérapeutiques guidés par IA (journaling TCC, exercices de respiration)',
    'pricing.pro.feature4': 'Email hebdomadaire d\'insights émotionnels',
    'pricing.pro.feature5': 'Support de journal vocal (téléchargement ou enregistrement)',
    'pricing.pro.feature6': 'Suivi des objectifs et rapports de progression',

    'pricing.b2b.title': 'Tarification B2B ou Institutionnelle',
    'pricing.b2b.subtitle': 'Pour les universités, équipes RH ou organisations de bien-être',
    'pricing.b2b.features.title': 'Fonctionnalités Entreprise',
    'pricing.b2b.features.feature1': 'Tarification personnalisée par siège',
    'pricing.b2b.features.feature2': 'Tableau de bord administrateur',
    'pricing.b2b.features.feature3': 'Rapports d\'utilisation anonymes',
    'pricing.b2b.benefits.title': 'Avantages Supplémentaires',
    'pricing.b2b.benefits.benefit1': 'Alertes d\'intervention précoce (opt-in)',
    'pricing.b2b.benefits.benefit2': 'Intégration personnalisée',
    'pricing.b2b.benefits.benefit3': 'Support prioritaire',

    'pricing.cta.free': 'Commencer Gratuitement',
    'pricing.cta.upgrade': 'Choisir ce Plan',
    'pricing.b2b.cta': 'Contacter les Ventes',
    'pricing.faq.title': 'Des questions ?',
    'pricing.faq.subtitle': 'Notre équipe de support est là pour vous aider à choisir le bon plan.',
    'pricing.faq.cta': 'Contacter le Support',

    // Language Settings
    'lang.title': 'Paramètres de langue',
    'lang.subtitle': 'Personnalisez votre expérience linguistique',
    'lang.description': 'Choisissez votre langue préférée pour une expérience optimale sur HopeWell.',
    'lang.available': 'Langues disponibles',
    'lang.selected': 'Sélectionné',
    'lang.apply': 'Appliquer les paramètres',
    'lang.regional': 'Paramètres régionaux',
    'lang.date': 'Format de date',
    'lang.time': 'Format d\'heure',
  },
  
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.chat': 'محادثة الذكي',
    'nav.mood': 'المزاج',
    'nav.diary': 'المذكرات',
    'nav.games': 'الألعاب',
    'nav.communities': 'المجتمعات',
    'nav.dashboard': 'لوحة التحكم',
    'nav.pricing': 'الأسعار',

    // Home page
    'home.hero.badge': 'الصحة النفسية بالذكاء الاصطناعي 24/7',
    'home.hero.title': 'أمل ويل',
    'home.hero.subtitle': 'رفيقك الذكي للعافية النفسية',
    'home.hero.description': 'اكتشف نهجاً جديداً للصحة النفسية مع منصتنا المدعومة بالذكاء الاصطناعي. احصل على دعم شخصي، تتبع مزاجك، وتواصل مع مجتمع داعم.',
    'home.cta.chat': 'بدء المحادثة',
    'home.cta.mood': 'تتبع المزاج',

    // Features
    'feature.ai.title': 'مساعد ذكي شخصي',
    'feature.ai.description': 'تحدث مع ذكائنا الاصطناعي المتعاطف على مدار الساعة للحصول على دعم ونصائح شخصية.',
    'feature.mood.title': 'تتبع المزاج',
    'feature.mood.description': 'راقب مشاعرك اليومية مع تحليلات متقدمة ورؤى عميقة.',
    'feature.diary.title': 'مذكرات شخصية',
    'feature.diary.description': 'اكتب أفكارك وتتبع تقدمك مع مذكراتنا الذكية.',
    'feature.games.title': 'ألعاب علاجية',
    'feature.games.description': 'استرخِ مع ألعاب مصممة لتقليل التوتر والقلق.',
    'feature.communities.title': 'مجتمعات عالمية',
    'feature.communities.description': 'تواصل مع أشخاص متشابهين في التفكير من جميع أنحاء العالم.',
    'feature.language.title': 'دعم متعدد اللغات',
    'feature.language.description': 'استخدم المنصة بالعربية أو الفرنسية أو الإنجليزية حسب تفضيلاتك.',

    // Stats
    'stats.support': 'دعم متاح',
    'stats.private': 'خصوصية',
    'stats.ai': 'مدعوم بالذكاء الاصطناعي',
    'stats.care': 'رعاية شخصية',

    // Pricing translations
    'pricing.header.badge': 'خطط الأسعار',
    'pricing.header.title': 'اختر خطة أمل ويل الخاصة بك',
    'pricing.header.subtitle': 'ابدأ مجاناً وتطور حسب احتياجات صحتك النفسية',
    'pricing.popular': 'الأكثر شعبية',
    
    'pricing.free.name': 'مجاني',
    'pricing.free.price': 'مجاني',
    'pricing.free.description': 'مثالي للمستخدمين العاديين أو أولئك الذين يبدؤون رحلة العافية.',
    'pricing.free.feature1': 'جلسات محادثة ذكية يومية (3-5 في اليوم)',
    'pricing.free.feature2': 'فحوصات عاطفية',
    'pricing.free.feature3': 'تتبع المزاج الأساسي',
    'pricing.free.feature4': 'اقتراحات كتابة المذكرات',
    'pricing.free.feature5': 'تاريخ المحادثات والتخصيص',

    'pricing.plus.name': 'أمل ويل بلس',
    'pricing.plus.price': '7.99$',
    'pricing.plus.period': '/ شهر',
    'pricing.plus.description': 'للمستخدمين الذين يريدون تجربة عافية عاطفية أعمق.',
    'pricing.plus.feature1': 'محادثات ذكية غير محدودة',
    'pricing.plus.feature2': 'وصول كامل لتاريخ المحادثات',
    'pricing.plus.feature3': 'تحليلات واتجاهات مزاج متقدمة',
    'pricing.plus.feature4': 'نصائح عافية شخصية',
    'pricing.plus.feature5': 'تخصيص خفيف (نبرة البوت، موضوع الواجهة)',
    'pricing.plus.feature6': 'مدرب بشري/تصعيد (محجوز للمستوى الاحترافي)',

    'pricing.pro.name': 'أمل ويل برو',
    'pricing.pro.price': '19.99$',
    'pricing.pro.period': '/ شهر',
    'pricing.pro.description': 'للأشخاص الذين يبحثون عن نمو جدي، تحضير علاجي، أو عافية نفسية موجهة.',
    'pricing.pro.feature1': 'كل شيء في بلس، والمزيد:',
    'pricing.pro.feature2': 'التكامل مع متخصصي الصحة النفسية المرخصين',
    'pricing.pro.feature3': 'أدوات علاجية موجهة بالذكاء الاصطناعي (كتابة المذكرات CBT، تمارين التنفس)',
    'pricing.pro.feature4': 'إيميل أسبوعي لرؤى العواطف',
    'pricing.pro.feature5': 'دعم المذكرات الصوتية (رفع أو تسجيل)',
    'pricing.pro.feature6': 'تتبع الأهداف وتقارير التقدم',

    'pricing.b2b.title': 'أسعار الشركات أو المؤسسات',
    'pricing.b2b.subtitle': 'للجامعات، فرق الموارد البشرية أو منظمات العافية',
    'pricing.b2b.features.title': 'مميزات المؤسسات',
    'pricing.b2b.features.feature1': 'تسعير مخصص لكل مقعد',
    'pricing.b2b.features.feature2': 'لوحة تحكم إدارية',
    'pricing.b2b.features.feature3': 'تقارير استخدام مجهولة',
    'pricing.b2b.benefits.title': 'فوائد إضافية',
    'pricing.b2b.benefits.benefit1': 'تنبيهات التدخل المبكر (اختيارية)',
    'pricing.b2b.benefits.benefit2': 'تكامل مخصص',
    'pricing.b2b.benefits.benefit3': 'دعم أولوية',

    'pricing.cta.free': 'ابدأ مجاناً',
    'pricing.cta.upgrade': 'اختر هذه الخطة',
    'pricing.b2b.cta': 'اتصل بالمبيعات',
    'pricing.faq.title': 'أسئلة؟',
    'pricing.faq.subtitle': 'فريق الدعم لدينا هنا لمساعدتك في اختيار الخطة المناسبة.',
    'pricing.faq.cta': 'اتصل بالدعم',

    // Language Settings
    'lang.title': 'إعدادات اللغة',
    'lang.subtitle': 'خصص تجربتك اللغوية',
    'lang.description': 'اختر لغتك المفضلة لتجربة مثلى على أمل ويل.',
    'lang.available': 'اللغات المتاحة',
    'lang.selected': 'مختارة',
    'lang.apply': 'تطبيق الإعدادات',
    'lang.regional': 'الإعدادات الإقليمية',
    'lang.date': 'تنسيق التاريخ',
    'lang.time': 'تنسيق الوقت',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.chat': 'AI Chat',
    'nav.mood': 'Mood',
    'nav.diary': 'Diary',
    'nav.games': 'Games',
    'nav.communities': 'Communities',
    'nav.dashboard': 'Dashboard',
    'nav.pricing': 'Pricing',

    // Home page
    'home.hero.badge': '24/7 AI Mental Health',
    'home.hero.title': 'HopeWell',
    'home.hero.subtitle': 'Your AI Companion for Mental Wellness',
    'home.hero.description': 'Discover a new approach to mental health with our AI-powered platform. Get personalized support, track your mood, and connect with a caring community.',
    'home.cta.chat': 'Start Chatting',
    'home.cta.mood': 'Track Mood',

    // Features
    'feature.ai.title': 'Personal AI Assistant',
    'feature.ai.description': 'Chat with our empathetic AI 24/7 for personalized support and guidance.',
    'feature.mood.title': 'Mood Tracking',
    'feature.mood.description': 'Monitor your daily emotions with advanced analytics and insights.',
    'feature.diary.title': 'Personal Diary',
    'feature.diary.description': 'Write your thoughts and track your progress with our smart journal.',
    'feature.games.title': 'Therapeutic Games',
    'feature.games.description': 'Relax with games designed to reduce stress and anxiety.',
    'feature.communities.title': 'Global Communities',
    'feature.communities.description': 'Connect with like-minded people from around the world.',
    'feature.language.title': 'Multi-language Support',
    'feature.language.description': 'Use the platform in French, Arabic, or English according to your preferences.',

    // Stats
    'stats.support': 'Available Support',
    'stats.private': 'Privacy',
    'stats.ai': 'AI Powered',
    'stats.care': 'Personal Care',

    // Pricing translations
    'pricing.header.badge': 'Pricing Plans',
    'pricing.header.title': 'Choose Your HopeWell Plan',
    'pricing.header.subtitle': 'Start free and scale as your mental wellness needs grow',
    'pricing.popular': 'Most Popular',
    
    'pricing.free.name': 'Free',
    'pricing.free.price': 'Free',
    'pricing.free.description': 'Ideal for casual users or those just starting their wellness journey.',
    'pricing.free.feature1': 'Daily AI chat sessions (3-5 per day)',
    'pricing.free.feature2': 'Emotional check-ins',
    'pricing.free.feature3': 'Basic mood tracking',
    'pricing.free.feature4': 'Journaling prompts',
    'pricing.free.feature5': 'Chat history and personalization',

    'pricing.plus.name': 'HopeWell Plus',
    'pricing.plus.price': '$7.99',
    'pricing.plus.period': '/ month',
    'pricing.plus.description': 'For users who want a deeper emotional wellness experience.',
    'pricing.plus.feature1': 'Unlimited AI conversations',
    'pricing.plus.feature2': 'Full chat history access',
    'pricing.plus.feature3': 'Advanced mood analytics and trends',
    'pricing.plus.feature4': 'Personalized wellness tips',
    'pricing.plus.feature5': 'Light customization (bot tone, interface theme)',
    'pricing.plus.feature6': 'Human coach/escalation (reserved for Pro tier)',

    'pricing.pro.name': 'HopeWell Pro',
    'pricing.pro.price': '$19.99',
    'pricing.pro.period': '/ month',
    'pricing.pro.description': 'For people looking for serious growth, therapy prep, or guided mental wellness.',
    'pricing.pro.feature1': 'Everything in Plus, and:',
    'pricing.pro.feature2': 'Integration with licensed mental health professionals',
    'pricing.pro.feature3': 'AI-guided therapy tools (CBT journaling, breathing exercises)',
    'pricing.pro.feature4': 'Weekly emotion insights email',
    'pricing.pro.feature5': 'Voice journal support (upload or record)',
    'pricing.pro.feature6': 'Goal tracking and progress reports',

    'pricing.b2b.title': 'B2B or Institutional Pricing',
    'pricing.b2b.subtitle': 'For universities, HR teams, or wellness organizations',
    'pricing.b2b.features.title': 'Enterprise Features',
    'pricing.b2b.features.feature1': 'Custom per-seat pricing',
    'pricing.b2b.features.feature2': 'Admin dashboard',
    'pricing.b2b.features.feature3': 'Anonymous usage reports',
    'pricing.b2b.benefits.title': 'Additional Benefits',
    'pricing.b2b.benefits.benefit1': 'Early intervention alerts (opt-in)',
    'pricing.b2b.benefits.benefit2': 'Custom onboarding',
    'pricing.b2b.benefits.benefit3': 'Priority support',

    'pricing.cta.free': 'Start Free',
    'pricing.cta.upgrade': 'Choose This Plan',
    'pricing.b2b.cta': 'Contact Sales',
    'pricing.faq.title': 'Questions?',
    'pricing.faq.subtitle': 'Our support team is here to help you choose the right plan.',
    'pricing.faq.cta': 'Contact Support',

    // Language Settings
    'lang.title': 'Language Settings',
    'lang.subtitle': 'Customize your language experience',
    'lang.description': 'Choose your preferred language for an optimal experience on HopeWell.',
    'lang.available': 'Available Languages',
    'lang.selected': 'Selected',
    'lang.apply': 'Apply Settings',
    'lang.regional': 'Regional Settings',
    'lang.date': 'Date Format',
    'lang.time': 'Time Format',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
