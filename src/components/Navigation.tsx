
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-forest-600" />
            <span className="text-xl font-bold text-earth-800">LinguaRoot</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-earth-700 hover:text-forest-600 transition-colors">Features</a>
            <a href="#community" className="text-earth-700 hover:text-forest-600 transition-colors">Community</a>
            <a href="#learning" className="text-earth-700 hover:text-forest-600 transition-colors">Learning</a>
            <a href="#repository" className="text-earth-700 hover:text-forest-600 transition-colors">Repository</a>
            <Button className="bg-forest-600 hover:bg-forest-700 text-white">
              Join Platform
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-sand-200">
            <div className="flex flex-col space-y-3">
              <a href="#features" className="px-4 py-2 text-earth-700 hover:text-forest-600">Features</a>
              <a href="#community" className="px-4 py-2 text-earth-700 hover:text-forest-600">Community</a>
              <a href="#learning" className="px-4 py-2 text-earth-700 hover:text-forest-600">Learning</a>
              <a href="#repository" className="px-4 py-2 text-earth-700 hover:text-forest-600">Repository</a>
              <div className="px-4 pt-2">
                <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white">
                  Join Platform
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
