import { defaultPlayer } from '@consts';
import type { Player } from 'api/model/MusicType';
import { fetchMusicInfo } from 'api/repositories/Music';
import { defineStore } from 'pinia';

export const usePlayerStore = defineStore('player-store', {
  state: () => ({
    player: <Player>{},
    playerList: <Player[]>[],
    playerConfig: {
      src: '',
      type: 'audio/mp3',
    },
    index: 0,
  }),
  actions: {
    async onInit() {
      this.playerList = await fetchMusicInfo(defaultPlayer.defaultPlayerList);
      this.checkIn(0);
    },
    setPlayerUrl(url: string) {
      this.playerConfig.src = url;
    },
    checkIn(index: number) {
      this.index = index;
      this.setPlayerUrl(this.playerList[index].url);
      this.player = this.playerList[index];
    },
  },
});
