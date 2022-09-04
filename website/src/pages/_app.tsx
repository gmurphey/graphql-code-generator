import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { Header, ThemeProvider, FooterExtended } from '@theguild/components';
import 'guild-docs/style.css';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider attribute="class">
      <Header accentColor="#0070f3" themeSwitch searchBarProps={{ version: 'v2' }} />
      <Component {...pageProps} />
      <FooterExtended sameSite />
    </ThemeProvider>
  );
}
