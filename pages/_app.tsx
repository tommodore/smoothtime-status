import '@mantine/core/styles.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider, createTheme } from '@mantine/core'

const theme = createTheme({
  primaryColor: 'teal',
  fontFamily: 'Inter, system-ui, sans-serif',
  fontFamilyMonospace: '"JetBrains Mono", ui-monospace, monospace',
  headings: { fontFamily: 'Inter, system-ui, sans-serif' },
})
import NoSsr from '@/components/NoSsr'
import '@/util/i18n'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NoSsr>
      <MantineProvider theme={theme} defaultColorScheme="dark" forceColorScheme="dark">
        <Component {...pageProps} />
      </MantineProvider>
    </NoSsr>
  )
}
