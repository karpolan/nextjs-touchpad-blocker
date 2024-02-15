import { Link, Typo, Wrapper } from '@/components';
import { capitalizeAllWords } from '@/utils';
import { APP_NAME } from '@/config';
import { softwareToUrl, getSoftwareList, softwareToTitle } from './utils';
import styles from './software.module.css';

/**
 * Renders a page with a list of all Software
 * @component AllSoftwarePage
 */
const AllSoftwarePage = async () => {
  const list = await getSoftwareList();
  return (
    <Wrapper tag="section">
      <Typo variant="header1">{APP_NAME} Alternative Software</Typo>
      <Typo variant="paragraph">
        A multitude of software products akin to <strong>{APP_NAME}</strong> can be found in the market, varying from
        free programs to commercial utilities. The TOUCHPAD-BLOCKER.COM website offers thorough information regarding
        these alternative software choices.
      </Typo>
      <Typo variant="paragraph">
        Discover the below list of renowned alternatives to the <strong>{APP_NAME}</strong> product:
      </Typo>
      <Typo variant="list" className={styles.list}>
        {list.map((name) => (
          // TODO: Make component for list item
          <li key={name}>
            <Link href={softwareToUrl(name)}>{softwareToTitle(name)}</Link>
          </li>
        ))}
      </Typo>
      <Typo variant="paragraph">
        Moreover, contemplate exploring the <strong>{APP_NAME}</strong> program - an authentic substitute for various
        shareware and freeware solutions. You can <Link href="/download/">download {APP_NAME}</Link> directly from the
        TOUCHPAD-BLOCKER.COM website.
      </Typo>
    </Wrapper>
  );
};

export default AllSoftwarePage;
