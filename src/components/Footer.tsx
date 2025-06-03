
import { Globe, Mail, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-earth-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-8 w-8 text-forest-400" />
              <span className="text-2xl font-bold">LinguaRoot</span>
            </div>
            <p className="text-sand-200 mb-6 max-w-md">
              Empowering communities to preserve their linguistic heritage through AI-powered tools, 
              collaborative documentation, and interactive learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sand-300 hover:text-forest-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-sand-300 hover:text-forest-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-sand-300 hover:text-forest-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sand-300">
              <li><a href="#" className="hover:text-forest-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-forest-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-forest-400 transition-colors">API Access</a></li>
              <li><a href="#" className="hover:text-forest-400 transition-colors">Mobile App</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sand-300">
              <li><a href="#" className="hover:text-forest-400 transition-colors">Contributors</a></li>
              <li><a href="#" className="hover:text-forest-400 transition-colors">Language Projects</a></li>
              <li><a href="#" className="hover:text-forest-400 transition-colors">Cultural Guidelines</a></li>
              <li><a href="#" className="hover:text-forest-400 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sand-300 text-sm">
              © 2024 LinguaRoot. Respecting cultural heritage, building digital futures.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sand-300 hover:text-forest-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-sand-300 hover:text-forest-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-sand-300 hover:text-forest-400 text-sm transition-colors">Cultural Ethics</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
