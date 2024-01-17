import { Link, Typo } from '@/components';

export const categories = ['software', 'feature'];
export const tags = ['software', 'feature', 'keyboard', 'free', 'time'];
export const title = 'Shorter intervals for Touchpad blocking';
export const content = (
  <>
    <Typo variant="paragraph">
      Some of our users asked to decrease minimal blocking delay to value less than <strong>1/4</strong> of second.
    </Typo>
    <Typo variant="paragraph">
      No problem, we add such options in <strong>2.75</strong> version of <strong>Touchpad Blocker</strong> software.
    </Typo>
    <Typo variant="paragraph">
      So, fast typists and hardcore programmers can set blocking delay to <strong>1/8</strong> or <strong>0.1</strong>{' '}
      second :)
    </Typo>
    <Typo variant="paragraph">
      If you need other features or have some bright ideas about our software, please{' '}
      <Link href="/contact/">let us know</Link>.
    </Typo>
  </>
);
