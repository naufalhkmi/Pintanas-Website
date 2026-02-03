"use client";

import Link from "next/link";
import { ArrowLeft, Leaf, Building2, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* 1. Simple Navigation Header */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
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
      <header className="bg-emerald-900 py-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
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
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        
        {/* Section 1: Agriculture (The Core) */}
        <motion.section 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[80px_1fr] gap-6"
        >
          <div className="bg-emerald-100 w-16 h-16 rounded-2xl flex items-center justify-center text-emerald-700 shrink-0">
            <Leaf className="size-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Business: Plantation Management</h2>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              Pintanas Utama Sdn. Bhd. is a fully Bumiputera-owned company actively operating in the agricultural management sector, with a primary focus on <strong>palm oil plantation management</strong>. Since its establishment, the company has been committed to providing efficient, systematic, and high-impact services to clients, including private plantation companies and government agencies.
            </p>
          </div>
        </motion.section>

        <hr className="border-gray-200" />

        {/* Section 2: Construction (The Expansion) */}
        <motion.section 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-[80px_1fr] gap-6"
        >
          <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-700 shrink-0">
            <Building2 className="size-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Expansion: Civil & Infrastructure</h2>
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
                <li key={i} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle className="size-5 text-blue-500" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <hr className="border-gray-200" />

        {/* Section 3: Vision (The Future) */}
        <motion.section 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-[80px_1fr] gap-6"
        >
          <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center text-purple-700 shrink-0">
            <Users className="size-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              Equipped with an experienced and highly skilled workforce, the company consistently strives to ensure every project is executed according to the highest standards of quality, safety, and efficiency. Combining technical expertise with work integrity, <strong>Pintanas Utama Sdn. Bhd.</strong> aims to become a key strategic partner in the nation's agricultural and infrastructure development.
            </p>
          </div>
        </motion.section>

      </main>

      {/* 4. Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 text-center">
        <p className="text-gray-500 text-sm">© 2026 Pintanas Utama Sdn. Bhd. | Corporate Profile</p>
      </footer>
    </div>
  );
}