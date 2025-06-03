
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, MessageCircle, Users, Award } from "lucide-react";

export const CommunityPortal = () => {
  return (
    <section id="community" className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-earth-800 mb-4">
            Community-Led Preservation
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Join a global network of language keepers, speakers, and advocates working together to preserve linguistic heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-sand-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Upload className="h-6 w-6 text-forest-600" />
                  <CardTitle className="text-earth-800">Contribute Content</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-earth-600">
                  Upload audio recordings, stories, proverbs, and cultural knowledge. Our AI helps transcribe and organize your contributions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-sand-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-6 w-6 text-forest-600" />
                  <CardTitle className="text-earth-800">Collaborate & Validate</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-earth-600">
                  Work with other speakers to verify translations, improve AI models, and ensure cultural accuracy.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-sand-200">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-forest-600" />
                  <CardTitle className="text-earth-800">Recognition & Impact</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-earth-600">
                  Get recognized for your contributions and see the direct impact of your work on language preservation efforts.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-xl p-8 border border-sand-200 shadow-lg">
            <div className="text-center mb-6">
              <Users className="h-12 w-12 text-forest-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-earth-800 mb-2">Join Our Community</h3>
              <p className="text-earth-600">
                Connect with language speakers, linguists, and cultural advocates from around the world.
              </p>
            </div>
            
            <div className="space-y-4">
              <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white">
                Create Contributor Account
              </Button>
              <Button variant="outline" className="w-full border-earth-300 text-earth-700 hover:bg-earth-50">
                Browse Community Projects
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-sand-200">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-forest-600">850+</div>
                  <div className="text-sm text-earth-600">Active Contributors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-forest-600">45</div>
                  <div className="text-sm text-earth-600">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
