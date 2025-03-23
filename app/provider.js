'use client'

import {ThemeProvider as NextThemesProvider} from 'next-themes'
import React from 'react'

function Provider({children}) {
  return (
    <>
    <NextThemesProvider
    attribute="class"
    defaultTheme='dark'
    enableSystem
    disableTransitionOnChange
    >
    {children}
    </NextThemesProvider>
    </>
  )
}

export default Provider