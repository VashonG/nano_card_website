import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { YardsPrescribe903007FramerAppB } from './components/YardsPrescribe903007FramerAppB/YardsPrescribe903007FramerAppB.js';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <YardsPrescribe903007FramerAppB />
    </div>
  );
});
