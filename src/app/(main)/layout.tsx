import { APP_NAME, PUBLIC_URL } from '@/config';
import { FunctionComponent, PropsWithChildren, Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import { OPEN_GRAPH_DEFAULT } from '@/app/config';
import { FONTS } from '@/layout/fonts';
import { Advertising, Analytics, Footer, Header, MobileOrDesktop } from '@/layout/components';
import './styled.css';

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_URL),
  title: APP_NAME, // 'Touchpad Blocker',
  description:
    'Free software automatically blocks accidental taps and clicks when the user is typing text on a notebook keyboard.',
  manifest: '/site.webmanifest',
  openGraph: OPEN_GRAPH_DEFAULT,
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

/**
 * Layout for (main) pages, renders head and body tags
 * @layout StyledLayout
 */
const StyledLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <head>
        <Advertising />
        <Analytics />
      </head>

      <body className={FONTS.default.className}>
        <Header />
        <div className="content">{children}</div>
        <Footer />

        <MobileOrDesktop />
      </body>
    </>
  );
};

export default StyledLayout;
