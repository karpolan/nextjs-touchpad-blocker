import { APP_NAME, APP_VERSION } from '@/config';
import { Link, Typo, Wrapper } from '@/components';
import BlockDownloadButtons from './BlockDownloadButtons';
import ListOtherSoftware from './ListOtherSoftware';

/**
 * Content of Download page
 * @page Download
 */
const PageDownload = () => {
  return (
    <Wrapper tag="article">
      <Typo variant="header2">Typing on PC with sensitivity touchpad can be frustrating</Typo>
      <Typo variant="paragraph">
        Have you ever experienced your cursor unexpectedly leaping to another paragraph while typing on a notebook,
        especially when your hand rests on or hovers over the touchpad? It's a common source of irritation for everyone!
      </Typo>
      <Typo variant="paragraph">
        Fortunately, there's a simple solution to this annoying problem. <strong>{APP_NAME}</strong> is a compact
        program designed to address this issue. It temporarily deactivates touchpad clicks and taps when a key is
        pressed on the keyboard. This straightforward trick proves effective in preventing the cursor from
        unintentionally jumping around, offering a hassle-free typing experience.
      </Typo>

      <Typo variant="header2">Download {APP_NAME} Software</Typo>
      <Typo variant="paragraph">
        <strong>{APP_NAME}</strong> version <strong>{APP_VERSION}</strong> works on any desktop and server version of
        Windows either 32 or 64 bits. Software is tested and compatible with Windows XP/Vista/7/8/10/11. Should work on
        Win 9x/NT4/2000 except some features. There is no Mac version, yet 🙂
      </Typo>
      <Typo variant="paragraph">
        Software is distributed as Freeware. You can download and use our software absolutely free. It is created just
        for fun&trade; by <Link href="https://karpolan.com">KARPOLAN</Link>.
      </Typo>
      <BlockDownloadButtons />
      <Typo variant="paragraph">
        Just execute the downloaded file and adhere to the guidance provided by the installation wizard. To launch{' '}
        <strong>{APP_NAME}</strong>, you can either access it through the Programs menu (Start button) or simply click
        the program icon on your desktop. However, manual initiation is unnecessary since the program automatically runs
        after installation and during system startup.
      </Typo>

      <Typo variant="header2">Other useful Software</Typo>
      <Typo variant="paragraph">
        Take a look at other software created by <Link href="https://karpolan.com">KARPOLAN</Link> and his friends,
        maybe you&apos;ll find something interesting for you:
      </Typo>
      <ListOtherSoftware />
    </Wrapper>
  );
};

export default PageDownload;
