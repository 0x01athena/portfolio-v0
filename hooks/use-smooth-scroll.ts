"use client"

import { useEffect, useRef } from 'react'

interface UseSmoothScrollOptions {
  duration?: number
  easing?: (t: number) => number
  offset?: number
}

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
  const {
    duration = 1000,
    easing = (t: number) => t * (2 - t), // easeOutQuad
    offset = 0
  } = options

  const isScrolling = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      if (isScrolling.current) return

      const direction = e.deltaY > 0 ? 1 : -1
      const currentSection = getCurrentSection()
      const nextSection = getNextSection(currentSection, direction)

      if (nextSection) {
        scrollToSection(nextSection)
      }
    }

    const getCurrentSection = (): Element | null => {
      const sections = document.querySelectorAll('section[data-section]')
      let currentSection: Element | null = null
      let minDistance = Infinity

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const distance = Math.abs(rect.top)
        
        if (distance < minDistance && rect.top <= 0) {
          minDistance = distance
          currentSection = section
        }
      })

      return currentSection
    }

    const getNextSection = (currentSection: Element | null, direction: number): Element | null => {
      const sections = Array.from(document.querySelectorAll('section[data-section]'))
      
      if (!currentSection) {
        return direction > 0 ? sections[0] : sections[sections.length - 1]
      }

      const currentIndex = sections.indexOf(currentSection)
      const nextIndex = currentIndex + direction

      if (nextIndex >= 0 && nextIndex < sections.length) {
        return sections[nextIndex]
      }

      return null
    }

    const scrollToSection = (section: Element) => {
      if (isScrolling.current) return

      isScrolling.current = true
      const startTime = performance.now()
      const startScroll = window.pageYOffset
      const targetScroll = section.getBoundingClientRect().top + window.pageYOffset + offset

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = easing(progress)

        window.scrollTo(0, startScroll + (targetScroll - startScroll) * easedProgress)

        if (progress < 1) {
          requestAnimationFrame(animateScroll)
        } else {
          isScrolling.current = false
        }
      }

      requestAnimationFrame(animateScroll)
    }

    // Add scroll timeout to prevent rapid scrolling
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
      
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false
      }, 150)
    }

    // Add data attributes to sections for identification
    const addSectionAttributes = () => {
      const sections = document.querySelectorAll('section')
      sections.forEach((section, index) => {
        if (!section.hasAttribute('data-section')) {
          section.setAttribute('data-section', index.toString())
        }
      })
    }

    // Initialize
    addSectionAttributes()

    // Add event listeners
    document.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup
    return () => {
      document.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [duration, easing, offset])

  return {
    scrollToSection: (sectionId: string) => {
      const section = document.querySelector(`[data-section-id="${sectionId}"]`)
      if (section) {
        const startTime = performance.now()
        const startScroll = window.pageYOffset
        const targetScroll = section.getBoundingClientRect().top + window.pageYOffset + offset

        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          const easedProgress = easing(progress)

          window.scrollTo(0, startScroll + (targetScroll - startScroll) * easedProgress)

          if (progress < 1) {
            requestAnimationFrame(animateScroll)
          }
        }

        requestAnimationFrame(animateScroll)
      }
    }
  }
}
