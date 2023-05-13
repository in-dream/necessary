import { defaultPlayerId } from '@consts';
import type { MusicType } from 'api/model/MusicType';
import { fetchMusicInfo } from 'api/repositories/Music';
import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player-store', {
  state: () => ({
    player: <MusicType>{
      name: '',
      artists: [''],
      avatar: '',
      url: '',
    },
    playerList: <MusicType[]>[],
  }),
  actions: {
    async onInit() {
      this.player = await fetchMusicInfo(defaultPlayerId);
    },
  },
});
