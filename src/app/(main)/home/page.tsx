import { APP_NAME, PUBLIC_URL } from '@/config';
import { Stack, Typo, Wrapper } from '@/components';
import DownloadButton from '@/components/DownloadButton';
import Video from '@/components/Video';
import Screenshot from '@/components/Screenshot';
import SocialMedia from '@/components/SocialMedia';

export const metadata = {
  alternates: {
    canonical: PUBLIC_URL,
  },
};

/**
 * Home page content
 * @page Home
 */
const HomePage = () => {
  const appName = <strong>{APP_NAME}</strong>;

  return (
    <Wrapper tag="article">
      <Typo variant="header1">
        Software designed to eliminate unintended cursor movements while typing on a laptop keyboard
      </Typo>
      <Typo variant="paragraph">
        The touchpad, while highly useful, is often positioned directly beneath your hands as you type. Inadvertent
        touches by your palm or wrist can displace the cursor to an unintended location!
      </Typo>
      <Typo variant="paragraph">
        This is precisely why {appName} becomes essential for notebook owners who prefer using the touchpad over a mouse
        or other pointing devices. The software enhances typing efficiency by temporarily disabling mouse events for a
        brief period after any key is pressed, allowing users to type rapidly. Notably, the touchpad remains enabled
        throughout.
      </Typo>
      <Stack alignItems="center" padding="1rem 0">
        <Screenshot />
      </Stack>
      <Typo variant="paragraph">
        {appName}, a Windows program, maintains simplicity while offering valuable options. Users can customize the
        delay length in milliseconds and benefit from a configurable keyboard shortcut for toggling touch blocking on
        and off. This feature is particularly advantageous for gaming, designing, painting, and other tasks that involve
        active use of the touchpad or mouse.
      </Typo>
      <Typo variant="paragraph">
        You can freely download and use this touchpad assistant software for both personal and business purposes:
      </Typo>
      <Stack alignItems="center" padding="1rem">
        <DownloadButton>Download Now - It&apos;s Free!</DownloadButton>
      </Stack>
      <Typo variant="paragraph">Wishing you smooth and enjoyable typing experiences! 🙂</Typo>

      <Typo variant="header2">How to Disable or Enable the Touch-pad</Typo>
      <Typo variant="paragraph">
        Many individuals are still on the quest to answer this question, primarily because they prefer avoiding the
        perusal of manuals 🙂
      </Typo>
      <Stack alignItems="center" padding="1rem 0 2rem 0">
        <Video video="touchpad" size="16x9" />
      </Stack>
      <Typo variant="paragraph">
        Numerous notebooks come equipped with a dedicated hardware button designed to toggle the touchpad on and off.
        Typically, this button is situated near the touchpad or directly below the screen. If your laptop lacks such a
        button, inspect the pictograms on your <strong>F1-F12</strong> keys. I can assure you that there is a shortcut
        combination involving the Function (<strong>Fn</strong>) key that facilitates the disabling and enabling of the
        touchpad!
      </Typo>
      <Typo variant="paragraph">
        The key combination to disable the touchpad can vary based on the notebook&apos;s manufacturer and model. For
        ASUS, it&apos;s <strong>Fn+F9</strong>; for Acer, it&apos;s <strong>Fn+F7</strong>; for Dell, it&apos;s{' '}
        <strong>Fn+F5</strong>, and so forth. Nevertheless, rest assured that there is always a shortcut to disable the
        touchpad!
      </Typo>
      <Typo variant="paragraph">
        Therefore, if your laptop is operating seamlessly, and you have all the necessary drivers installed, switching
        the touchpad on and off should pose no significant challenge.
      </Typo>
      <Typo variant="header2">Share the Brilliance</Typo>
      <Typo variant="paragraph">
        If you find {appName} interesting and helpful, spread the word! Download and use our software for both personal
        and business purposes, and let your friends in on the secret. Together, let&apos;s make keyboard lock awareness
        a common delight.
      </Typo>
      <SocialMedia padding="0.5rem 0" />
      <Typo variant="paragraph">
        Thank you for choosing {appName} - a must have utility for every PC with touch input device.
      </Typo>
    </Wrapper>
  );
};

export default HomePage;
