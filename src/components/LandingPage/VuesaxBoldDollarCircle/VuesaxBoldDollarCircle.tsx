import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxBoldDollarCircle.module.css';
import { VuesaxBoldDollarCircleIcon } from './VuesaxBoldDollarCircleIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 50:124 */
export const VuesaxBoldDollarCircle: FC<Props> = memo(function VuesaxBoldDollarCircle(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxBoldDollarCircle}>
        <VuesaxBoldDollarCircleIcon className={classes.icon} />
      </div>
    </div>
  );
});
