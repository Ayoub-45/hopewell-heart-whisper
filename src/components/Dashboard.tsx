
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Activity, MessageCircle, Heart, BookOpen, Bell } from "lucide-react";

export const Dashboard = () => {
  const insights = [
    {
      title: "Weekly Mood Trend",
      value: "Improving",
      change: "+12%",
      icon: Activity,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Conversations",
      value: "8",
      change: "This week",
      icon: MessageCircle,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Mindful Days",
      value: "5/7",
      change: "This week",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      title: "Progress Score",
      value: "78%",
      change: "+8% from last week",
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  const recentActivities = [
    { type: "mood", description: "Recorded daily mood check-in", time: "2 hours ago" },
    { type: "chat", description: "Had conversation about anxiety management", time: "1 day ago" },
    { type: "reflection", description: "Completed guided reflection exercise", time: "2 days ago" },
    { type: "mood", description: "Mood tracking streak: 7 days", time: "3 days ago" },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "mood":
        return <Activity className="w-4 h-4 text-green-600" />;
      case "chat":
        return <MessageCircle className="w-4 h-4 text-blue-600" />;
      case "reflection":
        return <BookOpen className="w-4 h-4 text-purple-600" />;
      default:
        return <Heart className="w-4 h-4 text-red-600" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Brain className="w-4 h-4" />
          Personal Insights
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Wellness Dashboard</h1>
        <p className="text-gray-600">Track your progress and celebrate your mental health journey</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <Card
              key={insight.title}
              className={`bg-white/90 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${insight.bgColor}`}>
                    <Icon className={`w-6 h-6 ${insight.color}`} />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">{insight.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{insight.value}</p>
                  <p className={`text-sm ${insight.color}`}>{insight.change}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Progress Overview */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Heart className="w-6 h-6 text-red-500" />
              Wellness Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-sm text-gray-500">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 h-3 rounded-full transition-all duration-1000 animate-pulse" style={{ width: "78%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Mood Consistency</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-3 rounded-full transition-all duration-1000 delay-300" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Engagement</span>
                  <span className="text-sm text-gray-500">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-3 rounded-full transition-all duration-1000 delay-500" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-800">Keep up the great work!</span>
              </div>
              <p className="text-sm text-green-700">
                You've been consistently tracking your mood and engaging with wellness activities. 
                Your progress shows positive trends in emotional awareness.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 animate-scale-in delay-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800">
              <Bell className="w-6 h-6 text-orange-500" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mt-1">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{activity.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-blue-800">Daily Tip</span>
              </div>
              <p className="text-sm text-blue-700">
                Remember to practice mindfulness for just 5 minutes today. Small consistent actions 
                create lasting positive changes in your mental wellbeing.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
