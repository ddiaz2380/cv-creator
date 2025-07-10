
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, Palette, Download, Sparkles, Users, Shield, Star, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import HeroCarousel from "@/components/HeroCarousel";

const Index = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Desarrolladora Senior",
      company: "Tech Solutions",
      image: "photo-1494790108755-2616b612b192",
      text: "Conseguí mi trabajo soñado gracias a CVCraft Pro. El diseño profesional y las sugerencias de IA fueron clave.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Director de Marketing",
      company: "Innovate Co",
      image: "photo-1507003211169-0a1dd7228f2d",
      text: "La mejor herramienta para crear CVs que he usado. Fácil, rápida y con resultados impresionantes.",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Diseñadora UX",
      company: "Design Studio",
      image: "photo-1438761681033-6461ffad8d80",
      text: "Las plantillas son hermosas y completamente personalizables. Mi CV destaca entre la multitud.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50,000+", label: "CVs Creados" },
    { number: "85%", label: "Tasa de Éxito" },
    { number: "500+", label: "Empresas Confiadas" },
    { number: "24/7", label: "Soporte Disponible" }
  ];

  const features = [
    {
      icon: FileText,
      title: "Editor Drag & Drop",
      description: "Reorganiza secciones con facilidad usando nuestro editor visual intuitivo"
    },
    {
      icon: Palette,
      title: "Plantillas Profesionales",
      description: "Amplia colección de diseños modernos y clásicos para cada industria"
    },
    {
      icon: Download,
      title: "Exportación Múltiple",
      description: "Descarga en PDF, Word o comparte con enlace web protegido"
    },
    {
      icon: Sparkles,
      title: "Sugerencias IA",
      description: "Asistente inteligente que optimiza tu CV con recomendaciones personalizadas"
    },
    {
      icon: Users,
      title: "Compatible ATS",
      description: "Optimizado para sistemas de selección automática de las empresas"
    },
    {
      icon: Shield,
      title: "Datos Seguros",
      description: "Tu información personal está protegida con los más altos estándares de seguridad"
    }
  ];

  const pricingPlans = [
    {
      name: "Básico",
      price: "Gratis",
      description: "Perfecto para empezar",
      features: [
        "3 plantillas básicas",
        "Exportación PDF",
        "Editor básico",
        "Soporte por email"
      ],
      cta: "Empezar Gratis",
      popular: false
    },
    {
      name: "Profesional",
      price: "€9.99/mes",
      description: "Para profesionales serios",
      features: [
        "Todas las plantillas",
        "Exportación PDF, Word, Web",
        "Editor avanzado",
        "Sugerencias IA",
        "Soporte prioritario",
        "Análisis de CV"
      ],
      cta: "Empezar Prueba",
      popular: true
    },
    {
      name: "Empresarial",
      price: "€19.99/mes",
      description: "Para equipos y empresas",
      features: [
        "Todo lo del plan Profesional",
        "Plantillas personalizadas",
        "Colaboración en equipo",
        "Análisis avanzado",
        "Integración API",
        "Soporte dedicado"
      ],
      cta: "Contactar Ventas",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-600">
              CVCraft Pro
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#templates" className="text-gray-600 hover:text-blue-600 transition-colors">Plantillas</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Características</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Precios</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonios</a>
            <Button variant="outline">Iniciar Sesión</Button>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/editor">Crear CV Gratis</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-blue-800">Con IA integrada para sugerencias inteligentes</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Crea tu CV 
            <span className="text-blue-600">
              {" "}perfecto
            </span>
            <br />en minutos
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Editor profesional con drag & drop, plantillas modernas y sugerencias inteligentes. 
            Exporta en PDF, Word o comparte online. Compatible con sistemas ATS.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8" asChild>
              <Link to="/editor">
                Empezar Gratis <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Ver Plantillas
            </Button>
          </div>
          
          {/* Hero Carousel */}
          <HeroCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para destacar
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramientas profesionales que te ayudan a crear un CV impactante
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros usuarios
            </h2>
            <p className="text-xl text-gray-600">
              Miles de profesionales han conseguido el trabajo de sus sueños
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={`https://images.unsplash.com/${testimonial.image}?w=400&h=400&fit=crop&crop=face`}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planes para cada necesidad
            </h2>
            <p className="text-xl text-gray-600">
              Desde principiantes hasta profesionales experimentados
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Más Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 my-4">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'}`}
                    asChild
                  >
                    <Link to="/editor">{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para crear tu CV perfecto?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de profesionales que han conseguido el trabajo de sus sueños
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50 px-8" asChild>
            <Link to="/editor">
              Crear CV Ahora <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CVCraft Pro</span>
              </div>
              <p className="text-gray-400">
                Crea CVs profesionales que destacan y consiguen resultados.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Plantillas</a></li>
                <li><a href="#" className="hover:text-white">Características</a></li>
                <li><a href="#" className="hover:text-white">Precios</a></li>
                <li><a href="#" className="hover:text-white">Ejemplos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Guías</a></li>
                <li><a href="#" className="hover:text-white">Consejos</a></li>
                <li><a href="#" className="hover:text-white">Ayuda</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
                <li><a href="#" className="hover:text-white">Privacidad</a></li>
                <li><a href="#" className="hover:text-white">Términos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CVCraft Pro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
