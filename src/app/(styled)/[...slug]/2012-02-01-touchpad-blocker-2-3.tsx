import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['software'];
export const tags = ['software', 'feature', 'version', 'keyboard', 'mouse'];
export const title = 'Touchpad Blocker 2.3';
export const content = (
  <>
    <Typo variant="paragraph">
      New update of{' '}
      <strong>
        <Link href="/">{APP_NAME}</Link>
      </strong>{' '}
      software has been released. Version 2.3 brings following changes:
    </Typo>
    <Typo variant="list">
      <li>Keyboard and mouse hooks are periodically reset to prevent unusual terminations.</li>
      <li>Software is optimized to use less memory.</li>
      <li>
        <Link href="https://karpolan.com/services/ping-notify/">PingNotify&trade;</Link> event tracking restricted to
        few times per day.
      </li>
      <li>
        <Link href="https://plus.google.com/117242086717211141922">Google+</Link> social icon added.
      </li>
      <li>Installer and uninstaller were improved.</li>
    </Typo>
    <Typo variant="paragraph">
      Software is free, please download the latest version at:
      <Link href="/download/">https://touchpad-blocker.com/download/</Link>
    </Typo>
  </>
);
