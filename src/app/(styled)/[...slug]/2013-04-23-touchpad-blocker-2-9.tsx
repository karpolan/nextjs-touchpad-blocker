import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['software'];
export const tags = ['software', 'feature', 'version', 'keyboard', 'mouse'];
export const title = 'Touchpad Blocker 2.9';
export const content = (
  <>
    <Typo variant="paragraph">
      New 2.9 version of{' '}
      <strong>
        <Link href="/">{APP_NAME}</Link>
      </strong>{' '}
      software has been released.
    </Typo>
    <Typo variant="list">
      <li>Fixed issue with on-screen keyboard.</li>
      <li>Mouse Up events are not blocked anymore.</li>
      <li>Some other minor changes.</li>
    </Typo>
    <Typo variant="paragraph">
      Please <Link href="/download/">download and install the latest version</Link>.
    </Typo>
  </>
);
