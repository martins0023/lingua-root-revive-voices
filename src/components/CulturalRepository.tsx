
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, FileText, Video, Image, Search, Filter } from "lucide-react";

export const CulturalRepository = () => {
  const artifacts = [
    {
      type: "Song",
      title: "Healing Water Ceremony",
      language: "Lakota",
      contributor: "Elder Mary Crow Feather",
      tags: ["Ritual", "Water", "Healing"],
      icon: Music
    },
    {
      type: "Story",
      title: "The Seven Sisters Legend",
      language: "Cherokee",
      contributor: "Joseph Running Bear",
      tags: ["Mythology", "Stars", "Creation"],
      icon: FileText
    },
    {
      type: "Video",
      title: "Traditional Basket Weaving",
      language: "Navajo",
      contributor: "Sarah Begay",
      tags: ["Craft", "Traditional", "Art"],
      icon: Video
    }
  ];

  return (
    <section id="repository" className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-earth-800 mb-4">
            Cultural Heritage Repository
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Explore a rich collection of stories, songs, rituals, and cultural artifacts, each carefully preserved and linked to linguistic elements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-lg p-6 border border-sand-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-earth-400" />
                  <input
                    type="text"
                    placeholder="Search cultural artifacts..."
                    className="w-full pl-10 pr-4 py-2 border border-sand-300 rounded-md focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  />
                </div>
                <Button variant="outline" className="border-earth-300 text-earth-700 hover:bg-earth-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            {/* Artifacts Grid */}
            <div className="space-y-4">
              {artifacts.map((artifact, index) => (
                <Card key={index} className="border-sand-200 hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-forest-100 rounded-lg">
                          <artifact.icon className="h-6 w-6 text-forest-600" />
                        </div>
                        <div>
                          <CardTitle className="text-earth-800">{artifact.title}</CardTitle>
                          <CardDescription className="text-earth-600">
                            {artifact.language} • By {artifact.contributor}
                          </CardDescription>
                        </div>
                      </div>
                      <span className="text-xs bg-sand-200 text-earth-700 px-2 py-1 rounded">
                        {artifact.type}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {artifact.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="border-earth-300 text-earth-700 hover:bg-earth-50">
                      View Artifact
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-sand-200">
              <CardHeader>
                <CardTitle className="text-earth-800">Repository Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-earth-600">Total Artifacts</span>
                  <span className="font-semibold text-earth-800">3,420</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-earth-600">Languages Covered</span>
                  <span className="font-semibold text-earth-800">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-earth-600">Audio Hours</span>
                  <span className="font-semibold text-earth-800">2,580</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-earth-600">Contributors</span>
                  <span className="font-semibold text-earth-800">850</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sand-200">
              <CardHeader>
                <CardTitle className="text-earth-800">Featured Collections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-forest-50 rounded-lg border border-forest-200">
                  <div className="font-medium text-earth-800">Indigenous Wisdom</div>
                  <div className="text-sm text-earth-600">Stories and teachings from elders</div>
                </div>
                <div className="p-3 bg-forest-50 rounded-lg border border-forest-200">
                  <div className="font-medium text-earth-800">Traditional Songs</div>
                  <div className="text-sm text-earth-600">Ceremonial and cultural music</div>
                </div>
                <div className="p-3 bg-forest-50 rounded-lg border border-forest-200">
                  <div className="font-medium text-earth-800">Oral Histories</div>
                  <div className="text-sm text-earth-600">Personal and community narratives</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sand-200">
              <CardHeader>
                <CardTitle className="text-earth-800">Contribute</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-earth-600 text-sm mb-4">
                  Share your cultural knowledge and help preserve linguistic heritage for future generations.
                </p>
                <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white">
                  Upload Artifact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
