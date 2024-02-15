import { NextPage } from 'next';
import { APP_NAME, IS_DEBUG } from '@/config';
import { Link, Stack, Typo, Wrapper } from '@/components';
import { capitalizeAllWords } from '@/utils';
import Screenshot from '@/components/Screenshot';
import { getSoftwareList } from '../utils';
import BlockDownloadButtons from '../../download/BlockDownloadButtons';
import BlockRelativeSoftware from '../BlockRelativeSoftware';

interface Props {
  params: {
    software: string;
  };
}

/**
 * Renders "Single Software" page
 * @component SingleSoftwarePage
 */
const SingleSoftwarePage: NextPage<Props> = async ({ params: { software } }) => {
  const text = decodeURIComponent(software).replace(/-/g, ' ').replace(/   /g, ' - ');
  const title = capitalizeAllWords(text);

  // TODO: Make content dynamic based on the Software
  return (
    <Wrapper tag="article">
      <Typo variant="header1">{title}</Typo>
      <Typo variant="paragraph">
        {title} is a renowned software solution in the market, boasting unparalleled benefits. It has been installed on
        numerous PCs worldwide.
      </Typo>
      <Stack alignItems="center" padding="1rem 0 0 0">
        <Screenshot
          alt={`Screenshot of ${APP_NAME} that is similar to ${title} software`}
          title={`Alternate to ${title} software is ${APP_NAME}`}
        />
      </Stack>
      <BlockDownloadButtons />
      <Typo variant="paragraph">
        A superb replacement for {title} software is the {APP_NAME} program. Various{' '}
        <Link href="/software/">alternative software to {title}</Link>, spanning both free and commercial options, is
        available on the TOUCHPAD-BLOCKER.COM website. Additionally, a comprehensive comparison of these utilities with
        the {title} program can be found there.
      </Typo>

      <Typo variant="header2">Alternate software to {title}</Typo>
      <Typo variant="paragraph">
        This website offers insights into numerous software alternatives to the {title} product, along with other
        valuable software options.
      </Typo>
      <BlockRelativeSoftware software={software} />
      <Typo variant="paragraph">
        Moreover, contemplate exploring the {APP_NAME} software, a superior alternative to replace the {title} utility.
        You can <Link href="/download/">download the free copy of {APP_NAME}</Link> directly from the
        TOUCHPAD-BLOCKER.COM website.
      </Typo>
    </Wrapper>
  );
};

/**
 * Returns list of all mentioned categories to generate static pages.
 * @returns {Promise<{ software: string }[]>} List of all categories.
 */
export async function generateStaticParams() {
  const software = await getSoftwareList();
  const result = software.map((name) => ({ software: name.replace(/ /g, '-') }));
  IS_DEBUG && console.log('Software.generateStaticParams()', JSON.stringify(result));
  return result;
}

export default SingleSoftwarePage;
