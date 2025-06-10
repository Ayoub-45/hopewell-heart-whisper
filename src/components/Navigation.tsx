
import { Button } from "@/components/ui/button";
import { Brain, MessageCircle, Activity, User, Home } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "chat", label: "AI Chat", icon: MessageCircle },
    { id: "mood", label: "Mood Tracker", icon: Activity },
    { id: "dashboard", label: "Dashboard", icon: Brain },
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
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  variant={isActive ? "default" : "ghost"}
                  className={`flex items-center gap-2 transition-all duration-300 ${
                    isActive 
                      ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg scale-105" 
                      : "hover:bg-gray-100 hover:scale-105"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
