import * as animated from "../styles/animated.module.scss"
export const handleObserver = targets => {
  targets.current.forEach(target => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animated.isAnimated)
        }
      })
    })
    observer.observe(target)
  })
}
