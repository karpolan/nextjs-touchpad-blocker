import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['software', 'feature'];
export const tags = ['software', 'feature', 'version', 'news', 'time'];
export const title = 'Touchpad Blocker 3.0';
export const content = (
  <>
    <Typo variant="paragraph">
      New major update of{' '}
      <strong>
        <Link href="/">{APP_NAME}</Link>
      </strong>{' '}
      software has been released.
    </Typo>
    <Typo variant="list">
      <li>Windows 10 compatibility improved.</li>
      <li>Default time interval to block clicks changed to 1 second.</li>
      <li>Some other improvements.</li>
    </Typo>
    <Typo variant="paragraph">
      Please <Link href="/download/">download and install</Link> the latest version of program.
    </Typo>
  </>
);
