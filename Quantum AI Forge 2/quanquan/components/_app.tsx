import { AppProps } from 'next/app'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/store'
import Layout from '../components/layout/Layout'
import ErrorBoundary from '@/components/ErrorBoundary'
import { Analytics } from '@/components/Analytics'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <Layout>
            <Analytics />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ReduxProvider>
    </ErrorBoundary>
  )
}

