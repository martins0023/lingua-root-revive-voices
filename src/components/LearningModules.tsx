
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Zap, Target, TrendingUp } from "lucide-react";

export const LearningModules = () => {
  const modules = [
    {
      title: "Ojibwe Basics",
      description: "Learn fundamental words and phrases",
      progress: 75,
      lessons: 12,
      difficulty: "Beginner"
    },
    {
      title: "Cherokee Stories",
      description: "Traditional narratives and cultural context",
      progress: 45,
      lessons: 8,
      difficulty: "Intermediate"
    },
    {
      title: "Maori Pronunciation",
      description: "Master authentic pronunciation patterns",
      progress: 90,
      lessons: 15,
      difficulty: "Beginner"
    }
  ];

  return (
    <section id="learning" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-earth-800 mb-4">
            Interactive Learning Experience
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Engage with endangered languages through carefully crafted modules that respect cultural context and learning traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-sand-200 text-center">
                <CardContent className="pt-6">
                  <Brain className="h-8 w-8 text-forest-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-earth-800">AI-Powered</div>
                  <div className="text-sm text-earth-600">Adaptive Learning</div>
                </CardContent>
              </Card>

              <Card className="border-sand-200 text-center">
                <CardContent className="pt-6">
                  <Zap className="h-8 w-8 text-forest-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-earth-800">Interactive</div>
                  <div className="text-sm text-earth-600">Engaging Exercises</div>
                </CardContent>
              </Card>

              <Card className="border-sand-200 text-center">
                <CardContent className="pt-6">
                  <Target className="h-8 w-8 text-forest-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-earth-800">Cultural</div>
                  <div className="text-sm text-earth-600">Context Aware</div>
                </CardContent>
              </Card>

              <Card className="border-sand-200 text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-8 w-8 text-forest-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-earth-800">Progress</div>
                  <div className="text-sm text-earth-600">Tracking</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-forest-50 rounded-lg p-6 border border-forest-200">
              <h3 className="text-lg font-semibold text-earth-800 mb-2">Learning Features</h3>
              <ul className="space-y-2 text-earth-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mr-3"></div>
                  Audio-first approach with native speaker recordings
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mr-3"></div>
                  Cultural stories integrated into vocabulary lessons
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mr-3"></div>
                  Spaced repetition for long-term retention
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mr-3"></div>
                  Community validation of translations
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-earth-800 mb-6">Featured Learning Paths</h3>
            {modules.map((module, index) => (
              <Card key={index} className="border-sand-200">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-earth-800">{module.title}</CardTitle>
                      <CardDescription className="text-earth-600">
                        {module.description}
                      </CardDescription>
                    </div>
                    <span className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded">
                      {module.difficulty}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-earth-600">{module.lessons} lessons</span>
                      <span className="text-forest-600 font-medium">{module.progress}% complete</span>
                    </div>
                    <div className="w-full bg-sand-200 rounded-full h-2">
                      <div
                        className="bg-forest-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full border-earth-300 text-earth-700 hover:bg-earth-50">
                      Continue Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
