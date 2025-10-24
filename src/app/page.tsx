"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cloud, Server, Zap, Users, Trophy, Code, Target, Lightbulb, ArrowRight, Star, CheckCircle, Play, Cpu, Network, Shield } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi04aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0djJINnpNNiA0VjBINHY0SDB2Mmg0djRoMlY2aDRWNEg2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="flex justify-center gap-2 mb-6">
              <Badge variant="secondary" className="animate-pulse">
                🚀 Now Open for Enrollment
              </Badge>
              <Badge variant="outline" className="border-green-500 text-green-600">
                <Star className="w-3 h-3 mr-1" />
                4.9/5 Rating
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6 leading-tight">
              indiLLM Academy
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
              Master Large Language Models through hands-on learning. Build, experiment, and deploy 
              AI applications with our comprehensive curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/auth/signup">
                <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Code className="mr-2 h-5 w-5" />
                  Start Learning Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6 border-2 hover:bg-slate-50 transition-all duration-300">
                  <Play className="mr-2 h-5 w-5" />
                  Browse Courses
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Free GPU Access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Industry Certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-sm text-muted-foreground">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Deployed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime Achieved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Lightbulb className="w-4 h-4 mr-2" />
              Why indiLLM Academy
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Master Large Language Models</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from industry experts and gain hands-on experience building AI applications from scratch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Build GPT from Scratch</CardTitle>
                <CardDescription className="text-base">
                  Learn transformer architecture and build your own GPT model step by step
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Transformer architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Self-attention mechanisms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Model training & optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Experimentation Sandbox</CardTitle>
                <CardDescription className="text-base">
                  Test different architectures and optimize model performance in a safe environment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Architecture comparison
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Hyperparameter tuning
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Performance analysis
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Network className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Real-World Applications</CardTitle>
                <CardDescription className="text-base">
                  Deploy and scale AI applications for production use cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Production deployment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Scalable infrastructure
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Monitoring & logging
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Modules Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Code className="w-4 h-4 mr-2" />
              Learning Path
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Complete LLM Learning Path</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master Large Language Models through our structured three-module curriculum
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Module 1 */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-400">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
                Module 1
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                    <Server className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Build a GPT from Scratch</CardTitle>
                    <Badge variant="secondary" className="mt-2">Weeks 1-4</Badge>
                  </div>
                </div>
                <CardDescription className="text-lg">
                  Master transformer architecture and build your own GPT model from scratch
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    Topics Covered:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Introduction to LLMs",
                      "Tokenization & BPE", 
                      "Transformer architecture",
                      "Self-attention mechanisms",
                      "Building your first GPT",
                      "Training & optimization",
                      "Model evaluation",
                      "Advanced techniques"
                    ].map((topic, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-blue-600" />
                    Hands-on Projects:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Build GPT Model", "Train on Dataset", "Optimize Performance"].map((project) => (
                      <Badge key={project} variant="outline" className="border-blue-200 text-blue-700">
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Link href="/module1">
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg py-3">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Module 2 */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-purple-200 hover:border-purple-400">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
                Module 2
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">LLM Experimentation Sandbox</CardTitle>
                    <Badge variant="secondary" className="mt-2">Weeks 5-6</Badge>
                  </div>
                </div>
                <CardDescription className="text-lg">
                  Experiment with different architectures and optimize model performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-600" />
                    Topics Covered:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Architecture comparison",
                      "Hyperparameter tuning",
                      "Performance benchmarking",
                      "Model scaling techniques",
                      "Advanced training strategies",
                      "Memory optimization",
                      "Efficiency metrics",
                      "Best practices"
                    ].map((topic, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-purple-600" />
                    Hands-on Projects:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Architecture Comparison", "Hyperparameter Optimization", "Performance Analysis"].map((project) => (
                      <Badge key={project} variant="outline" className="border-purple-200 text-purple-700">
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Link href="/module2">
                  <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-lg py-3">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Module 3 */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 border-green-200 hover:border-green-400">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-bl-lg text-sm font-medium">
                Module 3
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="pb-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg">
                    <Network className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Real-World Applications</CardTitle>
                    <Badge variant="secondary" className="mt-2">Weeks 7-8</Badge>
                  </div>
                </div>
                <CardDescription className="text-lg">
                  Deploy and scale AI applications for production use cases
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-600" />
                    Topics Covered:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Production deployment",
                      "Scalable infrastructure",
                      "Monitoring & logging",
                      "API development",
                      "Security best practices",
                      "Business applications",
                      "Case studies",
                      "Industry standards"
                    ].map((topic, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-green-600" />
                    Hands-on Projects:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {["Deploy Models", "Build APIs", "Implement Monitoring"].map((project) => (
                      <Badge key={project} variant="outline" className="border-green-200 text-green-700">
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Link href="/module3">
                  <Button className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-lg py-3">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              <Trophy className="w-4 h-4 mr-2" />
              Join Thousands of Students
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Ready to Master LLMs?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your journey today and join thousands of students who are already building 
              the future of AI with indiLLM Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="text-lg px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="text-lg px-12 py-6 border-2 hover:bg-slate-50 transition-all duration-300">
                  View Curriculum
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}