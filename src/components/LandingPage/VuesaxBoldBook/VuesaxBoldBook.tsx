import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxBoldBook.module.css';
import { VuesaxBoldBookIcon } from './VuesaxBoldBookIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 50:107 */
export const VuesaxBoldBook: FC<Props> = memo(function VuesaxBoldBook(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.vuesaxBoldBook}>
        <VuesaxBoldBookIcon className={classes.icon} />
      </div>
    </div>
  );
});
