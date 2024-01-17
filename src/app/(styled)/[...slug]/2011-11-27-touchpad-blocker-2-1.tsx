import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['software'];
export const tags = ['software', 'feature', 'version', 'free'];
export const title = 'Touchpad Blocker 2.1';
export const content = (
  <>
    <Typo variant="paragraph">
      New minor update of{' '}
      <strong>
        <Link href="/">{APP_NAME}</Link>
      </strong>{' '}
      software has been released. Following changes appear in version 2.1
    </Typo>
    <Typo variant="list">
      <li>Default time interval to block clicks changed to 1/2 second.</li>
      <li>The bug with an unexpected disabling of the blocking feature fixed.</li>
      <li>The same timings are set for all kinds of balloon notifications.</li>
    </Typo>
    <Typo variant="paragraph">
      Software is free, you can download it at: <Link href="/download/">https://touchpad-blocker.com/download/</Link>
    </Typo>
  </>
);
