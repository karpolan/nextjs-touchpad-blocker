import { Link, Typo } from '@/components';

export const categories = ['website'];
export const tags = ['website', 'internet', 'marketing', 'google'];
export const title = 'Added to Google Webmaster Tools';
export const content = (
  <>
    <Typo variant="paragraph">
      This site has been successfully added to Google Webmaster Tools. The{' '}
      <Link href="/sitemap.xml">sitemap in XML format</Link> has been created.
    </Typo>
  </>
);
