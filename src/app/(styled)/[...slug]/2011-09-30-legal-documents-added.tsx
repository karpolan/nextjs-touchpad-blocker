import { Link, Typo } from '@/components';

export const categories = ['legal', 'website'];
export const tags = ['website', 'legal', 'document'];
export const title = 'Legal documents added';
export const content = (
  <>
    <Typo variant="paragraph">
      <Link href="/legal/">Legal documents</Link> have been added to our site:
    </Typo>
    <Typo variant="list">
      <li>
        <Link href="/legal/legal-notices/">Legal notices</Link>
      </li>
      <li>
        <Link href="/legal/privacy-policy/">Privacy policy</Link>
      </li>
      <li>
        <Link href="/legal/software-license/">Software license</Link>
      </li>
    </Typo>
    <Typo variant="paragraph">Please read.</Typo>
  </>
);
