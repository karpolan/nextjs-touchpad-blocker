'use client';
import { FunctionComponent } from 'react';
import Image, { ImageProps } from 'next/image';
import { APP_NAME } from '@/config';
import { useOnMobile } from '@/hooks';
import Link from '../Link';

interface Props extends Partial<ImageProps> {
  variant?: 'main' | 'secondary';
}

function getSrcByVariant(variant: Props['variant']): string {
  switch (variant) {
    case 'secondary':
      return '/images/screenshot.png';
    default:
      return '/images/screenshot.png';
  }
}

/**
 * Renders specific screenshot, size of image depends on screen size
 * @component Screenshot
 */
const Screenshot: FunctionComponent<Props> = ({ alt, src, title, variant = 'main', ...restOfProps }) => {
  const onMobile = useOnMobile();
  const altToRender = alt ?? `Screenshot of ${APP_NAME}`;
  const srcToRender = src ?? getSrcByVariant(variant);
  const titleToRender = title ?? `Screenshot of ${APP_NAME} software`;
  const width = onMobile ? 316 : 316 * 1.5;
  const height = onMobile ? 418 : 418 * 1.5;
  return (
    <Link href="/screenshots">
      <Image alt={altToRender} height={height} src={srcToRender} title={titleToRender} width={width} {...restOfProps} />
    </Link>
  );
};

export default Screenshot;
