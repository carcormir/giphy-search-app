import { useState, useRef, useEffect } from 'react'

export default function useIsAtTarget ({ targetRef, once = true, distance = '0px' }) {
  const [isAtTarget, setIsAtTarget] = useState(false)
  const myRef = useRef()

  useEffect(() => {
    let observer = null

    const element = targetRef ? targetRef.current : myRef.current

    const onChange = (entries, observer) => {
      const element = entries[0]
      if (element.isIntersecting) {
        setIsAtTarget(true)
        console.log('hereee')
        once && observer.disconnect() // only disconnect after the first time, so it doesnt get trigger all the time
      } else {
        !once && setIsAtTarget(false)
      }
    }
    // Fist we check if IntersectionObserver is available
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        // eslint-disable-next-line no-undef
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // Now that we know that the IntersectionObserver has been added we can start using it
      // eslint-disable-next-line no-undef
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance
      })

      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect() // if observer then disconnect
  })

  return { isAtTarget }
}
