import { APP_NAME, PUBLIC_URL } from '@/config';

export const OPEN_GRAPH_DEFAULT = {
  url: PUBLIC_URL,
  siteName: `${APP_NAME} Software`,
  title: APP_NAME,
  description: `Free ${APP_NAME} software blocks accidental taps and clicks while you are typing tex'`,
  images: [
    {
      url: `${PUBLIC_URL}/img/social/icon-256x256.png`,
      width: 256,
      height: 256,
    },
    {
      url: `${PUBLIC_URL}/img/social/screenshot-316x418.png`,
      width: 316,
      height: 418,
    },
  ],
};
