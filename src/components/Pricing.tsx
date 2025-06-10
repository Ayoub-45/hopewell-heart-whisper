
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, Star, Crown, Building, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Pricing = () => {
  const { t, language } = useLanguage();

  const plans = [
    {
      name: t('pricing.free.name'),
      price: t('pricing.free.price'),
      period: '',
      description: t('pricing.free.description'),
      icon: <Zap className="w-6 h-6 text-green-600" />,
      color: "border-green-200 bg-green-50/50",
      buttonColor: "bg-green-600 hover:bg-green-700",
      features: [
        { text: t('pricing.free.feature1'), included: true },
        { text: t('pricing.free.feature2'), included: true },
        { text: t('pricing.free.feature3'), included: true },
        { text: t('pricing.free.feature4'), included: true },
        { text: t('pricing.free.feature5'), included: false },
      ]
    },
    {
      name: t('pricing.plus.name'),
      price: t('pricing.plus.price'),
      period: t('pricing.plus.period'),
      description: t('pricing.plus.description'),
      icon: <Star className="w-6 h-6 text-blue-600" />,
      color: "border-blue-200 bg-blue-50/50",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      popular: true,
      features: [
        { text: t('pricing.plus.feature1'), included: true },
        { text: t('pricing.plus.feature2'), included: true },
        { text: t('pricing.plus.feature3'), included: true },
        { text: t('pricing.plus.feature4'), included: true },
        { text: t('pricing.plus.feature5'), included: true },
        { text: t('pricing.plus.feature6'), included: false },
      ]
    },
    {
      name: t('pricing.pro.name'),
      price: t('pricing.pro.price'),
      period: t('pricing.pro.period'),
      description: t('pricing.pro.description'),
      icon: <Crown className="w-6 h-6 text-purple-600" />,
      color: "border-purple-200 bg-purple-50/50",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      features: [
        { text: t('pricing.pro.feature1'), included: true },
        { text: t('pricing.pro.feature2'), included: true },
        { text: t('pricing.pro.feature3'), included: true },
        { text: t('pricing.pro.feature4'), included: true },
        { text: t('pricing.pro.feature5'), included: true },
        { text: t('pricing.pro.feature6'), included: true },
      ]
    }
  ];

  return (
    <div className={`container mx-auto px-4 py-8 max-w-7xl ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Star className="w-4 h-4" />
          {t('pricing.header.badge')}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {t('pricing.header.title')}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t('pricing.header.subtitle')}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <Card 
            key={plan.name}
            className={`relative ${plan.color} border-2 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {t('pricing.popular')}
                </span>
              </div>
            )}
            
            <CardHeader className="text-center pb-8">
              <div className="mx-auto mb-4 p-3 bg-white rounded-2xl w-fit shadow-sm">
                {plan.icon}
              </div>
              <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                {plan.name}
              </CardTitle>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
              </div>
              <p className="text-gray-600">{plan.description}</p>
            </CardHeader>

            <CardContent>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "text-gray-800" : "text-gray-500 line-through"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.buttonColor} text-white py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105`}
              >
                {plan.price === t('pricing.free.price') ? t('pricing.cta.free') : t('pricing.cta.upgrade')}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* B2B Section */}
      <Card className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200 animate-fade-in delay-500">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-white rounded-2xl w-fit shadow-sm">
            <Building className="w-8 h-8 text-gray-700" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
            {t('pricing.b2b.title')}
          </CardTitle>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {t('pricing.b2b.subtitle')}
          </p>
        </CardHeader>
        
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">{t('pricing.b2b.features.title')}</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>{t('pricing.b2b.features.feature1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>{t('pricing.b2b.features.feature2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>{t('pricing.b2b.features.feature3')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">{t('pricing.b2b.benefits.title')}</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>{t('pricing.b2b.benefits.benefit1')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>{t('pricing.b2b.benefits.benefit2')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>{t('pricing.b2b.benefits.benefit3')}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
              {t('pricing.b2b.cta')}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <div className="mt-16 text-center animate-fade-in delay-700">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{t('pricing.faq.title')}</h3>
        <p className="text-gray-600 mb-8">{t('pricing.faq.subtitle')}</p>
        <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full">
          {t('pricing.faq.cta')}
        </Button>
      </div>
    </div>
  );
};
