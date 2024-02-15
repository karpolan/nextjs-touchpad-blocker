import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['software'];
export const tags = ['software', 'feature', 'version', 'news'];
export const title = 'Touchpad Blocker 2.5';
export const content = (
  <>
    <Typo variant="paragraph">
      New 2.5 version of{' '}
      <strong>
        <Link href="/">{APP_NAME}</Link>
      </strong>{' '}
      software has been released.
    </Typo>
    <Typo variant="list">
      <li>
        Added option to disable Internet features (updates,{' '}
        <Link href="https://karpolan.com/services/ping-notify/">PingNotify&trade; statistics</Link>, etc.)
      </li>
      <li>Fixed freezing on system logon.</li>
      <li>Memory consumption has been improved.</li>
    </Typo>
    <Typo variant="paragraph">
      Please download the latest release at: <Link href="/download/">https://touchpad-blocker.com/download/</Link>
    </Typo>
  </>
);
