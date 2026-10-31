import '@mantine/core/styles.css'
import '@/styles/tokens.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider, createTheme } from '@mantine/core'

const theme = createTheme({
  primaryColor: 'nord',
  primaryShade: 4,
  colors: { nord: nordFrost },
  fontFamily: 'var(--font-sans)',
  fontFamilyMonospace: 'var(--font-mono)',
  headings: { fontFamily: 'var(--font-sans)' },
})
import { nordFrost } from '@/util/nord'
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
