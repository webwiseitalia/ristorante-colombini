import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const {
      y = 60,
      x = 0,
      duration = 1.2,
      delay = 0,
      ease = 'power3.out',
      start = 'top 85%',
    } = options

    gsap.set(el, { opacity: 0, y, x })

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, x: 0, duration, delay, ease })
      },
      once: true,
    })

    return () => trigger.kill()
  }, [])

  return ref
}

export function useStagger(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const children = el.children
    if (!children.length) return

    const {
      y = 50,
      stagger = 0.08,
      duration = 1,
      ease = 'power3.out',
      start = 'top 85%',
    } = options

    gsap.set(children, { opacity: 0, y })

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease,
        })
      },
      once: true,
    })

    return () => trigger.kill()
  }, [])

  return ref
}

export function useParallax(speed = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const tl = gsap.to(el, {
      y: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [speed])

  return ref
}

export function useImageReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    gsap.set(el, { clipPath: 'inset(100% 0 0 0)' })

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(el, {
          clipPath: 'inset(0% 0 0 0)',
          duration: 1.4,
          ease: 'power4.out',
        })
      },
      once: true,
    })

    return () => trigger.kill()
  }, [])

  return ref
}

export function useHorizontalScroll() {
  const containerRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const totalWidth = track.scrollWidth - container.offsetWidth

    const tl = gsap.to(track, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
      },
    })

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return { containerRef, trackRef }
}

export function useSplitReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let SplitType
    import('split-type').then((mod) => {
      SplitType = mod.default

      const split = new SplitType(el, { types: 'lines,words' })

      split.lines?.forEach((line) => {
        const wrapper = document.createElement('div')
        wrapper.style.overflow = 'hidden'
        line.parentNode.insertBefore(wrapper, line)
        wrapper.appendChild(line)
      })

      gsap.set(split.words, { y: '105%' })

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(split.words, {
            y: '0%',
            duration: 1,
            stagger: 0.03,
            ease: 'power3.out',
          })
        },
        once: true,
      })

      return () => {
        trigger.kill()
        split.revert()
      }
    })
  }, [])

  return ref
}

export { gsap, ScrollTrigger }
