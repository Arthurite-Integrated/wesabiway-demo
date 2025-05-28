"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight, Target, TrendingUp, Bitcoin, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function WeSabiWayLanding() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "A Vehicle of Opportunities",
      subtitle: "DIGITAL MARKETING | ECURRENCY TRADING | GLOBAL TRAVEL ESIMS | FREE MARKETPLACE",
    },
  ]

  const services = [
    {
      icon: <Target className="w-16 h-16 text-white" />,
      title: "Global Travel eSim",
      description:
        "WeSabiWay, a vehicle of opportunities in partnership with Forchebs Global Sim now provides the global UK Sims + travel eSim Data Plans to enhance your global reach",
      buttonText: "READ MORE",
    },
    {
      icon: <TrendingUp className="w-16 h-16 text-white" />,
      title: "Digital Marketing",
      description:
        "We provide you with tools to improve your endeavors through our bulk messaging, freeMARKETplace as well as our free Member Ads plus our global Sims with worldwide free roaming",
      buttonText: "READ MORE",
    },
    {
      icon: <Bitcoin className="w-16 h-16 text-yellow-400" />,
      title: "eCurrency",
      description:
        "We have suspended all our eCurrency related services until CBN lifts their ban on such activities. We no longer facilitate nor provide consultancy services in digital currency trading.",
      buttonText: "READ MORE",
    },
  ]

  const products = [
    {
      title: "Vehicle Tracker",
      price: "₦40,000",
      location: "Lagos",
      image: "/1655871436_product.jpeg?height=200&width=300&query=vehicle tracker device",
    },
    {
      title: "Mobile Numbers",
      price: "₦100,000",
      location: "Lagos",
      image: "/1659524248_product.jpeg?height=200&width=300&query=mobile phone with messaging icons",
    },
    {
      title: "Global eSim",
      price: "₦100,000",
      location: "Lagos",
      image: "/1655867779_product.jpeg?height=200&width=300&query=golden sim card with glow effect",
    },
    {
      title: "Digital Marketing",
      price: "₦0",
      location: "Lagos",
      image: "/1655870075_product.png?height=200&width=300&query=digital marketing mind map diagram",
    },
    {
      title: "Per Acre",
      price: "₦6,000,000",
      location: "Delta",
      image: "/1655948720_product.jpeg?height=200&width=300&query=land for sale sign in field",
    },
    {
      title: "Global Travel Sims",
      price: "₦45,000",
      location: "Lagos",
      image: "/1655870687_product.jpeg?height=200&width=300&query=nano micro standard sim cards",
    },
  ]

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Navigation */}
      <nav className="bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-xl">WeSabiWay.online</span>
            </div>
            <div className="hidden md:flex space-x-6 text-sm font-medium">
              <a href="#home" className="hover:text-yellow-300 transition-colors">
                HOME
              </a>
              <a href="#services" className="hover:text-yellow-300 transition-colors">
                DIGITAL MARKETING
              </a>
              <a href="#services" className="hover:text-yellow-300 transition-colors">
                GLOBAL TRAVEL ESIM
              </a>
              <a href="#marketplace" className="hover:text-yellow-300 transition-colors">
                UK SIM CARDS
              </a>
              <a href="#marketplace" className="hover:text-yellow-300 transition-colors">
                BULK MESSAGING
              </a>
              <a href="#marketplace" className="hover:text-yellow-300 transition-colors">
                ESIM DATA PLANS
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/slider-02.jpg?height=800&width=auto&query=red Mercedes AMG car on country road autumn landscape')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">A Vehicle of Opportunities</h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl">
            DIGITAL MARKETING | ECURRENCY TRADING | GLOBAL TRAVEL ESIMS | FREE MARKETPLACE
          </p>

          {/* Search Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Product</label>
                <Input placeholder="Enter product name" className="w-full" />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Location</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lagos">Lagos</SelectItem>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="delta">Delta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8">SEARCH NOW</Button>
            </div>
          </div>

          {/* Daily News Button */}
          <div className="absolute bottom-8 left-8">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-medium">
              DAILY NEWS <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Carousel Navigation */}
          <div className="absolute bottom-8 right-8 flex space-x-2">
            <button className="w-3 h-3 bg-white rounded-full opacity-100"></button>
            <button className="w-3 h-3 bg-white rounded-full opacity-50"></button>
            <button className="w-3 h-3 bg-white rounded-full opacity-50"></button>
          </div>
        </div>
      </section>

      {/* Bulk Messaging Banner */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Bulk Messaging:</h2>
              <p className="text-lg md:text-xl">Let us give your business a lift</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              free<span className="text-red-600">MARKET</span>place
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{product.title}</h3>
                  <p className="text-2xl font-bold text-red-600 mb-2">{product.price}</p>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Location</span>
                    <p>{product.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Service Banner */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700 mb-6 max-w-4xl mx-auto">
            Every month we render assistance by being part of a contribution towards someone's hospital bill through our
            social media handle @UseMyCar.NG | A Vehicle of opportunities
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3">READ MORE</Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=600&width=1200&query=abstract technology background"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR SERVICES</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">{service.description}</p>
                <Button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3">
                  {service.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Advise and Advertising Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">TIPS & ADVISE</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3">READ MORE</Button>
            </div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">ADVERTISING</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3">READ MORE</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6">SUBSCRIBE TO OUR NEWSLETTER</h3>
              <div className="space-y-4">
                <Input
                  placeholder="Enter your name"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Input
                  placeholder="Enter your email ID"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Button className="bg-red-600 hover:bg-red-700 text-white font-medium w-full">SUBSCRIBE</Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">*We send latest innovative posts to our followers very week.</p>
            </div>

            {/* More Information */}
            <div>
              <h3 className="text-xl font-bold mb-6">MORE INFORMATION</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    UK Sim Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    eSim Data Plans
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Bulk Messaging
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Advertising
                  </a>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-xl font-bold mb-6">ABOUT US</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Our Terms
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              Copyright 2025 © Forchebs Online Services | WeSabiWay.online | A Vehicle of Opportunities. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
