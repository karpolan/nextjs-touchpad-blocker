import { Link, Typo, Wrapper } from '@/components';
import { APP_NAME } from '@/config';
import { articleToTitle, articleToUrl, getArticleList } from './utils';
import styles from './article.module.css';

/**
 * Renders a page with a list of all Articles
 * @component AllArticlesPage
 */
const AllArticlesPage = async () => {
  const articles = await getArticleList();
  return (
    <Wrapper tag="section">
      <Typo variant="header1">Articles relative to {APP_NAME}</Typo>
      <Typo variant="paragraph">
        Delve into a varied collection of engaging articles and informative documents accessible on the website. New
        content is consistently added to keep you informed. Explore the most popular articles pertaining to the{' '}
        <strong>{APP_NAME}</strong> software below:
      </Typo>
      <Typo variant="list" className={styles.list}>
        {articles.map((name) => (
          // TODO: Make component for list item
          <li key={name}>
            <Link href={articleToUrl(name)}>{articleToTitle(name)}</Link>
          </li>
        ))}
      </Typo>
      <Typo variant="paragraph">
        We suggest exploring the <strong>{APP_NAME}</strong> product, which aligns with the content of these articles
        and documents. You can <Link href="/download/">download the latest version</Link> of <strong>{APP_NAME}</strong>{' '}
        directly from this website.
      </Typo>
    </Wrapper>
  );
};

export default AllArticlesPage;
