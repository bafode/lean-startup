import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearCode.module.css';
import { VuesaxLinearCodeIcon } from './VuesaxLinearCodeIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 72:196 */
export const VuesaxLinearCode: FC<Props> = memo(function VuesaxLinearCode(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearCode}>
        <VuesaxLinearCodeIcon className={classes.icon} />
      </div>
    </div>
  );
});
