"use client";

import Link from "next/link";
import { ArrowLeft, Leaf, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
// Make sure to import your Image component
import { ImageWithFallback } from '@/components/figma/ImageWithFallback'; 

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Simple Navigation Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-gray-600 hover:text-emerald-700 transition-colors group"
          >
            <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Leaf className="size-6 text-emerald-700" />
            <span className="font-bold text-gray-900">Pintanas Utama</span>
          </div>
        </div>
      </nav>

      {/* 2. Page Header / Hero */}
      <header className="bg-emerald-900 py-24 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        {/* Decorative background blur */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600 rounded-full blur-3xl opacity-20 -translate-y-1/2"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <span className="text-emerald-300 font-semibold tracking-widest uppercase text-sm">Corporate Profile</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Our Story & Expertise</h1>
          <p className="text-xl text-emerald-100 font-light">
            Building the nation's future through sustainable agriculture and resilient infrastructure.
          </p>
        </motion.div>
      </header>

      {/* 3. Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        
        {/* Section 1: Agriculture (Image Left, Text Right) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* IMAGE AREA (Blue Zone) */}
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
             <ImageWithFallback 
                src="/oil-palm-tree.avif"
                alt="Lush Oil Palm Plantation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
             />
          </div>
          
          {/* TEXT AREA (Red Zone) */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Business: Plantation Management</h2>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              Pintanas Utama Sdn. Bhd. is a fully Bumiputera-owned company actively operating in the agricultural management sector, with a primary focus on <strong>palm oil plantation management</strong>. Since its establishment, the company has been committed to providing efficient, systematic, and high-impact services to clients, including private plantation companies and government agencies.
            </p>
          </div>
        </motion.section>


        {/* Section 2: Construction (Text Left, Image Right) - Alternating Layout */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
           {/* TEXT AREA (Red Zone) - Appears first in code, but second visually on mobile */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Expansion: Civil & Infrastructure</h2>
            <p className="text-gray-700 leading-relaxed text-lg text-justify mb-6">
              Beyond the agricultural sector, Pintanas Utama Sdn. Bhd. has expanded its expertise into construction and civil engineering works. This covers a wide scope of projects including:
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {[
                "Basic Facility Construction", 
                "Worker Housing Development", 
                "Farm Road Construction", 
                "Drainage & Irrigation Systems",
                "Infrastructure Maintenance"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                  <CheckCircle className="size-5 text-blue-500 shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

           {/* IMAGE AREA (Blue Zone) - Appears second in code, but first visually on mobile */}
           <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl order-1 md:order-2">
             <ImageWithFallback 
                src="/civil.jpg"
                alt="Civil Engineering and Construction Site"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
             />
          </div>
        </motion.section>


        {/* Section 3: Vision (Image Left, Text Right) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
           {/* IMAGE AREA (Blue Zone) */}
           <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
             <ImageWithFallback 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080"
                alt="Professional Team Meeting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
             />
          </div>

          {/* TEXT AREA (Red Zone) */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment & Workforce</h2>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              Equipped with an experienced and highly skilled workforce, the company consistently strives to ensure every project is executed according to the highest standards of quality, safety, and efficiency. Combining technical expertise with work integrity, <strong>Pintanas Utama Sdn. Bhd.</strong> aims to become a key strategic partner in the nation's agricultural and infrastructure development.
            </p>
          </div>
        </motion.section>

      </main>

      {/* 4. Simple Footer */}
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