'use client';
import { FunctionComponent } from 'react';
import { APP_NAME } from '@/config';
import { gaPageView } from '@/lib/ga';
import Button, { ButtonProps } from '../Button/Button';

const FILES = {
  exe: '/files/touchpad-blocker.exe',
  zip: '/files/touchpad-blocker.zip',
};

interface Props extends ButtonProps {
  file?: keyof typeof FILES;
}

/**
 * Renders "Download" button
 * @component DownloadButton
 */
const DownloadButton: FunctionComponent<Props> = ({ children, file = 'exe', ...restOfProps }) => {
  const href = FILES[file];
  return (
    <Button
      href={href}
      title={`Download ${APP_NAME} software installation package as ${file.toUpperCase()} file`}
      onClick={
        () => gaPageView(href) // Notify Google Analytics about file download
        // Note: Amplitude event is fired automatically
      }
      {...restOfProps}
    >
      {children || 'Download'}
    </Button>
  );
};

export default DownloadButton;
