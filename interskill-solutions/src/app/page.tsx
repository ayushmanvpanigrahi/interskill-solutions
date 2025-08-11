"use client"
import React, { useState } from 'react';
import { 
  Menu, X, ChevronDown, Users, Briefcase, GraduationCap, 
  CreditCard, Gift, Calendar, Trophy, Building, FileText,
  Phone, MapPin, Mail, ArrowRight, Star
} from 'lucide-react';

const ModernWebsite = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Organize menu items into logical groups
  const menuGroups = {
    services: {
      title: 'Services',
      items: [
        { name: 'Placements', icon: Users, href: '#placements' },
        { name: 'Hire From Us', icon: Briefcase, href: '#hire' },
        { name: 'Corporate Training', icon: Building, href: '#training' }
      ]
    },
    student: {
      title: 'For Students',
      items: [
        { name: 'Careers', icon: GraduationCap, href: '#careers' },
        { name: 'Reserve My Seat', icon: Calendar, href: '#reserve' },
        { name: 'Pay Fees', icon: CreditCard, href: '#fees' },
        { name: 'Refer & Earn', icon: Gift, href: '#refer' }
      ]
    },
    resources: {
      title: 'Resources',
      items: [
        { name: 'News & Events', icon: Calendar, href: '#news' },
        { name: 'Success Stories', icon: Trophy, href: '#stories' },
        { name: 'Blogs', icon: FileText, href: '#blogs' }
      ]
    }
  };

  // Courses data with duration
  const courses = [
    { name: 'Data Science & Analytics with AI', duration: '6-12 Months', href: '#data-science' },
    { name: 'Python Full Stack Development', duration: '4-8 Months', href: '#python-fullstack' },
    { name: 'Java Full Stack Development', duration: '5-9 Months', href: '#java-fullstack' },
    { name: 'DevOps with AWS', duration: '3-6 Months', href: '#devops-aws' },
    { name: 'Digital Marketing With AI', duration: '2-4 Months', href: '#digital-marketing' },
    { name: 'Investment Banking with AI', duration: '4-7 Months', href: '#investment-banking' },
    { name: 'Software Testing With AI', duration: '3-5 Months', href: '#software-testing' }
  ];

  // Main header navigation items
  const mainNavItems = [
    { name: 'Explore Courses', dropdown: 'courses' },
    { name: 'Get Career Guidance', href: '#career-guidance' },
    { name: 'Student LMS', href: '#student-lms' }
  ];

  const toggleDropdown = (group: string | null) => {
    setActiveDropdown(activeDropdown === group ? null : group);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduTech
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Main Navigation Items */}
              {mainNavItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.dropdown)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.dropdown ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      {item.name}
                    </a>
                  )}
                  
                  {/* Courses Dropdown */}
                  {item.dropdown === 'courses' && activeDropdown === 'courses' && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-800">Popular Courses</h3>
                        <p className="text-sm text-gray-500">Choose from our industry-ready programs</p>
                      </div>
                      {courses.map((course) => (
                        <a
                          key={course.name}
                          href={course.href}
                          className="flex items-start justify-between px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className="flex-1">
                            <div className="font-medium mb-1">{course.name}</div>
                            <div className="text-sm text-blue-600 font-medium">{course.duration}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                        </a>
                      ))}
                      <div className="px-4 py-3 border-t border-gray-100">
                        <a
                          href="#all-courses"
                          className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View All Courses
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Secondary Menu Dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('more')}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  <span>More</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    activeDropdown === 'more' ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {activeDropdown === 'more' && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {Object.entries(menuGroups).map(([key, group]) => (
                      <div key={key} className="px-4 py-2">
                        <h4 className="text-sm font-semibold text-gray-800 mb-2">{group.title}</h4>
                        <div className="space-y-1">
                          {group.items.slice(0, 2).map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <item.icon className="w-4 h-4" />
                              <span>{item.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={toggleMobileMenu}>
            <div 
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl h-screen"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-screen">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-white w-5 h-5" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      EduTech
                    </span>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Scrollable Menu Content */}
                <div className="flex-1 overflow-y-auto py-4" style={{ maxHeight: 'calc(100vh - 140px)' }}>
                  <div className="px-4 space-y-6">
                    {/* Main Navigation in Mobile */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-100 pb-2">
                        Main Menu
                      </h3>
                      <div className="space-y-1 ml-2">
                        {mainNavItems.map((item) => (
                          <a
                            key={item.name}
                            href={item.href || '#courses'}
                            className="flex items-center justify-between py-3 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <span className="text-sm font-medium">{item.name}</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Courses Section in Mobile */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-100 pb-2">
                        Our Courses
                      </h3>
                      <div className="space-y-1 ml-2">
                        {courses.map((course) => (
                          <a
                            key={course.name}
                            href={course.href}
                            className="block py-3 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="text-sm font-medium mb-1">{course.name}</div>
                            <div className="text-xs text-blue-600 font-medium">{course.duration}</div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Other Menu Groups */}
                    {Object.entries(menuGroups).map(([key, group]) => (
                      <div key={key} className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-100 pb-2">
                          {group.title}
                        </h3>
                        <div className="space-y-1 ml-2">
                          {group.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="flex items-center space-x-3 py-3 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <item.icon className="w-5 h-5 flex-shrink-0" />
                              <span className="text-sm font-medium">{item.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    {/* Additional Quick Links */}
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Actions</h3>
                      <div className="space-y-2">
                        <a
                          href="#contact"
                          className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Contact Us
                        </a>
                        <a
                          href="#reserve"
                          className="flex items-center justify-center border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Reserve My Seat
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="border-t border-gray-200 p-4">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <a href="tel:+1234567890" className="flex items-center hover:text-blue-600 transition-colors">
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </a>
                    <a href="mailto:info@edutech.com" className="flex items-center hover:text-blue-600 transition-colors">
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </a>
                    <a href="#location" className="flex items-center hover:text-blue-600 transition-colors">
                      <MapPin className="w-4 h-4 mr-1" />
                      Location
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Shape Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our comprehensive training programs and placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Reserve My Seat', icon: Calendar, color: 'blue', href: '#reserve' },
              { name: 'Pay Fees', icon: CreditCard, color: 'green', href: '#fees' },
              { name: 'Placements', icon: Users, color: 'purple', href: '#placements' },
              { name: 'Success Stories', icon: Trophy, color: 'orange', href: '#stories' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`bg-${item.color}-50 border border-${item.color}-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
              >
                <item.icon className={`w-12 h-12 text-${item.color}-600 mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">Quick access to {item.name.toLowerCase()}</p>
                <ArrowRight className={`w-5 h-5 text-${item.color}-600 mt-3 group-hover:translate-x-1 transition-transform`} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(menuGroups).map(([key, group]) => (
              <div key={key} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{group.title}</h3>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors group"
                    >
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>{item.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '10,000+', label: 'Students Placed' },
              { number: '500+', label: 'Partner Companies' },
              { number: '95%', label: 'Placement Rate' },
              { number: '4.8/5', label: 'Student Rating' }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold">EduTech</span>
              </div>
              <p className="text-gray-400">Transforming careers through quality education and training.</p>
            </div>
            
            {Object.entries(menuGroups).map(([key, group]) => (
              <div key={key}>
                <h3 className="font-semibold mb-4">{group.title}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2025 EduTech. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </a>
              <a href="#location" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Location
              </a>
              <a href="mailto:info@edutech.com" className="text-gray-400 hover:text-white transition-colors flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden">
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default ModernWebsite;           