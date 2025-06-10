
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Brain, Heart, Smile, Target, Star, Trophy } from "lucide-react";

export const Games = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [breathingActive, setBreathingActive] = useState(false);
  const [gratitudeAnswers, setGratitudeAnswers] = useState<string[]>([]);
  const [currentGratitude, setCurrentGratitude] = useState("");
  const [affirmationIndex, setAffirmationIndex] = useState(0);

  const games = [
    {
      id: "breathing",
      title: "Respiration Guidée",
      description: "Exercice de respiration pour réduire le stress et l'anxiété",
      icon: Heart,
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      difficulty: "Facile"
    },
    {
      id: "gratitude",
      title: "Défi Gratitude",
      description: "Listez 5 choses pour lesquelles vous êtes reconnaissant",
      icon: Star,
      color: "bg-gradient-to-br from-yellow-500 to-orange-600",
      difficulty: "Facile"
    },
    {
      id: "affirmations",
      title: "Affirmations Positives",
      description: "Renforcez votre estime de soi avec des affirmations",
      icon: Smile,
      color: "bg-gradient-to-br from-green-500 to-green-600",
      difficulty: "Facile"
    },
    {
      id: "mindfulness",
      title: "Pleine Conscience",
      description: "Exercice de méditation de 5 minutes",
      icon: Brain,
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      difficulty: "Moyen"
    }
  ];

  const affirmations = [
    "Je suis capable de surmonter les défis",
    "Je mérite le bonheur et la paix",
    "Mes sentiments sont valides et importants",
    "Je grandis et j'apprends chaque jour",
    "Je suis plus fort que je ne le pense",
    "Je choisis la compassion envers moi-même",
    "Mon parcours est unique et précieux",
    "Je peux créer des changements positifs"
  ];

  const renderBreathingGame = () => (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-blue-600" />
          Respiration Guidée
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className={`w-32 h-32 mx-auto rounded-full border-4 border-blue-500 flex items-center justify-center transition-all duration-4000 ${
          breathingActive ? "scale-125 bg-blue-100" : "scale-100 bg-blue-50"
        }`}>
          <Heart className="w-16 h-16 text-blue-600" />
        </div>
        <div className="space-y-4">
          <p className="text-lg font-medium text-gray-800">
            {breathingActive ? "Respirez avec le cercle" : "Prêt à commencer ?"}
          </p>
          <p className="text-gray-600">
            Inspirez quand le cercle grandit, expirez quand il se réduit
          </p>
          <Button
            onClick={() => setBreathingActive(!breathingActive)}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              breathingActive 
                ? "bg-red-600 hover:bg-red-700" 
                : "bg-blue-600 hover:bg-blue-700"
            } text-white`}
          >
            {breathingActive ? "Arrêter" : "Commencer"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderGratitudeGame = () => (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-600" />
          Défi Gratitude ({gratitudeAnswers.length}/5)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {gratitudeAnswers.map((answer, index) => (
            <div key={index} className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium">Gratitude #{index + 1}</span>
              </div>
              <p className="text-gray-800 mt-1">{answer}</p>
            </div>
          ))}
        </div>
        
        {gratitudeAnswers.length < 5 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pour quoi êtes-vous reconnaissant aujourd'hui ?
              </label>
              <input
                type="text"
                value={currentGratitude}
                onChange={(e) => setCurrentGratitude(e.target.value)}
                placeholder="Ex: Ma famille, ma santé, ce beau temps..."
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
              />
            </div>
            <Button
              onClick={() => {
                if (currentGratitude.trim()) {
                  setGratitudeAnswers([...gratitudeAnswers, currentGratitude]);
                  setCurrentGratitude("");
                }
              }}
              disabled={!currentGratitude.trim()}
              className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white py-3 rounded-lg transition-all duration-300"
            >
              Ajouter à ma liste
            </Button>
          </div>
        )}
        
        {gratitudeAnswers.length === 5 && (
          <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <Trophy className="w-12 h-12 mx-auto mb-3 text-yellow-600" />
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Félicitations !</h3>
            <p className="text-yellow-700">Vous avez complété votre défi gratitude. La gratitude est un puissant outil de bien-être !</p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  const renderAffirmationsGame = () => (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Smile className="w-6 h-6 text-green-600" />
          Affirmations Positives
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="p-8 bg-green-50 rounded-xl border border-green-200">
          <Smile className="w-16 h-16 mx-auto mb-4 text-green-600" />
          <p className="text-xl font-medium text-green-800 mb-4">
            "{affirmations[affirmationIndex]}"
          </p>
          <p className="text-green-600">Répétez cette affirmation avec conviction</p>
        </div>
        <div className="flex gap-3 justify-center">
          <Button
            onClick={() => setAffirmationIndex((prev) => prev > 0 ? prev - 1 : affirmations.length - 1)}
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
          >
            Précédente
          </Button>
          <Button
            onClick={() => setAffirmationIndex((prev) => (prev + 1) % affirmations.length)}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
          >
            Suivante
          </Button>
        </div>
        <p className="text-sm text-gray-600">
          Affirmation {affirmationIndex + 1} sur {affirmations.length}
        </p>
      </CardContent>
    </Card>
  );

  const renderMindfulnessGame = () => (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-6 h-6 text-purple-600" />
          Pleine Conscience
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="p-8 bg-purple-50 rounded-xl border border-purple-200">
          <Brain className="w-16 h-16 mx-auto mb-4 text-purple-600" />
          <h3 className="text-lg font-semibold text-purple-800 mb-4">Méditation de 5 minutes</h3>
          <div className="space-y-3 text-left text-purple-700">
            <p>• Asseyez-vous confortablement</p>
            <p>• Fermez les yeux doucement</p>
            <p>• Concentrez-vous sur votre respiration</p>
            <p>• Laissez passer les pensées sans jugement</p>
            <p>• Revenez à votre respiration quand vous le pouvez</p>
          </div>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-full">
          Commencer la méditation
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Gamepad2 className="w-4 h-4" />
          Jeux Thérapeutiques
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Jeux pour le Bien-être Mental</h1>
        <p className="text-gray-600">Des activités ludiques pour améliorer votre humeur et réduire le stress</p>
      </div>

      {!selectedGame ? (
        <div className="grid md:grid-cols-2 gap-6">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <Card
                key={game.id}
                className="bg-white/90 backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in"
                onClick={() => setSelectedGame(game.id)}
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${game.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">{game.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {game.difficulty}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{game.description}</p>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-all duration-300">
                    <Target className="w-4 h-4 mr-2" />
                    Jouer maintenant
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="space-y-6">
          <Button
            onClick={() => setSelectedGame(null)}
            variant="outline"
            className="mb-6"
          >
            ← Retour aux jeux
          </Button>
          
          {selectedGame === "breathing" && renderBreathingGame()}
          {selectedGame === "gratitude" && renderGratitudeGame()}
          {selectedGame === "affirmations" && renderAffirmationsGame()}
          {selectedGame === "mindfulness" && renderMindfulnessGame()}
        </div>
      )}
    </div>
  );
};
