import { Link, Typo, Wrapper } from '@/components';

/**
 * Content of "News" page, it was a Blog before
 * @page News
 */
const NewsPage = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header1">News</Typo>
      <Typo variant="list">
        <li>
          <Link href="/2024/01/15/new-website/">2024-01-15 - New Website</Link>
        </li>
      </Typo>
    </Wrapper>
  );
};

export default NewsPage;
