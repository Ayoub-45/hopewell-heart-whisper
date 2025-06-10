
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
            AI-Powered Mental Wellness
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              HopeWell
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-gray-700">Your AI Companion</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A safe, empathetic space for emotional reflection and support. Available 24/7 with intelligent conversations, 
            mood tracking, and guided prompts to help you build a path toward inner clarity and well-being.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => setActiveSection("chat")}
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start Conversation
            </Button>
            <Button 
              onClick={() => setActiveSection("mood")}
              variant="outline" 
              size="lg"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 text-lg rounded-full transform transition-all duration-300 hover:scale-105"
            >
              <Activity className="w-5 h-5 mr-2" />
              Track Your Mood
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Brain className="w-8 h-8 text-blue-600" />}
            title="AI-Powered Conversations"
            description="Engage with our empathetic AI that understands your emotions and provides personalized support tailored to your needs."
            delay="delay-300"
          />
          <FeatureCard
            icon={<Activity className="w-8 h-8 text-green-600" />}
            title="Mood Tracking"
            description="Monitor your emotional patterns with intelligent tracking that helps identify triggers and progress over time."
            delay="delay-500"
          />
          <FeatureCard
            icon={<BookOpen className="w-8 h-8 text-purple-600" />}
            title="Guided Reflections"
            description="Access structured prompts and exercises designed to promote self-discovery and emotional growth."
            delay="delay-700"
          />
        </div>

        {/* Stats Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 animate-fade-in delay-1000">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Available Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Private & Secure</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">AI</div>
              <div className="text-gray-600">Powered Insights</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-gray-600">Personalized Care</div>
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
