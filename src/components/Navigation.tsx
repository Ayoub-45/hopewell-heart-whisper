
import { Button } from "@/components/ui/button";
import { Brain, MessageCircle, Activity, User, Home, BookOpen, Gamepad2, Users, Languages } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "Accueil", icon: Home },
    { id: "chat", label: "Chat IA", icon: MessageCircle },
    { id: "mood", label: "Suivi Humeur", icon: Activity },
    { id: "diary", label: "Journal", icon: BookOpen },
    { id: "games", label: "Jeux", icon: Gamepad2 },
    { id: "communities", label: "Communautés", icon: Users },
    { id: "dashboard", label: "Tableau de Bord", icon: Brain },
  ];

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
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
