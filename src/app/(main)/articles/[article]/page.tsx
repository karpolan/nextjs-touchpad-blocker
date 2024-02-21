import { redirect } from 'next/navigation';
import { ArticleProps } from '../../article/[article]/page';
import { NextPage } from 'next';

export { generateStaticParams } from '../../article/[article]/page'; // For static generation

/**
 * Redirect to the Single article page
 */
const SingleArticleRedirect: NextPage<ArticleProps> = ({ params: { article } }) => {
  return redirect(`/article/${article}`);
};

export const dynamicParams = false; // No fallback: 404 if not found

export default SingleArticleRedirect;
