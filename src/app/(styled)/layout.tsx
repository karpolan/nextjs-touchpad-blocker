import { APP_NAME, PUBLIC_URL } from '@/config';
import { FunctionComponent, PropsWithChildren, Suspense } from 'react';
import type { Metadata } from 'next';
import { OPEN_GRAPH_DEFAULT } from '@/app/config';
import { FONTS } from '@/layout/fonts';
import { Advertising, Analytics, Footer, Header, MobileOrDesktop } from '@/layout/components';

export const metadata: Metadata = {
  metadataBase: new URL(PUBLIC_URL),
  title: APP_NAME, // 'Keyboard LEDs',
  description:
    'Free software shows state of Num, Caps and Scroll locks. Very useful for notebooks and keyboards that have no hardware LED indicators.',
  manifest: '/site.webmanifest',
  openGraph: OPEN_GRAPH_DEFAULT,
};

// export const viewport: Viewport = {
//   themeColor: '#FFFFFF',
// };

const StyledLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1111097944989035"
          crossOrigin="anonymous"
        />
      </head>

      <body className={FONTS.default.className}>
        <Header />
        <div className="content">{children}</div>
        <Footer />

        <Suspense>
          <MobileOrDesktop />
          <Analytics />
          {/* <Advertising /> */}
        </Suspense>
      </body>
    </>
  );
};

export default StyledLayout;
