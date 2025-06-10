
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Heart, MessageCircle, Activity, BookOpen, Bell } from "lucide-react";
import { AIChat } from "@/components/AIChat";
import { MoodTracker } from "@/components/MoodTracker";
import { Dashboard } from "@/components/Dashboard";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "chat":
        return <AIChat />;
      case "mood":
        return <MoodTracker />;
      case "dashboard":
        return <Dashboard />;
      default:
        return <HeroSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="animate-fade-in">
        {renderActiveSection()}
      </div>
    </div>
  );
};

const HeroSection = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-700"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        {/* Hero Content */}
        <div className="text-center mb-16 animate-scale-in">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in delay-200">
            <Heart className="w-4 h-4" />
            Bien-être Mental Alimenté par l'IA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              HopeWell
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-gray-700">Votre Compagnon IA</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Un espace sûr et empathique pour la réflexion émotionnelle et le soutien. Disponible 24h/24 et 7j/7 
            avec des conversations intelligentes, un suivi de l'humeur et des invites guidées pour vous aider à 
            construire un chemin vers la clarté intérieure et le bien-être.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => setActiveSection("chat")}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Commencer une Conversation
            </Button>
            <Button 
              onClick={() => setActiveSection("mood")}
              variant="outline" 
              size="lg"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg rounded-full transform transition-all duration-300 hover:scale-105"
            >
              <Activity className="w-5 h-5 mr-2" />
              Suivre Votre Humeur
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Brain className="w-8 h-8 text-blue-600" />}
            title="Conversations Alimentées par l'IA"
            description="Interagissez avec notre IA empathique qui comprend vos émotions et fournit un soutien personnalisé adapté à vos besoins."
            delay="delay-300"
          />
          <FeatureCard
            icon={<Activity className="w-8 h-8 text-green-600" />}
            title="Suivi de l'Humeur"
            description="Surveillez vos schémas émotionnels avec un suivi intelligent qui aide à identifier les déclencheurs et les progrès au fil du temps."
            delay="delay-500"
          />
          <FeatureCard
            icon={<BookOpen className="w-8 h-8 text-purple-600" />}
            title="Réflexions Guidées"
            description="Accédez à des invites structurées et des exercices conçus pour favoriser la découverte de soi et la croissance émotionnelle."
            delay="delay-700"
          />
        </div>

        {/* Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 animate-fade-in delay-1000">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24h/24</div>
              <div className="text-gray-600">Soutien Disponible</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Privé et Sécurisé</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">IA</div>
              <div className="text-gray-600">Insights Alimentés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-gray-600">Soins Personnalisés</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, delay }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}) => {
  return (
    <Card className={`bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in ${delay} group`}>
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <CardTitle className="text-xl font-semibold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 leading-relaxed text-center">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default Index;
