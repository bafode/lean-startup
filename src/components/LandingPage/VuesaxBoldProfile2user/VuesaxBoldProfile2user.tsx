import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxBoldProfile2user.module.css';
import { VuesaxBoldProfile2userIcon } from './VuesaxBoldProfile2userIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 50:18 */
export const VuesaxBoldProfile2user: FC<Props> = memo(function VuesaxBoldProfile2user(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxBoldProfile2user}>
        <VuesaxBoldProfile2userIcon className={classes.icon} />
      </div>
    </div>
  );
});
