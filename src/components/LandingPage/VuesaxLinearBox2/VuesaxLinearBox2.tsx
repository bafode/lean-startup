import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearBox2.module.css';
import { VuesaxLinearBox2Icon } from './VuesaxLinearBox2Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 72:176 */
export const VuesaxLinearBox2: FC<Props> = memo(function VuesaxLinearBox2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearBox2}>
        <VuesaxLinearBox2Icon className={classes.icon} />
      </div>
    </div>
  );
});
