
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Languages, Check, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Language {
  code: 'fr' | 'ar' | 'en';
  name: string;
  nativeName: string;
  flag: string;
}

export const LanguageSettings = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages: Language[] = [
    {
      code: "fr",
      name: "French",
      nativeName: "Français",
      flag: "🇫🇷"
    },
    {
      code: "ar",
      name: "Arabic",
      nativeName: "العربية",
      flag: "🌙"
    },
    {
      code: "en",
      name: "English",
      nativeName: "English",
      flag: "🇺🇸"
    }
  ];

  const handleLanguageChange = (languageCode: 'fr' | 'ar' | 'en') => {
    setLanguage(languageCode);
    console.log(`Language changed to: ${languageCode}`);
  };

  return (
    <div className={`container mx-auto px-4 py-8 max-w-4xl ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="mb-8 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Languages className="w-4 h-4" />
          {t('lang.title')}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('lang.subtitle')}</h1>
        <p className="text-gray-600">{t('lang.description')}</p>
      </div>

      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 animate-scale-in">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-blue-600" />
            {t('lang.available')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {languages.map((lang) => (
              <div
                key={lang.code}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-md ${
                  language === lang.code
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{lang.flag}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800">{lang.nativeName}</h3>
                      <p className="text-sm text-gray-500">{lang.name}</p>
                    </div>
                  </div>
                  {language === lang.code && (
                    <div className="flex items-center gap-2 text-blue-600">
                      <Check className="w-5 h-5" />
                      <span className="text-sm font-medium">{t('lang.selected')}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-3">
              {language === 'fr' ? 'Informations sur les langues' : 
               language === 'ar' ? 'معلومات اللغات' : 'Language Information'}
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong>Français :</strong> Interface complète avec support IA en français</p>
              <p><strong>العربية :</strong> واجهة كاملة مع دعم الذكاء الاصطناعي باللغة العربية</p>
              <p><strong>English :</strong> Full interface with AI support in English</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Languages className="w-5 h-5 mr-2" />
              {t('lang.apply')}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Additional Settings */}
      <Card className="mt-8 bg-white/90 backdrop-blur-sm shadow-xl border-0 animate-scale-in delay-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-green-600" />
            {t('lang.regional')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('lang.date')}</label>
              <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                <option value="fr">jj/mm/aaaa (Français)</option>
                <option value="ar">jj/mm/aaaa (العربية)</option>
                <option value="en">mm/dd/yyyy (English)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('lang.time')}</label>
              <select className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300">
                <option value="24">24 heures</option>
                <option value="12">12 heures (AM/PM)</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
