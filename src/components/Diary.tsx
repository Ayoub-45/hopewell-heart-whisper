
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Plus, Calendar, Heart, Smile, Star } from "lucide-react";

interface DiaryEntry {
  id: string;
  title: string;
  content: string;
  mood: "excellent" | "good" | "neutral" | "difficult" | "hard";
  date: Date;
  gratitude?: string;
}

export const Diary = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [isWriting, setIsWriting] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({
    title: "",
    content: "",
    mood: "neutral" as const,
    gratitude: ""
  });

  const moodOptions = [
    { value: "excellent", label: "Excellent", icon: "🌟", color: "text-yellow-500" },
    { value: "good", label: "Bien", icon: "😊", color: "text-green-500" },
    { value: "neutral", label: "Neutre", icon: "😐", color: "text-gray-500" },
    { value: "difficult", label: "Difficile", icon: "😔", color: "text-orange-500" },
    { value: "hard", label: "Très difficile", icon: "😢", color: "text-red-500" }
  ];

  const handleSaveEntry = () => {
    if (!currentEntry.title.trim() || !currentEntry.content.trim()) return;

    const newEntry: DiaryEntry = {
      id: Date.now().toString(),
      title: currentEntry.title,
      content: currentEntry.content,
      mood: currentEntry.mood,
      date: new Date(),
      gratitude: currentEntry.gratitude
    };

    setEntries(prev => [newEntry, ...prev]);
    setCurrentEntry({ title: "", content: "", mood: "neutral", gratitude: "" });
    setIsWriting(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <BookOpen className="w-4 h-4" />
          Journal Personnel
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mon Journal de Bien-être</h1>
        <p className="text-gray-600">Exprimez vos pensées, suivez vos progrès et cultivez la gratitude</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Writing Area */}
        <div className="lg:col-span-2">
          {!isWriting ? (
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 animate-scale-in">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-4">Créer une nouvelle entrée</h3>
                <p className="text-gray-600 mb-6">Prenez un moment pour réfléchir à votre journée et noter vos pensées</p>
                <Button
                  onClick={() => setIsWriting(true)}
                  className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Commencer à écrire
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                  Nouvelle entrée de journal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Titre</label>
                  <input
                    type="text"
                    value={currentEntry.title}
                    onChange={(e) => setCurrentEntry(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Donnez un titre à votre entrée..."
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Comment vous sentez-vous ?</label>
                  <div className="grid grid-cols-5 gap-2">
                    {moodOptions.map((mood) => (
                      <button
                        key={mood.value}
                        onClick={() => setCurrentEntry(prev => ({ ...prev, mood: mood.value as any }))}
                        className={`p-3 rounded-lg border transition-all duration-300 ${
                          currentEntry.mood === mood.value
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <div className="text-2xl mb-1">{mood.icon}</div>
                        <div className="text-xs font-medium">{mood.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Vos pensées</label>
                  <textarea
                    value={currentEntry.content}
                    onChange={(e) => setCurrentEntry(prev => ({ ...prev, content: e.target.value }))}
                    placeholder="Que s'est-il passé aujourd'hui ? Comment vous sentez-vous ? Quelles sont vos réflexions ?"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 resize-none"
                    rows={6}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Heart className="w-4 h-4 inline mr-1 text-red-500" />
                    Gratitude (optionnel)
                  </label>
                  <textarea
                    value={currentEntry.gratitude}
                    onChange={(e) => setCurrentEntry(prev => ({ ...prev, gratitude: e.target.value }))}
                    placeholder="Pour quoi êtes-vous reconnaissant aujourd'hui ?"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 resize-none"
                    rows={2}
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleSaveEntry}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Sauvegarder l'entrée
                  </Button>
                  <Button
                    onClick={() => setIsWriting(false)}
                    variant="outline"
                    className="px-6 py-3 rounded-lg border-gray-300 hover:bg-gray-50"
                  >
                    Annuler
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Entries List */}
        <div>
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 animate-scale-in delay-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-purple-600" />
                Entrées récentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              {entries.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Aucune entrée pour le moment. Commencez votre journal !</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {entries.map((entry) => {
                    const mood = moodOptions.find(m => m.value === entry.mood);
                    return (
                      <div
                        key={entry.id}
                        className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 animate-fade-in"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-800 truncate">{entry.title}</h4>
                          <span className="text-2xl">{mood?.icon}</span>
                        </div>
                        <div className="text-sm text-gray-500 mb-2">
                          {entry.date.toLocaleDateString('fr-FR')} à {entry.date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-3">{entry.content}</p>
                        {entry.gratitude && (
                          <div className="mt-2 p-2 bg-red-50 rounded border-l-4 border-red-200">
                            <div className="flex items-center gap-1 text-xs text-red-600 mb-1">
                              <Heart className="w-3 h-3" />
                              Gratitude
                            </div>
                            <p className="text-xs text-red-700">{entry.gratitude}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
