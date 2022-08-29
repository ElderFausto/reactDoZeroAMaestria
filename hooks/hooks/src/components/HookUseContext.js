import { createContext } from 'react'

export const SomeContext = createContext()

export const HookUseContext = ({children}) => {
  const contextValue = 'testing context'
  const day = '29/08/1996'

  return (
    <SomeContext.Provider value={{contextValue, day}}>
      {children}
    </SomeContext.Provider>
  )
}
