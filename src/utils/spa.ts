import * as Turbo from '@hotwired/turbo';
import Turn from '@domchristie/turn';
export const spaInit = () => {
  Turn.start();
  Turn.config.experimental.viewTransitions = true;
  Turbo.start();
};
