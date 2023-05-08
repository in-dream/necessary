import { atom } from 'nanostores';
import { useScroll } from '@vueuse/core';
import type { Ref } from 'vue';
export const scrollView = atom<boolean>(false);
