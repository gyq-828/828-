import React from 'react'
import Hero from '../components/Hero'
import CourseList from '../components/CourseList'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Hero />
      <CourseList />
      <About />
      <Footer />
    </div>
  )
}