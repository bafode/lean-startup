import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearStatusUp.module.css';
import { VuesaxLinearStatusUpIcon } from './VuesaxLinearStatusUpIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 72:207 */
export const VuesaxLinearStatusUp: FC<Props> = memo(function VuesaxLinearStatusUp(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearStatusUp}>
        <VuesaxLinearStatusUpIcon className={classes.icon} />
      </div>
    </div>
  );
});
