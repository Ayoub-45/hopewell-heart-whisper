
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Globe, MessageCircle, Heart, Star, MapPin, Calendar, Plus } from "lucide-react";

interface Community {
  id: string;
  name: string;
  description: string;
  language: string;
  country: string;
  members: number;
  category: string;
  isJoined: boolean;
  lastActivity: string;
  flag: string;
}

export const Communities = () => {
  const [joinedCommunities, setJoinedCommunities] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState("all");

  const communities: Community[] = [
    {
      id: "1",
      name: "Anxiété et Soutien France",
      description: "Une communauté bienveillante pour partager vos expériences avec l'anxiété et trouver du soutien",
      language: "Français",
      country: "France",
      members: 2847,
      category: "anxiety",
      isJoined: false,
      lastActivity: "Il y a 2 minutes",
      flag: "🇫🇷"
    },
    {
      id: "2",
      name: "Depression Support Global",
      description: "International community for those dealing with depression. Share stories, find hope.",
      language: "English",
      country: "Worldwide",
      members: 15420,
      category: "depression",
      isJoined: false,
      lastActivity: "Il y a 5 minutes",
      flag: "🌍"
    },
    {
      id: "3",
      name: "مجتمع الصحة النفسية",
      description: "مجتمع عربي داعم للصحة النفسية والعافية. شاركوا تجاربكم واحصلوا على الدعم",
      language: "العربية",
      country: "الوطن العربي",
      members: 892,
      category: "general",
      isJoined: false,
      lastActivity: "Il y a 15 minutes",
      flag: "🌙"
    },
    {
      id: "4",
      name: "Méditation et Pleine Conscience",
      description: "Apprenons ensemble les techniques de méditation et de pleine conscience",
      language: "Français",
      country: "France/Belgique",
      members: 1205,
      category: "mindfulness",
      isJoined: false,
      lastActivity: "Il y a 30 minutes",
      flag: "🇫🇷"
    },
    {
      id: "5",
      name: "Young Adults Mental Health",
      description: "Safe space for young adults (18-30) navigating mental health challenges",
      language: "English",
      country: "USA/Canada",
      members: 5632,
      category: "youth",
      isJoined: false,
      lastActivity: "Il y a 1 heure",
      flag: "🇺🇸"
    },
    {
      id: "6",
      name: "Parents et Santé Mentale",
      description: "Soutien pour les parents qui jonglent entre parentalité et bien-être mental",
      language: "Français",
      country: "France",
      members: 743,
      category: "parents",
      isJoined: false,
      lastActivity: "Il y a 2 heures",
      flag: "🇫🇷"
    }
  ];

  const categories = [
    { id: "all", label: "Toutes", icon: Globe },
    { id: "anxiety", label: "Anxiété", icon: Heart },
    { id: "depression", label: "Dépression", icon: MessageCircle },
    { id: "mindfulness", label: "Méditation", icon: Star },
    { id: "youth", label: "Jeunes", icon: Users },
    { id: "parents", label: "Parents", icon: Heart },
    { id: "general", label: "Général", icon: Globe }
  ];

  const handleJoinCommunity = (communityId: string) => {
    setJoinedCommunities(prev => {
      const newSet = new Set(prev);
      if (newSet.has(communityId)) {
        newSet.delete(communityId);
      } else {
        newSet.add(communityId);
      }
      return newSet;
    });
  };

  const filteredCommunities = selectedCategory === "all" 
    ? communities 
    : communities.filter(community => community.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Users className="w-4 h-4" />
          Communautés Mondiales
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Rejoignez des Communautés de Soutien</h1>
        <p className="text-gray-600">Connectez-vous avec des personnes du monde entier qui partagent vos expériences</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg"
                    : "hover:bg-gray-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Communities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommunities.map((community) => (
          <Card
            key={community.id}
            className="bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{community.flag}</span>
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-800 leading-tight">
                      {community.name}
                    </CardTitle>
                    <p className="text-sm text-gray-500">{community.language}</p>
                  </div>
                </div>
                {joinedCommunities.has(community.id) && (
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    Rejoint
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">{community.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  {community.country}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  {community.members.toLocaleString()} membres
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {community.lastActivity}
                </div>
              </div>

              <Button
                onClick={() => handleJoinCommunity(community.id)}
                className={`w-full transition-all duration-300 ${
                  joinedCommunities.has(community.id)
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
                }`}
              >
                {joinedCommunities.has(community.id) ? (
                  <>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Voir la communauté
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 mr-2" />
                    Rejoindre
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-xl border-0">
          <CardContent className="p-8">
            <Globe className="w-16 h-16 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">Créez Votre Propre Communauté</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Ne trouvez-vous pas la communauté parfaite ? Créez la vôtre et rassemblez des personnes 
              qui partagent vos expériences et vos intérêts.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              <Plus className="w-5 h-5 mr-2" />
              Créer une Communauté
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
