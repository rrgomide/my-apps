import { useState, useEffect } from 'react'

import type { MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import styles from './styles/app.css'

import { Header } from './components/Header'
import { getNewId } from './services/idService'
import { RunnableApp } from './components/RunnableApp'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export default function App() {
  const [colorScheme, setColorScheme] = useState('light')

  function handleToggleColorScheme() {
    setColorScheme(currentColorScheme =>
      currentColorScheme === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <html lang="en" data-theme={colorScheme}>
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <Header theme={colorScheme} onToggleTheme={handleToggleColorScheme} />

        <main className="p-4">
          <Outlet />
        </main>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
