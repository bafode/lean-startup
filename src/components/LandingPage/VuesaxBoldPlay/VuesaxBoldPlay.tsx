import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxBoldPlay.module.css';
import { VuesaxBoldPlayIcon } from './VuesaxBoldPlayIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 19:23 */
export const VuesaxBoldPlay: FC<Props> = memo(function VuesaxBoldPlay(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxBoldPlay}>
        <VuesaxBoldPlayIcon className={classes.icon} />
      </div>
    </div>
  );
});
