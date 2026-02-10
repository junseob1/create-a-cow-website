
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Leaf, MapPin, Award, Milk, Users } from "lucide-react";
import { Chatbot } from "@/components/Chatbot";

const Index = () => {
  const breeds = [
    {
      name: "Holstein",
      origin: "Netherlands",
      description: "The most popular dairy breed, known for their distinctive black and white markings.",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop",
      type: "Dairy",
      weight: "1,500 lbs"
    },
    {
      name: "Angus",
      origin: "Scotland",
      description: "Premium beef cattle known for their marbled meat and solid black color.",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
      type: "Beef",
      weight: "1,800 lbs"
    },
    {
      name: "Jersey",
      origin: "Jersey Island",
      description: "Small dairy breed producing rich, creamy milk with high butterfat content.",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
      type: "Dairy",
      weight: "1,000 lbs"
    },
    {
      name: "Hereford",
      origin: "England",
      description: "Hardy beef cattle with distinctive red body and white face markings.",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
      type: "Beef",
      weight: "1,600 lbs"
    }
  ];

  const facts = [
    {
      icon: Heart,
      title: "Social Creatures",
      description: "Cows form close friendships and can become stressed when separated from their best friends."
    },
    {
      icon: Leaf,
      title: "Four Stomachs",
      description: "Cows have four stomach compartments that help them digest tough plant materials efficiently."
    },
    {
      icon: MapPin,
      title: "Excellent Memory",
      description: "Cows can remember faces and places for years, recognizing up to 100 individual cows."
    },
    {
      icon: Award,
      title: "Unique Patterns",
      description: "Like fingerprints, no two cows have exactly the same pattern of spots or markings."
    },
    {
      icon: Milk,
      title: "Milk Production",
      description: "A single dairy cow can produce about 6-7 gallons of milk per day, or 2,000 gallons per year."
    },
    {
      icon: Users,
      title: "Global Impact",
      description: "There are over 1 billion cattle worldwide, providing food and livelihood for millions of people."
    }
  ];

  return (
    <div className="min-h-screen">
      <Chatbot />
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-primary text-primary-foreground">Welcome to Moo World</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground drop-shadow-lg">
            Discover the Amazing World of Cows
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/90 drop-shadow">
            Explore fascinating breeds, learn incredible facts, and appreciate these gentle giants
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Breeds
            </Button>
            <Button size="lg" variant="outline" className="bg-background/80 backdrop-blur">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1B+</div>
              <div className="text-muted-foreground">Cattle Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">800+</div>
              <div className="text-muted-foreground">Recognized Breeds</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K</div>
              <div className="text-muted-foreground">Years Domesticated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,000</div>
              <div className="text-muted-foreground">Gallons Milk/Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Breeds Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Popular Breeds</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Explore Cattle Breeds
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From dairy to beef, discover the diverse breeds that make cattle so remarkable
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">All Breeds</TabsTrigger>
              <TabsTrigger value="dairy">Dairy</TabsTrigger>
              <TabsTrigger value="beef">Beef</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {breeds.map((breed, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url('${breed.image}')` }}
                    ></div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-foreground">{breed.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">{breed.type}</Badge>
                      </div>
                      <CardDescription className="text-muted-foreground">{breed.origin}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{breed.description}</p>
                      <div className="text-sm font-medium text-foreground">
                        Avg. Weight: {breed.weight}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="dairy">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {breeds.filter(b => b.type === "Dairy").map((breed, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url('${breed.image}')` }}
                    ></div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-foreground">{breed.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">{breed.type}</Badge>
                      </div>
                      <CardDescription className="text-muted-foreground">{breed.origin}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{breed.description}</p>
                      <div className="text-sm font-medium text-foreground">
                        Avg. Weight: {breed.weight}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="beef">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {breeds.filter(b => b.type === "Beef").map((breed, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url('${breed.image}')` }}
                    ></div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-foreground">{breed.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">{breed.type}</Badge>
                      </div>
                      <CardDescription className="text-muted-foreground">{breed.origin}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">{breed.description}</p>
                      <div className="text-sm font-medium text-foreground">
                        Avg. Weight: {breed.weight}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">Did You Know?</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Fascinating Cow Facts
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing facts about these intelligent and social animals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">{fact.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{fact.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Gallery</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Beautiful Moments
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of stunning photographs celebrating the beauty of cattle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=600&fit=crop" 
                alt="Cow in pasture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=600&fit=crop" 
                alt="Holstein cow"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop" 
                alt="Cow close-up"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden md:col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=1200&h=600&fit=crop" 
                alt="Cows grazing"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1568849676085-51415703900f?w=800&h=600&fit=crop" 
                alt="Cow in field"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Moo World Community
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Stay updated with the latest news, facts, and stories from the world of cattle
          </p>
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Moo World</h3>
              <p className="text-sm text-muted-foreground">
                Celebrating the amazing world of cattle and their importance to our planet.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Learn</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Cow Breeds</li>
                <li>Fun Facts</li>
                <li>Care Guide</li>
                <li>History</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Photo Gallery</li>
                <li>Videos</li>
                <li>Articles</li>
                <li>Research</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Contact</li>
                <li>Newsletter</li>
                <li>Social Media</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-8">
            © 2026 Moo World. All rights reserved. Made with ❤️ for cow enthusiasts.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;