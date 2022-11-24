import React, { createContext, useRef } from "react"

export const ObserverContext = createContext({})

export function IntersectionObserverProvider(props) {
  const { children } = props

  const targets = useRef([])

  const toTargets = el => {
    if (el && !targets.current?.includes(el)) {
      targets.current.push(el)
    }
  }

  return (
    <>
      <ObserverContext.Provider value={{ toTargets, targets }}>
        {children}
      </ObserverContext.Provider>
    </>
  )
}
