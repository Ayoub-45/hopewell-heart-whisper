
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Smile, Sun, Moon, Heart } from "lucide-react";

interface MoodEntry {
  id: string;
  mood: number;
  energy: number;
  anxiety: number;
  note: string;
  timestamp: Date;
}

export const MoodTracker = () => {
  const [mood, setMood] = useState(5);
  const [energy, setEnergy] = useState(5);
  const [anxiety, setAnxiety] = useState(5);
  const [note, setNote] = useState("");
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      mood,
      energy,
      anxiety,
      note,
      timestamp: new Date(),
    };

    setEntries(prev => [newEntry, ...prev]);
    setNote("");
    setShowSuccess(true);
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const MoodSlider = ({ 
    label, 
    value, 
    onChange, 
    icon: Icon,
    color,
    lowLabel,
    highLabel 
  }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    icon: any;
    color: string;
    lowLabel: string;
    highLabel: string;
  }) => (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Icon className={`w-5 h-5 ${color}`} />
        <label className="font-medium text-gray-700">{label}</label>
      </div>
      <div className="space-y-2">
        <input
          type="range"
          min="1"
          max="10"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className={`w-full h-2 rounded-lg appearance-none cursor-pointer slider-${color.split('-')[1]}`}
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>{lowLabel}</span>
          <span className="font-medium">{value}/10</span>
          <span>{highLabel}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Activity className="w-4 h-4" />
          Daily Check-in
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">How are you feeling today?</h1>
        <p className="text-gray-600">Track your emotions to understand patterns and progress</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Mood Entry Form */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Heart className="w-6 h-6 text-red-500" />
              Record Your Mood
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <MoodSlider
              label="Overall Mood"
              value={mood}
              onChange={setMood}
              icon={Smile}
              color="text-blue-600"
              lowLabel="Very Low"
              highLabel="Very High"
            />

            <MoodSlider
              label="Energy Level"
              value={energy}
              onChange={setEnergy}
              icon={Sun}
              color="text-yellow-600"
              lowLabel="Exhausted"
              highLabel="Energetic"
            />

            <MoodSlider
              label="Anxiety Level"
              value={anxiety}
              onChange={setAnxiety}
              icon={Moon}
              color="text-purple-600"
              lowLabel="Very Calm"
              highLabel="Very Anxious"
            />

            <div className="space-y-2">
              <label className="font-medium text-gray-700">Additional Notes</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="What's been on your mind? Any specific thoughts or experiences today?"
                className="w-full p-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                rows={4}
              />
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Activity className="w-5 h-5 mr-2" />
              Save Mood Entry
            </Button>

            {showSuccess && (
              <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-lg animate-fade-in">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  <span>Mood entry saved successfully! Keep track of your progress.</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Entries */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 animate-scale-in delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Activity className="w-6 h-6 text-green-600" />
              Recent Entries
            </CardTitle>
          </CardHeader>
          <CardContent>
            {entries.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No mood entries yet. Start tracking your emotions above!</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 animate-fade-in"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="text-sm text-gray-500">
                        {entry.timestamp.toLocaleDateString()} at {entry.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-3">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-blue-600">{entry.mood}/10</div>
                        <div className="text-xs text-gray-500">Mood</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-yellow-600">{entry.energy}/10</div>
                        <div className="text-xs text-gray-500">Energy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-purple-600">{entry.anxiety}/10</div>
                        <div className="text-xs text-gray-500">Anxiety</div>
                      </div>
                    </div>
                    
                    {entry.note && (
                      <div className="text-sm text-gray-700 bg-white p-2 rounded border">
                        {entry.note}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
