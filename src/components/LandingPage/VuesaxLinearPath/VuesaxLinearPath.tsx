import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { PathIcon } from './PathIcon.js';
import classes from './VuesaxLinearPath.module.css';

interface Props {
  className?: string;
}
/* @figmaId 72:185 */
export const VuesaxLinearPath: FC<Props> = memo(function VuesaxLinearPath(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.path}>
        <PathIcon className={classes.icon} />
      </div>
    </div>
  );
});
