
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translation data
const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.chat': 'Chat IA',
    'nav.mood': 'Suivi Humeur',
    'nav.diary': 'Journal',
    'nav.games': 'Jeux',
    'nav.communities': 'Communautés',
    'nav.dashboard': 'Tableau de Bord',
    
    // Home page
    'home.hero.badge': 'Bien-être Mental Alimenté par l\'IA',
    'home.hero.title': 'HopeWell',
    'home.hero.subtitle': 'Votre Compagnon IA',
    'home.hero.description': 'Un espace sûr et empathique pour la réflexion émotionnelle et le soutien. Disponible 24h/24 et 7j/7 avec des conversations intelligentes, un suivi de l\'humeur et des invites guidées pour vous aider à construire un chemin vers la clarté intérieure et le bien-être.',
    'home.cta.chat': 'Commencer une Conversation',
    'home.cta.mood': 'Suivre Votre Humeur',
    
    // Features
    'feature.ai.title': 'Conversations Alimentées par l\'IA',
    'feature.ai.description': 'Interagissez avec notre IA empathique qui comprend vos émotions et fournit un soutien personnalisé adapté à vos besoins.',
    'feature.mood.title': 'Suivi de l\'Humeur',
    'feature.mood.description': 'Surveillez vos schémas émotionnels avec un suivi intelligent qui aide à identifier les déclencheurs et les progrès au fil du temps.',
    'feature.diary.title': 'Journal Personnel',
    'feature.diary.description': 'Tenez un journal de vos pensées et émotions pour favoriser la découverte de soi et la croissance émotionnelle.',
    'feature.games.title': 'Jeux Thérapeutiques',
    'feature.games.description': 'Découvrez des activités ludiques conçues pour améliorer votre bien-être mental et réduire le stress.',
    'feature.communities.title': 'Communautés Mondiales',
    'feature.communities.description': 'Rejoignez des communautés de soutien du monde entier et connectez-vous avec des personnes qui partagent vos expériences.',
    'feature.language.title': 'Support Multilingue',
    'feature.language.description': 'Utilisez HopeWell en français, arabe ou anglais avec un support IA complet dans chaque langue.',
    
    // Stats
    'stats.support': 'Soutien Disponible',
    'stats.private': 'Privé et Sécurisé',
    'stats.ai': 'Insights Alimentés',
    'stats.care': 'Soins Personnalisés',
    
    // Language Settings
    'lang.title': 'Paramètres de Langue',
    'lang.subtitle': 'Choisissez Votre Langue',
    'lang.description': 'Sélectionnez la langue dans laquelle vous souhaitez utiliser HopeWell',
    'lang.available': 'Langues Disponibles',
    'lang.selected': 'Sélectionné',
    'lang.apply': 'Appliquer les Changements',
    'lang.regional': 'Paramètres Régionaux',
    'lang.date': 'Format de Date',
    'lang.time': 'Format d\'Heure',
    
    // AI Chat
    'chat.title': 'Chat IA Thérapeutique',
    'chat.subtitle': 'Conversation Sûre et Empathique',
    'chat.description': 'Partagez vos pensées et sentiments avec notre IA spécialisée en santé mentale.',
    'chat.placeholder': 'Tapez votre message ici...',
    'chat.send': 'Envoyer',
    'chat.welcome': 'Bonjour ! Je suis ici pour vous écouter et vous soutenir. Comment vous sentez-vous aujourd\'hui ?',
    
    // Mood Tracker
    'mood.title': 'Suivi de l\'Humeur',
    'mood.subtitle': 'Surveillance Quotidienne des Émotions',
    'mood.description': 'Suivez vos humeurs quotidiennes pour mieux comprendre vos schémas émotionnels.',
    'mood.today': 'Comment vous sentez-vous aujourd\'hui ?',
    'mood.anxiety': 'Niveau d\'Anxiété',
    'mood.energy': 'Niveau d\'Énergie',
    'mood.overall': 'Humeur Générale',
    'mood.save': 'Enregistrer l\'Humeur',
    'mood.history': 'Historique des Humeurs',
    'mood.insights': 'Insights',
    'mood.week': 'Cette Semaine',
    'mood.month': 'Ce Mois',
    
    // Diary
    'diary.title': 'Journal Personnel',
    'diary.subtitle': 'Réflexions et Pensées Quotidiennes',
    'diary.description': 'Exprimez vos pensées et émotions dans un espace privé et sécurisé.',
    'diary.new': 'Nouvelle Entrée',
    'diary.prompt': 'Invite du Jour',
    'diary.placeholder': 'Commencez à écrire vos pensées...',
    'diary.save': 'Enregistrer l\'Entrée',
    'diary.entries': 'Entrées Récentes',
    
    // Games
    'games.title': 'Jeux Thérapeutiques',
    'games.subtitle': 'Activités pour le Bien-être Mental',
    'games.description': 'Découvrez des jeux et activités conçus pour améliorer votre santé mentale.',
    'games.breathing': 'Exercice de Respiration',
    'games.meditation': 'Méditation Guidée',
    'games.gratitude': 'Journal de Gratitude',
    'games.mindfulness': 'Exercice de Pleine Conscience',
    'games.start': 'Commencer',
    'games.benefits': 'Avantages pour la Santé',
    
    // Communities
    'communities.title': 'Communautés de Soutien',
    'communities.subtitle': 'Connectez-vous avec des Personnes qui Comprennent',
    'communities.description': 'Rejoignez des communautés mondiales de soutien et partagez votre parcours.',
    'communities.anxiety': 'Soutien Anxiété',
    'communities.depression': 'Soutien Dépression',
    'communities.mindfulness': 'Pleine Conscience',
    'communities.youth': 'Soutien Jeunes',
    'communities.join': 'Rejoindre',
    'communities.members': 'membres',
    'communities.online': 'en ligne',
    
    // Dashboard
    'dashboard.title': 'Tableau de Bord Bien-être',
    'dashboard.subtitle': 'Aperçu de Votre Parcours de Santé Mentale',
    'dashboard.description': 'Suivez vos progrès et insights avec notre tableau de bord intelligent.',
    'dashboard.streak': 'Série Actuelle',
    'dashboard.days': 'jours',
    'dashboard.sessions': 'Sessions IA',
    'dashboard.entries': 'Entrées Journal',
    'dashboard.activities': 'Activités Bien-être',
    'dashboard.progress': 'Progrès de l\'Humeur',
    'dashboard.week': 'Cette Semaine',
    'dashboard.insights': 'Insights IA',
    'dashboard.recommendation': 'Recommandation',
  },
  
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.chat': 'الدردشة الذكية',
    'nav.mood': 'تتبع المزاج',
    'nav.diary': 'المذكرات',
    'nav.games': 'الألعاب',
    'nav.communities': 'المجتمعات',
    'nav.dashboard': 'لوحة التحكم',
    
    // Home page
    'home.hero.badge': 'الصحة النفسية بالذكاء الاصطناعي',
    'home.hero.title': 'هوب ويل',
    'home.hero.subtitle': 'رفيقك الذكي',
    'home.hero.description': 'مساحة آمنة ومتعاطفة للتأمل العاطفي والدعم. متاح على مدار الساعة طوال أيام الأسبوع مع محادثات ذكية وتتبع المزاج وإرشادات موجهة لمساعدتك في بناء طريق نحو الوضوح الداخلي والرفاهية.',
    'home.cta.chat': 'بدء محادثة',
    'home.cta.mood': 'تتبع مزاجك',
    
    // Features
    'feature.ai.title': 'محادثات بالذكاء الاصطناعي',
    'feature.ai.description': 'تفاعل مع الذكاء الاصطناعي المتعاطف الذي يفهم مشاعرك ويقدم دعمًا شخصيًا مصممًا لاحتياجاتك.',
    'feature.mood.title': 'تتبع المزاج',
    'feature.mood.description': 'راقب أنماطك العاطفية مع التتبع الذكي الذي يساعد في تحديد المحفزات والتقدم عبر الزمن.',
    'feature.diary.title': 'مذكرات شخصية',
    'feature.diary.description': 'احتفظ بمذكرات أفكارك ومشاعرك لتعزيز اكتشاف الذات والنمو العاطفي.',
    'feature.games.title': 'ألعاب علاجية',
    'feature.games.description': 'اكتشف الأنشطة الممتعة المصممة لتحسين صحتك النفسية وتقليل التوتر.',
    'feature.communities.title': 'مجتمعات عالمية',
    'feature.communities.description': 'انضم إلى مجتمعات الدعم من جميع أنحاء العالم وتواصل مع الأشخاص الذين يشاركونك تجاربك.',
    'feature.language.title': 'دعم متعدد اللغات',
    'feature.language.description': 'استخدم هوب ويل بالفرنسية أو العربية أو الإنجليزية مع دعم ذكاء اصطناعي كامل بكل لغة.',
    
    // Stats
    'stats.support': 'الدعم متاح',
    'stats.private': 'خاص وآمن',
    'stats.ai': 'رؤى ذكية',
    'stats.care': 'رعاية شخصية',
    
    // Language Settings
    'lang.title': 'إعدادات اللغة',
    'lang.subtitle': 'اختر لغتك',
    'lang.description': 'حدد اللغة التي تريد استخدام هوب ويل بها',
    'lang.available': 'اللغات المتاحة',
    'lang.selected': 'محدد',
    'lang.apply': 'تطبيق التغييرات',
    'lang.regional': 'الإعدادات الإقليمية',
    'lang.date': 'تنسيق التاريخ',
    'lang.time': 'تنسيق الوقت',
    
    // AI Chat
    'chat.title': 'الدردشة العلاجية الذكية',
    'chat.subtitle': 'محادثة آمنة ومتعاطفة',
    'chat.description': 'شارك أفكارك ومشاعرك مع الذكاء الاصطناعي المتخصص في الصحة النفسية.',
    'chat.placeholder': 'اكتب رسالتك هنا...',
    'chat.send': 'إرسال',
    'chat.welcome': 'مرحبًا! أنا هنا للاستماع إليك ودعمك. كيف تشعر اليوم؟',
    
    // Mood Tracker
    'mood.title': 'تتبع المزاج',
    'mood.subtitle': 'مراقبة المشاعر اليومية',
    'mood.description': 'تتبع حالاتك المزاجية اليومية لفهم أنماطك العاطفية بشكل أفضل.',
    'mood.today': 'كيف تشعر اليوم؟',
    'mood.anxiety': 'مستوى القلق',
    'mood.energy': 'مستوى الطاقة',
    'mood.overall': 'المزاج العام',
    'mood.save': 'حفظ المزاج',
    'mood.history': 'تاريخ المزاج',
    'mood.insights': 'رؤى',
    'mood.week': 'هذا الأسبوع',
    'mood.month': 'هذا الشهر',
    
    // Diary
    'diary.title': 'المذكرات الشخصية',
    'diary.subtitle': 'تأملات وأفكار يومية',
    'diary.description': 'عبر عن أفكارك ومشاعرك في مساحة خاصة وآمنة.',
    'diary.new': 'إدخال جديد',
    'diary.prompt': 'موضوع اليوم',
    'diary.placeholder': 'ابدأ في كتابة أفكارك...',
    'diary.save': 'حفظ الإدخال',
    'diary.entries': 'الإدخالات الأخيرة',
    
    // Games
    'games.title': 'ألعاب علاجية',
    'games.subtitle': 'أنشطة للصحة النفسية',
    'games.description': 'اكتشف الألعاب والأنشطة المصممة لتحسين صحتك النفسية.',
    'games.breathing': 'تمرين التنفس',
    'games.meditation': 'التأمل الموجه',
    'games.gratitude': 'مذكرة الامتنان',
    'games.mindfulness': 'تمرين اليقظة الذهنية',
    'games.start': 'بدء',
    'games.benefits': 'فوائد صحية',
    
    // Communities
    'communities.title': 'مجتمعات الدعم',
    'communities.subtitle': 'تواصل مع أشخاص يفهمونك',
    'communities.description': 'انضم إلى مجتمعات الدعم العالمية وشارك رحلتك.',
    'communities.anxiety': 'دعم القلق',
    'communities.depression': 'دعم الاكتئاب',
    'communities.mindfulness': 'اليقظة الذهنية',
    'communities.youth': 'دعم الشباب',
    'communities.join': 'انضمام',
    'communities.members': 'أعضاء',
    'communities.online': 'متصل',
    
    // Dashboard
    'dashboard.title': 'لوحة تحكم الرفاهية',
    'dashboard.subtitle': 'نظرة عامة على رحلة صحتك النفسية',
    'dashboard.description': 'تتبع تقدمك ورؤاك مع لوحة التحكم الذكية لدينا.',
    'dashboard.streak': 'السلسلة الحالية',
    'dashboard.days': 'أيام',
    'dashboard.sessions': 'جلسات ذكية',
    'dashboard.entries': 'إدخالات المذكرات',
    'dashboard.activities': 'أنشطة الرفاهية',
    'dashboard.progress': 'تقدم المزاج',
    'dashboard.week': 'هذا الأسبوع',
    'dashboard.insights': 'رؤى ذكية',
    'dashboard.recommendation': 'توصية',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.chat': 'AI Chat',
    'nav.mood': 'Mood Tracker',
    'nav.diary': 'Diary',
    'nav.games': 'Games',
    'nav.communities': 'Communities',
    'nav.dashboard': 'Dashboard',
    
    // Home page
    'home.hero.badge': 'AI-Powered Mental Wellness',
    'home.hero.title': 'HopeWell',
    'home.hero.subtitle': 'Your AI Companion',
    'home.hero.description': 'A safe and empathetic space for emotional reflection and support. Available 24/7 with intelligent conversations, mood tracking, and guided prompts to help you build a path toward inner clarity and well-being.',
    'home.cta.chat': 'Start a Conversation',
    'home.cta.mood': 'Track Your Mood',
    
    // Features
    'feature.ai.title': 'AI-Powered Conversations',
    'feature.ai.description': 'Interact with our empathetic AI that understands your emotions and provides personalized support tailored to your needs.',
    'feature.mood.title': 'Mood Tracking',
    'feature.mood.description': 'Monitor your emotional patterns with intelligent tracking that helps identify triggers and progress over time.',
    'feature.diary.title': 'Personal Diary',
    'feature.diary.description': 'Keep a journal of your thoughts and emotions to foster self-discovery and emotional growth.',
    'feature.games.title': 'Therapeutic Games',
    'feature.games.description': 'Discover playful activities designed to improve your mental wellness and reduce stress.',
    'feature.communities.title': 'Global Communities',
    'feature.communities.description': 'Join support communities from around the world and connect with people who share your experiences.',
    'feature.language.title': 'Multilingual Support',
    'feature.language.description': 'Use HopeWell in French, Arabic, or English with full AI support in each language.',
    
    // Stats
    'stats.support': 'Support Available',
    'stats.private': 'Private & Secure',
    'stats.ai': 'AI-Powered Insights',
    'stats.care': 'Personalized Care',
    
    // Language Settings
    'lang.title': 'Language Settings',
    'lang.subtitle': 'Choose Your Language',
    'lang.description': 'Select the language you want to use HopeWell in',
    'lang.available': 'Available Languages',
    'lang.selected': 'Selected',
    'lang.apply': 'Apply Changes',
    'lang.regional': 'Regional Settings',
    'lang.date': 'Date Format',
    'lang.time': 'Time Format',
    
    // AI Chat
    'chat.title': 'Therapeutic AI Chat',
    'chat.subtitle': 'Safe and Empathetic Conversation',
    'chat.description': 'Share your thoughts and feelings with our AI specialized in mental health.',
    'chat.placeholder': 'Type your message here...',
    'chat.send': 'Send',
    'chat.welcome': 'Hello! I\'m here to listen and support you. How are you feeling today?',
    
    // Mood Tracker
    'mood.title': 'Mood Tracker',
    'mood.subtitle': 'Daily Emotion Monitoring',
    'mood.description': 'Track your daily moods to better understand your emotional patterns.',
    'mood.today': 'How are you feeling today?',
    'mood.anxiety': 'Anxiety Level',
    'mood.energy': 'Energy Level',
    'mood.overall': 'Overall Mood',
    'mood.save': 'Save Mood',
    'mood.history': 'Mood History',
    'mood.insights': 'Insights',
    'mood.week': 'This Week',
    'mood.month': 'This Month',
    
    // Diary
    'diary.title': 'Personal Diary',
    'diary.subtitle': 'Daily Reflections and Thoughts',
    'diary.description': 'Express your thoughts and emotions in a private and secure space.',
    'diary.new': 'New Entry',
    'diary.prompt': 'Today\'s Prompt',
    'diary.placeholder': 'Start writing your thoughts...',
    'diary.save': 'Save Entry',
    'diary.entries': 'Recent Entries',
    
    // Games
    'games.title': 'Therapeutic Games',
    'games.subtitle': 'Mental Wellness Activities',
    'games.description': 'Discover games and activities designed to improve your mental health.',
    'games.breathing': 'Breathing Exercise',
    'games.meditation': 'Guided Meditation',
    'games.gratitude': 'Gratitude Journal',
    'games.mindfulness': 'Mindfulness Exercise',
    'games.start': 'Start',
    'games.benefits': 'Health Benefits',
    
    // Communities
    'communities.title': 'Support Communities',
    'communities.subtitle': 'Connect with People Who Understand',
    'communities.description': 'Join global support communities and share your journey.',
    'communities.anxiety': 'Anxiety Support',
    'communities.depression': 'Depression Support',
    'communities.mindfulness': 'Mindfulness',
    'communities.youth': 'Youth Support',
    'communities.join': 'Join',
    'communities.members': 'members',
    'communities.online': 'online',
    
    // Dashboard
    'dashboard.title': 'Wellness Dashboard',
    'dashboard.subtitle': 'Overview of Your Mental Health Journey',
    'dashboard.description': 'Track your progress and insights with our intelligent dashboard.',
    'dashboard.streak': 'Current Streak',
    'dashboard.days': 'days',
    'dashboard.sessions': 'AI Sessions',
    'dashboard.entries': 'Diary Entries',
    'dashboard.activities': 'Wellness Activities',
    'dashboard.progress': 'Mood Progress',
    'dashboard.week': 'This Week',
    'dashboard.insights': 'AI Insights',
    'dashboard.recommendation': 'Recommendation',
  }
};
