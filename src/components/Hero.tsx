import React, { useState, useEffect } from 'react'
import { ChevronDown, Sparkles } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-green-500/10"></div>
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        ></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMC0xOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE4IDE4YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0wLTE4YzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2em0xOCAzNmMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMC0xOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMTggMThjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6bTAtMThjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6IiBzdHJva2U9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')]"></div>
        
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div 
          className={`inline-block p-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 rounded-full mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)' }}
        >
          <div className="bg-white rounded-full p-3">
            <div className="relative h-20 w-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              <Sparkles className="absolute -top-1 -right-1 w-6 h-6 text-yellow-300 animate-pulse" />
              G
            </div>
          </div>
        </div>

        <h1 
          className={`text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600">
            gyq
          </span>
          <span className="block mt-2">个人学习页面</span>
        </h1>

        <p 
          className={`text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          广东科学技术职业学院商学院
          <span className="block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500">
            商务数据分析与应用专业
          </span>
        </p>

        <div 
          className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a 
            href="#courses" 
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-green-600 text-white rounded-xl hover:from-blue-700 hover:via-cyan-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 mr-2" />
              浏览课程
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a 
            href="#about" 
            className="px-8 py-4 bg-white/80 backdrop-blur-sm text-blue-600 border border-blue-200 rounded-xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
          >
            了解更多
          </a>
        </div>

        <div 
          className={`mt-16 animate-bounce transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a href="#courses" className="text-gray-400 hover:text-blue-500 transition-colors">
            <ChevronDown className="w-8 h-8 mx-auto" />
          </a>
        </div>
      </div>
    </section>
  )
}
