'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface CarouselProps {
  images: {
    src: string
    alt: string
    title: string
    description: string
  }[]
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="relative w-full h-[500px] overflow-visible px-4 md:px-8 lg:px-12">
      <div className="relative w-full h-full flex items-center justify-center perspective-1000">
        {/* Images with 3-card preview layout */}
        {images.map((image, index) => {
          const isActive = index === currentIndex
          const isPrev = index === (currentIndex - 1 + images.length) % images.length
          const isNext = index === (currentIndex + 1) % images.length
          const isVisible = isActive || isPrev || isNext

          let transformStyle = ''
          let zIndex = 0
          let opacityValue = 0

          if (isActive) {
            transformStyle = 'translateX(0) scale(1)'
            zIndex = 30
            opacityValue = 1
          } else if (isPrev) {
            transformStyle = 'translateX(-70%) scale(0.85)'
            zIndex = 10
            opacityValue = 0.6
          } else if (isNext) {
            transformStyle = 'translateX(70%) scale(0.85)'
            zIndex = 10
            opacityValue = 0.6
          }

          return (
            <div
              key={index}
              onClick={() => {
                if (isPrev) goToPrevious()
                if (isNext) goToNext()
              }}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
              } ${!isActive ? 'cursor-pointer hover:opacity-80' : ''}`}
              style={{
                transform: transformStyle,
                zIndex: zIndex,
                opacity: opacityValue
              }}
            >
              <div 
                className="relative w-full h-full bg-cover bg-center rounded-2xl shadow-2xl overflow-hidden"
                style={{ backgroundImage: `url(${image.src})` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-pink-900/70"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
                
                {/* Content - Only show on active slide */}
                {isActive && (
                  <div className="absolute inset-0 flex items-center justify-center text-white p-8">
                    <div className="text-center max-w-3xl">
                      <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl text-white">{image.title}</h2>
                      <p className="text-xl md:text-2xl drop-shadow-xl text-blue-50 font-light">{image.description}</p>
                    </div>
                  </div>
                )}

                {/* Preview label for side cards */}
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center">
                      <p className="text-lg md:text-xl font-semibold drop-shadow-lg">{isPrev ? '← Previous' : 'Next →'}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl transition-all z-40 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl transition-all z-40 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-40">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
