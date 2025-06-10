
import { Button } from "@/components/ui/button";
import { Brain, MessageCircle, Activity, User, Home, BookOpen, Gamepad2, Users, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const { t, language } = useLanguage();
  
  const navItems = [
    { id: "home", label: t('nav.home'), icon: Home },
    { id: "chat", label: t('nav.chat'), icon: MessageCircle },
    { id: "mood", label: t('nav.mood'), icon: Activity },
    { id: "diary", label: t('nav.diary'), icon: BookOpen },
    { id: "games", label: t('nav.games'), icon: Gamepad2 },
    { id: "communities", label: t('nav.communities'), icon: Users },
    { id: "dashboard", label: t('nav.dashboard'), icon: Brain },
  ];

  return (
    <nav className={`bg-white/90 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => setActiveSection("home")}
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300"
          >
            <div className="p-2 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              HopeWell
            </span>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`flex items-center gap-1 transition-all duration-300 text-xs ${
                    isActive 
                      ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg scale-105" 
                      : "hover:bg-gray-100 hover:scale-105"
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span className="hidden lg:inline text-xs">{item.label}</span>
                </Button>
              );
            })}
            
            {/* Language Settings */}
            <Button
              onClick={() => setActiveSection("settings")}
              variant="ghost"
              size="sm"
              className="ml-2 hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              <Languages className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
