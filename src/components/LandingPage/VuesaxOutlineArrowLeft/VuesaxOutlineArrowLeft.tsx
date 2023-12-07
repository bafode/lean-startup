import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxOutlineArrowLeft.module.css';
import { VuesaxOutlineArrowLeftIcon } from './VuesaxOutlineArrowLeftIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 81:701 */
export const VuesaxOutlineArrowLeft: FC<Props> = memo(function VuesaxOutlineArrowLeft(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxOutlineArrowLeft}>
        <VuesaxOutlineArrowLeftIcon className={classes.icon} />
      </div>
    </div>
  );
});
