
import { Mic, BookText, Users, Brain, Globe, Archive } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Features = () => {
  const features = [
    {
      icon: Mic,
      title: "Speech-to-Text Transcription",
      description: "AI-powered phonetic analysis for oral language documentation with regional training datasets."
    },
    {
      icon: BookText,
      title: "Lexicon Builder",
      description: "Interactive grammar mapping and vocabulary building tools for comprehensive language structure."
    },
    {
      icon: Users,
      title: "Community Portal",
      description: "Collaborative space for elders and speakers to contribute stories, conversations, and cultural knowledge."
    },
    {
      icon: Brain,
      title: "Smart Translation",
      description: "Custom-trained, dialect-sensitive machine translation that evolves through community use."
    },
    {
      icon: Globe,
      title: "Learning Modules",
      description: "Interactive flashcards, dialogues, and quizzes designed for effective language acquisition."
    },
    {
      icon: Archive,
      title: "Cultural Repository",
      description: "Digital archive of rituals, folklore, songs, and videos linked to linguistic elements."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-earth-800 mb-4">
            Powerful Tools for Language Preservation
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Our AI-powered platform provides everything needed to document, translate, and teach endangered languages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-sand-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-forest-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-forest-600" />
                  </div>
                  <CardTitle className="text-earth-800">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-earth-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
