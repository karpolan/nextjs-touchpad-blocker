import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['software', 'feature'];
export const tags = ['software', 'news', 'feature', 'version', 'free'];
export const title = 'Touchpad Blocker 2.0';
export const content = (
  <>
    <Typo variant="paragraph">
      New major update of{' '}
      <strong>
        <Link href="/">{APP_NAME}</Link>
      </strong>{' '}
      software has been released. The program blocks accidental taps over notebook&apos;s touchpad and makes typing
      comfortable.
    </Typo>
    <Typo variant="paragraph">Following changes appear in this release:</Typo>
    <Typo variant="list">
      <li>New, more user-friendly interface.</li>
      <li>Blocking time format changed from milliseconds to seconds.</li>
      <li>Additional option to block move and wheel events.</li>
      <li>
        Ability to enable and disable touchpad device (for <Link href="https://www.synaptics.com">Synaptics</Link>{' '}
        only).
      </li>
      <li>
        <Link href="https://karpolan.com/services/ping-notify/">PingNotify&trade;</Link> event tracking added.
      </li>
    </Typo>
    <Typo variant="paragraph">
      Software is absolutely free you can download it at:{' '}
      <Link href="/download/">https://touchpad-blocker.com/download/</Link>
    </Typo>
  </>
);
