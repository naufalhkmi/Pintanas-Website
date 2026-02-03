"use client";

import { Menu, X, Leaf, Building2, Cpu, Sprout, Mail, Phone, MapPin, Target, Eye,ChevronLeft, ChevronRight,ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'; // Ensure this path is correct based on your folder
import { ScrollReveal } from '@/components/ScrollReveal';
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel slides
  const heroSlides = [
    {
      image: "/oil-palm-tree.avif", // Using your local image
      title: "Empowering Sustainable Agriculture",
      subtitle: "Bridging Traditional Plantation Management with Modern Agri-Tech Infrastructure"
    },
    {
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Advanced Agri-Tech Solutions",
      subtitle: "IoT Sensors & AI-Powered Analytics for Smart Farming"
    },
    {
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      title: "Infrastructure Excellence",
      subtitle: "Building the Foundation for Modern Agricultural Success"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [heroSlides.length, currentSlide]);
   const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 fixed w-full top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="size-8 text-emerald-700" />
              <div>
                <h1 className="font-bold text-xl text-gray-900">Pintanas Utama</h1>
                <p className="text-xs text-gray-600">Sdn. Bhd.</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-700 hover:text-emerald-700 transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-emerald-700 transition">Services</a>
              <a href="#leadership" className="text-gray-700 hover:text-emerald-700 transition">Leadership</a>
              <a href="#projects" className="text-gray-700 hover:text-emerald-700 transition">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-700 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#about" className="block text-gray-700 hover:text-emerald-700">About</a>
              <a href="#services" className="block text-gray-700 hover:text-emerald-700">Services</a>
              <a href="#leadership" className="block text-gray-700 hover:text-emerald-700">Leadership</a>
              <a href="#projects" className="block text-gray-700 hover:text-emerald-700">Projects</a>
              <a href="#contact" className="block text-gray-700 hover:text-emerald-700">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center mt-16 overflow-hidden">
        {/* Carousel Images */}
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'}`}
          >
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-blue-900/70"></div>
          </div>
        ))}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              {heroSlides[currentSlide].subtitle}
            </p>
            <a
              href="#services"
              className="inline-block bg-gradient-to-r from-lime-500 to-emerald-600 hover:from-lime-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white transition-all duration-300 group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="size-8 group-hover:scale-110 transition-transform" />
        </button>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white transition-all duration-300 group"
          aria-label="Next Slide"
        >
          <ChevronRight className="size-8 group-hover:scale-110 transition-transform" />
        </button>

        {/* Slide Indicators (Dots) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Bar
      <section className="bg-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-3 text-white">
              <div className="bg-emerald-500/20 p-3 rounded-full">
                <Leaf className="size-6 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300">Registered with</p>
                <p className="font-bold">MPOB</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Building2 className="size-6 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300">Certified by</p>
                <p className="font-bold">CIDB</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="bg-purple-500/20 p-3 rounded-full">
                <Target className="size-6 text-purple-400" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300">Certified</p>
                <p className="font-bold">Bumiputera Enterprise</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Section - Vision & Mission */}
      <section id="about" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Bumiputera-owned company bridging traditional plantation management with modern agri-tech infrastructure
            </p>
            <Link 
              href="/profile"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-800 transition-colors group"
            >
              Read Full Corporate Profile
              <span className="bg-emerald-100 p-1 rounded-full group-hover:bg-emerald-200 transition-colors">
                 <ArrowRight className="size-4" /> {/* Make sure to import ArrowRight at top */}
              </span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <ScrollReveal direction="left">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-emerald-100 p-4 rounded-2xl">
                    <Eye className="size-8 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be a leading force in sustainable agriculture, creating high-impact solutions that harmonize nature with technology for future generations.
                </p>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-4 rounded-2xl">
                    <Target className="size-8 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To deliver professional, competent workforce solutions and cutting-edge technology that empower sustainable plantation management and agricultural excellence.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- OLD DESIGN: Board of Directors --- */}
      <section id="leadership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Board of Directors</h2>
            <p className="text-xl text-gray-600">
              Leadership committed to excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTk2MTYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="CEO Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Sazali Mohd Saleh</h3>
                <p className="text-green-600 font-semibold mb-3">Chief Executive Officer</p>
                <p className="text-gray-600">MBA | Strategic Leadership</p>
              </div>
            </div>

            {/* Director 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTk2MTYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Director Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Pn. Salinda</h3>
                <p className="text-green-600 font-semibold mb-3">Director</p>
                <p className="text-gray-600">Legal Expert | Corporate Affairs</p>
              </div>
            </div>

            {/* Director 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTk2MTYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Director Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Pn. Nur Anis</h3>
                <p className="text-green-600 font-semibold mb-3">Director</p>
                <p className="text-gray-600">Operations & Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OLD DESIGN: Key Management Team (Suhaimi Pyramid) --- */}
      <section id="team" className="py-20 bg-green-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Management Team</h2>
            <p className="text-xl text-gray-600">
              The dedicated professionals driving our operations forward
            </p>
          </div>

          {/* ROW 1: Project Manager (Suhaimi) - Centered & Full Row */}
          <div className="flex justify-center mb-10">
            <div className="bg-white border border-green-700 rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 max-w-sm w-full">
              <div className="w-28 h-28 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4 text-3xl font-bold text-green-700">
                S
              </div>
              <h3 className="font-bold text-gray-900 text-2xl">Suhaimi</h3>
              <p className="text-green-600 font-semibold text-lg">Project Manager</p>
            </div>
          </div>

          {/* ROW 2: The Rest of the Team (Grid Layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Staff 1 */}
            <div className="bg-white border border-blue-700 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition">
                T
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Thayannantha</h3>
              <p className="text-blue-600 font-medium text-sm">Operation Supervisor</p>
            </div>

            {/* Staff 2 */}
            <div className="bg-white border border-orange-700 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-orange-700 group-hover:bg-orange-600 group-hover:text-white transition">
                A
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Abd Rahman</h3>
              <p className="text-orange-600 font-medium text-sm">Site Supervisor</p>
            </div>

            {/* Staff 3 */}
            <div className="bg-white border border-purple-700 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-20 h-20 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition">
                K
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Karen Ng</h3>
              <p className="text-purple-600 font-medium text-sm">Finance Executive</p>
            </div>

            {/* Staff 4 */}
            <div className="bg-white border border-teal-700 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition">
                N
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Noor Hasan</h3>
              <p className="text-teal-600 font-medium text-sm">Admin Executive</p>
            </div>

             {/* Staff 5 */}
             <div className="bg-white border border-teal-700 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-20 h-20 mx-auto bg-teal-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition">
                M
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Mohd Yusuf</h3>
              <p className="text-teal-600 font-medium text-sm">Admin Executive</p>
            </div>

            {/* Staff 6 */}
            <div className="bg-white border border-pink-700 rounded-xl p-6 text-center hover:shadow-lg transition group">
              <div className="w-20 h-20 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-pink-700 group-hover:bg-pink-600 group-hover:text-white transition">
                S
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Safia Nadzirah</h3>
              <p className="text-pink-600 font-medium text-sm">Programmer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across four distinct business pillars
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Plantation Management */}
            <div className="bg-green-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Leaf className="size-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Plantation Management</h3>
              <p className="text-gray-600 mb-4">
                Professional plantation services ensuring optimal crop health and productivity.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Fertilization & Soil Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Integrated Pest Control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Fresh Fruit Bunches (FFB) Harvesting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span>Crop Health Monitoring</span>
                </li>
              </ul>
            </div>

            {/* Civil & Infrastructure */}
            <div className="bg-blue-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Building2 className="size-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Civil & Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Construction and development of essential agricultural infrastructure.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Farm Roads & Access Routes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Drainage Systems & Water Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Worker Housing & Facilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span>Site Development</span>
                </li>
              </ul>
            </div>

            {/* Agri-Tech */}
            <div className="bg-purple-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Cpu className="size-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Agri-Tech (AI & IoT)</h3>
              <p className="text-gray-600 mb-4">
                Cutting-edge technology solutions for smart plantation management.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Smart Plantation Monitoring System</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>IoT Sensors for Soil Moisture & Climate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>AI-Powered Yield Prediction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Real-Time Data Analytics Dashboard</span>
                </li>
              </ul>
            </div>

            {/* Special Projects */}
            <div className="bg-orange-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Sprout className="size-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Projects</h3>
              <p className="text-gray-600 mb-4">
                Diversified agricultural ventures expanding our impact.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">✓</span>
                  <span>Cattle Feedlot Operations (Segamat)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">✓</span>
                  <span>Cash Crops: Bananas & Melons</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">✓</span>
                  <span>Partnership with Selangor Fruit Valley</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-1">✓</span>
                  <span>Livestock Management Solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <p className="text-xl text-gray-600">
              Real-world proof of our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1638207849658-e57be0cdc208?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjaXZpbCUyMGVuZ2luZWVyaW5nJTIwc2l0ZXxlbnwxfHx8fDE3NzAwMTk1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Construction Site"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-1">Infrastructure Development</h3>
                <p className="text-white/90">Civil engineering & construction</p>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1686358244570-5de8e810c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmFpbmFnZSUyMGNvbnN0cnVjdGlvbiUyMHdvcmslMjBzaXRlfGVufDF8fHx8MTc3MDAxOTYzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Drainage Systems"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-1">Drainage Systems</h3>
                <p className="text-white/90">Water management infrastructure</p>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576495187809-594780a5141d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJ2ZXN0aW5nJTIwZnJlc2glMjBmcnVpdCUyMGJ1bmNoZXMlMjB3b3JrZXJzfGVufDF8fHx8MTc3MDAxOTU1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Harvesting Operations"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-1">Harvesting Operations</h3>
                <p className="text-white/90">Professional plantation management</p>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1647395983407-37216a34a0da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWxtJTIwZnJlc2glMjBmcnVpdCUyMGJ1bmNoZXN8ZW58MXx8fHwxNzcwMDE5NjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Palm Oil FFB"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-1">Fresh Fruit Bunches</h3>
                <p className="text-white/90">Quality palm oil production</p>
              </div>
            </div>

            {/* Project 5 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1672155984538-351971a96b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1lbG9ucyUyMGhhcnZlc3QlMjBmYXJtfGVufDF8fHx8MTc3MDAxOTU2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Melon Harvest"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-1">Cash Crops</h3>
                <p className="text-white/90">Melons & specialty produce</p>
              </div>
            </div>

            {/* Project 6 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769056644224-2e235d695354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXR0bGUlMjBsaXZlc3RvY2slMjBmZWVkbG90fGVufDF8fHx8MTc3MDAxOTU1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Cattle Feedlot"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-1">Livestock Operations</h3>
                <p className="text-white/90">Cattle feedlot in Segamat</p>
              </div>
            </div>

            {/* Project 7 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZ3JpY3VsdHVyZSUyMHRlY2hub2xvZ3klMjBpb3R8ZW58MXx8fHwxNzcwMDE5NTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Agri-Tech"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-1">Smart Agri-Tech</h3>
                <p className="text-white/90">IoT sensors & AI monitoring</p>
              </div>
            </div>

            {/* Project 8 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1703113691621-af7d6e70dcc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwcm9hZCUyMGNvbnN0cnVjdGlvbiUyMHJ1cmFsfGVufDF8fHx8MTc3MDAxOTYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Farm Roads"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-1">Farm Roads</h3>
                <p className="text-white/90">Access route development</p>
              </div>
            </div>

            {/* Project 9 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765052293482-654d98e11e91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5hbmElMjBwbGFudGF0aW9uJTIwZmFybSUyMHRyb3BpY2FsfGVufDF8fHx8MTc3MDAxOTYzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Banana Plantation"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white font-bold text-xl mb-1">Banana Cultivation</h3>
                <p className="text-white/90">Selangor Fruit Valley partnership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Let's discuss how we can help with your agricultural needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-2xl">
                      <MapPin className="size-6 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Head Office</h4>
                      <p className="text-gray-700">
                        Taman Hillview<br />
                        Ipoh, Perak<br />
                        Malaysia
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-2xl">
                      <Phone className="size-6 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-700">+60 5-3111151</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-2xl">
                      <Mail className="size-6 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-700">pintanasutama@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Registration */}
              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h4 className="font-bold text-gray-900 mb-3">Company Registration</h4>
                <p className="text-gray-700">
                  SSM Registration Number:<br />
                  <span className="font-semibold text-emerald-700">202501046838 (1648246-U)</span>
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Certified Bumiputera Enterprise<br />
                  MPOB & CIDB Registered
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="h-[500px] rounded-3xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127116.89439678906!2d100.9846279!3d4.598611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caa8a982e0bf23%3A0x3927986cd01f9a2a!2sIpoh%2C%20Perak%2C%20Malaysia!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pintanas Utama Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="size-8 text-green-500" />
                <div>
                  <h3 className="font-bold text-xl">Pintanas Utama</h3>
                  <p className="text-sm text-gray-400">Sdn. Bhd.</p>
                </div>
              </div>
              <p className="text-gray-400">
                Empowering Sustainable Agriculture with Modern Technology
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-green-500 transition">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-green-500 transition">Services</a></li>
                <li><a href="#leadership" className="text-gray-400 hover:text-green-500 transition">Leadership</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-green-500 transition">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-green-500 transition">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Plantation Management</li>
                <li>Civil & Infrastructure</li>
                <li>Agri-Tech (AI & IoT)</li>
                <li>Special Projects</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 Pintanas Utama Sdn. Bhd. All rights reserved.</p>
            <p className="text-sm mt-2">SSM: 202501046838 (1648246-U)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}