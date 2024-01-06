import { NextPage } from 'next';
import { Link, Typo, Wrapper } from '@/components';
import { CategoryGroup, TagGroup } from '@/components/Taxonomy';
import { ContentFile, contentFileNameToUrl, getContentFiles } from '@/app/[...slug]/utils';

interface Props {
  params: {
    tag: string;
  };
}

/**
 * Renders a page with a list of articles for a given tag.
 * @component SingleTagPage
 */
const SingleTagPage: NextPage<Props> = async ({ params: { tag } }) => {
  const textToFind = tag.replace(/-/g, ' ');
  const contentFiles = await getContentFiles();
  const articles: ContentFile[] = contentFiles.reduce((all: ContentFile[], fileName: string) => {
    const { tags, categories, content, title } = require(`@/app/[...slug]/${fileName}`);
    if (tags.includes(textToFind)) {
      const href = contentFileNameToUrl(fileName);
      all.push({ tags, categories, content, title, href });
    }
    return all;
  }, []);

  return (
    <Wrapper tag="section">
      <Typo variant="header1">Tag: &quot;{textToFind}&quot;</Typo>
      {articles.map(({ content, categories = [], href = '/', tags = [], title }) => (
        <article key={title}>
          {title && (
            <Typo variant="header2">
              <Link href={href}>{title}</Link>
            </Typo>
          )}
          {content}
          {categories?.length > 0 && <CategoryGroup categories={categories} />}
          {tags?.length > 0 && <TagGroup tags={tags} />}
        </article>
      ))}
    </Wrapper>
  );
};

export default SingleTagPage;
