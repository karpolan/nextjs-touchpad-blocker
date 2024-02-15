import { Link, Typo } from '@/components';
import { APP_NAME } from '@/config';

export const categories = ['software', 'website'];
export const tags = ['software', 'website', 'news', 'domain', 'feature', 'version'];
export const title = 'Touchpad Blocker 1.7';
export const content = (
  <>
    <Typo variant="paragraph">
      New version of{' '}
      <strong>
        <Link href="/">{APP_NAME}</Link>
      </strong>{' '}
      software has been released. Following changes were made:
    </Typo>
    <Typo variant="list">
      <li>Automatically activates running copy of program on a second start.</li>
      <li>Decreased file size and memory consumption.</li>
      <li>New program icon.</li>
      <li>
        Officially distributed from <Link href="/">TOUCHPAD-BLOCKER.COM</Link> website.
      </li>
    </Typo>
    <Typo variant="paragraph">
      Software is freeware, so you can <Link href="/download/">download and use it</Link> free of charge.
    </Typo>
  </>
);
