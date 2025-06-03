
import { Button } from "@/components/ui/button";
import { ArrowRight, Mic, BookOpen, Heart } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sand-50 to-sand-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-earth-800 mb-6 leading-tight">
            Revive, Document, and Teach
            <span className="block text-forest-600 mt-2">Endangered Languages</span>
          </h1>
          <p className="text-xl text-earth-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            LinguaRoot empowers communities to preserve their linguistic heritage through 
            AI-powered tools, collaborative documentation, and interactive learning experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-3">
              Start Contributing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-earth-300 text-earth-700 hover:bg-earth-50 px-8 py-3">
              Explore Languages
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-sand-200">
              <Mic className="h-8 w-8 text-forest-600 mb-3" />
              <div className="text-2xl font-bold text-earth-800">127</div>
              <div className="text-sm text-earth-600">Languages Documented</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-sand-200">
              <BookOpen className="h-8 w-8 text-forest-600 mb-3" />
              <div className="text-2xl font-bold text-earth-800">3,420</div>
              <div className="text-sm text-earth-600">Stories Preserved</div>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm border border-sand-200">
              <Heart className="h-8 w-8 text-forest-600 mb-3" />
              <div className="text-2xl font-bold text-earth-800">850</div>
              <div className="text-sm text-earth-600">Active Contributors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
