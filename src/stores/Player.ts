import { MaybeRef, useMediaControls } from '@vueuse/core';
import { atom } from 'nanostores';
export const music = atom<MaybeRef<HTMLMediaElement | null | undefined>>();
const { playing, currentTime, duration, volume } = useMediaControls(
  music.get(),
  {
    src: 'video.mp4',
  },
);
