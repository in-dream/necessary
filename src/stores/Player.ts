import { defaultPlayerId } from '@consts';
import type { MusicType } from 'api/model/MusicType';
import { fetchMusicInfo } from 'api/repositories/Music';
import { set } from 'astro/zod';
import { defineStore } from 'pinia';
import { type Ref, reactive, ref } from 'vue';

export const usePlayerStore = defineStore('player-store', {
  state: () => ({
    player: <MusicType>{
      name: '',
      artists: [''],
      avatar: '',
      url: '',
    },
    playerList: <MusicType[]>[],
    playerConfig: {
      src: '',
      type: 'audio/mp3',
    },
  }),
  actions: {
    async onInit() {
      this.player = await fetchMusicInfo(defaultPlayerId);
      this.setPlayerUrl(this.player.url);
    },
    setPlayerUrl(url: string) {
      this.playerConfig.src = url;
    },
  },
});
