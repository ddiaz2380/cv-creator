
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "CV Ejecutivo Profesional",
      description: "Diseño elegante para altos ejecutivos",
      preview: "bg-slate-100 border-l-4 border-l-slate-800",
      industry: "Corporativo"
    },
    {
      id: 2,
      title: "CV Tecnológico Moderno",
      description: "Perfecto para desarrolladores y tech leads",
      preview: "bg-blue-100 border-l-4 border-l-blue-600",
      industry: "Tecnología"
    },
    {
      id: 3,
      title: "CV Creativo Audaz",
      description: "Destaca en industrias creativas",
      preview: "bg-purple-100 border-l-4 border-l-purple-600",
      industry: "Diseño"
    },
    {
      id: 4,
      title: "CV Académico Tradicional",
      description: "Formato respetado en el ámbito académico",
      preview: "bg-green-100 border-l-4 border-l-green-700",
      industry: "Educación"
    },
    {
      id: 5,
      title: "CV Minimalista Limpio",
      description: "Elegancia en la simplicidad",
      preview: "bg-gray-100 border-l-4 border-l-gray-600",
      industry: "Universal"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Carousel */}
      <div className="relative h-96 overflow-hidden rounded-2xl bg-white shadow-2xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className="flex h-full">
              {/* CV Preview */}
              <div className="flex-1 p-8 flex items-center justify-center">
                <Card className={`w-64 h-80 ${slide.preview} shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                  <div className="p-6 h-full">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start space-x-3">
                        <div className="w-12 h-12 bg-gray-400 rounded-full flex-shrink-0"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-gray-500 rounded mb-2 w-3/4"></div>
                          <div className="h-2 bg-gray-400 rounded w-1/2"></div>
                        </div>
                      </div>
                      
                      {/* Contact Info */}
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-400 rounded w-2/3"></div>
                        <div className="h-2 bg-gray-400 rounded w-1/2"></div>
                        <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                      </div>

                      {/* Experience Section */}
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-500 rounded w-1/2"></div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-400 rounded w-full"></div>
                          <div className="h-2 bg-gray-400 rounded w-5/6"></div>
                          <div className="h-2 bg-gray-400 rounded w-4/6"></div>
                        </div>
                      </div>

                      {/* Skills Section */}
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-500 rounded w-1/3"></div>
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-2 bg-gray-400 rounded"></div>
                          <div className="h-2 bg-gray-400 rounded"></div>
                          <div className="h-2 bg-gray-400 rounded"></div>
                          <div className="h-2 bg-gray-400 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Slide Info */}
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {slide.industry}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {slide.description}
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Ver Plantilla
                    </Button>
                    <Button size="sm" variant="outline">
                      Usar Ahora
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          className="pointer-events-auto bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="pointer-events-auto bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Play/Pause Control */}
      <div className="absolute bottom-4 left-4">
        <Button
          variant="outline"
          size="icon"
          className="bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-blue-600' : 'bg-white/60'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
