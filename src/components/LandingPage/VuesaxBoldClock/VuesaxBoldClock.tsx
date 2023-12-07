import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxBoldClock.module.css';
import { VuesaxBoldClockIcon } from './VuesaxBoldClockIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 50:90 */
export const VuesaxBoldClock: FC<Props> = memo(function VuesaxBoldClock(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxBoldClock}>
        <VuesaxBoldClockIcon className={classes.icon} />
      </div>
    </div>
  );
});
