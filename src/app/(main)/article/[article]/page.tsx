import { NextPage } from 'next';
import { APP_NAME, IS_DEBUG } from '@/config';
import { Link, Stack, Typo, Wrapper } from '@/components';
import { capitalizeAllWords } from '@/utils';
import Screenshot from '@/components/Screenshot';
import { getArticleList } from '../utils';
import BlockDownloadButtons from '../../download/BlockDownloadButtons';
import BlockRelativeArticles from '../BlockRelativeArticles';

export interface ArticleProps {
  params: {
    article: string;
  };
}

/**
 * Renders "Single Article" page
 * @component SingleArticlePage
 */
const SingleArticlePage: NextPage<ArticleProps> = async ({ params: { article } }) => {
  const text = article.replace(/-/g, ' ').replace(/   /g, ' - ');

  const title = capitalizeAllWords(text);

  // TODO: Make content dynamic based on the article
  return (
    <Wrapper tag="article">
      <Typo variant="header1">
        {title} using {APP_NAME}
      </Typo>
      <Typo variant="paragraph">
        {APP_NAME} stands out as a premier product in the market, making it an ideal fit for {text}. Experience the
        capabilities of this free software - a nimble yet robust tool meticulously crafted to elevate your comfort,
        particularly in addressing {text}
      </Typo>
      <Stack alignItems="center" padding="1rem 0 0 0">
        <Screenshot
          alt={`Screenshot of ${APP_NAME} that solves ${text}`}
          title={`Solution for ${text} is ${APP_NAME} software`}
        />
      </Stack>
      <BlockDownloadButtons />
      <Typo variant="paragraph">
        Keep in mind, {APP_NAME} isn&apos;t merely a tool. It&apos;s a solution crafted to enhance your keyboard
        experience by preventing inadvertent touchpad clicks. Download it today and elevate your {text} encounters!
      </Typo>

      <Typo variant="header2">{title}</Typo>
      <Typo variant="paragraph">
        <strong>{title}</strong> holds significance for every computer user. While some lack the knowledge of how to{' '}
        {text}, others are well-acquainted with the challenges associated with {text}. Fortunately, there exists a
        pre-built software solution addressing the {text} topic - {APP_NAME} by KARPOLAN.
      </Typo>
      <Typo variant="paragraph">
        Additional <Link href="/article/">{text} documents and articles</Link> will be published soon. Obtain more
        information about {text} and the product on the website.
      </Typo>

      <Typo variant="header2">More {title} documents</Typo>
      <Typo variant="paragraph">
        Numerous compelling documents related to the {APP_NAME} product and informative articles to address {text}{' '}
        queries are available:
      </Typo>
      <BlockRelativeArticles article={article} />

      <Typo variant="paragraph">
        Additionally, consider exploring {APP_NAME} software - an out-of-the-box product designed for {text}.
      </Typo>
    </Wrapper>
  );
};

/**
 * Returns list of all mentioned software to generate static pages.
 * @returns {Promise<{ article: string }[]>} List of all software.
 */
export async function generateStaticParams() {
  const articles = await getArticleList();
  const result = articles.map((name) => ({ article: name.replace(/ /g, '-') }));
  IS_DEBUG && console.log('article.generateStaticParams()', JSON.stringify(result));
  return result;
}

export const dynamicParams = false; // No fallback: 404 if not found

export default SingleArticlePage;
