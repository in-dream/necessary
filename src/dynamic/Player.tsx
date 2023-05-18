import { Slots, computed, defineComponent, onMounted, ref, watch } from 'vue';
import { Play, Pause, List } from '@vicons/ionicons5';
import PlayerCover from '@assets/images/singlecover.png';
import { useMediaControls } from '@vueuse/core';
import PlayerDefaultImg from '@assets/images/defaultPlayer.png';
import { usePlayerStore } from '@stores/Player';
import { storeToRefs } from 'pinia';
import Scrubber from './Scrubber';
import { formatTime } from '@utils/index';
export default defineComponent({
  async setup() {
    const playerStore = usePlayerStore();
    onMounted(async () => {
      await playerStore.onInit();
      volume.value = 1;
      currentTime.value = 0;
    });
    const { player, playerConfig, playerList, playingRef } =
      storeToRefs(playerStore);
    watch(
      () => playingRef.value,
      () => {
        playing.value = playingRef.value;
      },
    );
    const music = ref<HTMLVideoElement>();
    const { playing, currentTime, duration, volume, buffered } =
      useMediaControls(music, { src: playerConfig });

    const landState = ref(false);

    const checkIn = (index: number) => {
      const newMusic = (index: number) => {
        setTimeout(() => {
          playerStore.checkIn(index);
          currentTime.value = 0;
          playingRef.value = true;
        }, 50);
      };
      playingRef.value = false;
      !playingRef.value
        ? player.value.id !== playerList.value[index].id
          ? newMusic(index)
          : (playingRef.value = false)
        : newMusic(index);
    };

    const endBuffer = computed(() =>
      buffered.value.length > 0
        ? buffered.value[buffered.value.length - 1][1]
        : 0,
    );
    function formatDuration(seconds: number) {
      return new Date(1000 * seconds).toISOString().slice(14, 19);
    }

    const slot: Slots = {
      default: (position, pendingValue) => [
        <div>
          <div
            class="absolute transform -translate-x-1/2 bg-black rounded px-2 bottom-0 mb-4 py-1 text-xs text-white"
            style={{ left: position }}
          >
            {formatDuration(pendingValue)}
          </div>
        </div>,
      ],
    };

    return () => (
      <div
        class="fixed bottom-0 text-slate-600 dark:text-slate-300 font-bold backdrop-blur-2xl justify-center items-center overflow-hidden select-none"
        style="width:640px"
      >
        {landState.value ? (
          <div
            class={{
              'px-3 py-5 border-t border-slate-400/5 text-xs font-light': true,
              'transition ease-in duration-100 ': landState.value,
            }}
          >
            <div class="relative overflow-auto">
              <div class="shadow-sm overflow-hidden">
                <table class="border-collapse table-auto w-full text-xs">
                  <thead>
                    <tr>
                      <th class="border-b p-2 font-medium text-left border-slate-500/20">
                        Song
                      </th>
                      <th class="border-b p-2 font-medium text-left border-slate-500/20">
                        Artist
                      </th>
                      <th class="border-b p-2 font-medium text-left border-slate-500/20">
                        Time
                      </th>
                      <th class="border-b p-2 font-medium text-left border-slate-500/20"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {playerList.value.map((i, k) => (
                      <tr>
                        <td class="border-b px-2 py-1 border-slate-500/20">
                          {i.name}
                        </td>
                        <td class="border-b px-2 py-1 border-slate-500/20">
                          {i.artists.map((i) => i.name).join(' / ')}
                        </td>
                        <td class="border-b px-2 py-1 border-slate-500/20">
                          {formatTime(i.duration / 1000)}
                        </td>
                        <td class="border-b px-2 py-1 text-right border-slate-500/20">
                          <div
                            onClick={() => {
                              checkIn(k);
                            }}
                          >
                            {playing.value ? (
                              player.value.id === i.id ? (
                                <Pause class="w-3 h-3 cursor-pointer" />
                              ) : (
                                <Play class="w-3 h-3 cursor-pointer" />
                              )
                            ) : (
                              <Play class="w-3 h-3 cursor-pointer" />
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
        <div class="flex w-full h-16  px-2 border-t border-slate-400/5">
          <video ref={music} class="hidden" />
          <div class="relative w-16 h-16 flex justify-center items-center">
            <img src={PlayerCover} alt="PlayerCover" class="w-12 h-12" />
            <img
              src={player.value.picUrl ? player.value.picUrl : PlayerDefaultImg}
              alt="music-pic"
              class="w-10 h-10 object-cover absolute -z-10 rounded-full"
            />
          </div>
          <div class="flex-grow flex justify-between pl-2 h-full pr-3">
            <div class="py-3 flex flex-grow justify-between flex-col">
              <div class="text-xs line-clamp-2">
                {player.value.name ? `《${player.value.name}》` : '歌曲名称'}
                {player.value.artists
                  ? player.value.artists.map((i) => i.name).join(' / ')
                  : '歌手'}
              </div>
              <div class="flex justify-between text-xs font-light  pr-4 items-center">
                <div class="flex-grow">
                  <Scrubber
                    v-model={currentTime.value}
                    modelValue={currentTime.value}
                    max={duration.value}
                    secondary={endBuffer.value}
                    class="mr-2"
                  >
                    {slot.default}
                  </Scrubber>
                </div>
                <div class="-scale-90">
                  <div class="-scale-100">
                    {formatTime(currentTime.value)} /{' '}
                    {formatTime(duration.value)}
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <div
                class="flex justify-center cursor-pointer items-center mr-5"
                onClick={() => {
                  playing.value = !playing.value;
                }}
              >
                {!playing.value ? (
                  <Play class="w-5 h-5" />
                ) : (
                  <Pause class="w-5 h-5" />
                )}
              </div>
              <div
                class="cursor-pointer"
                onClick={() => {
                  landState.value = !landState.value;
                }}
              >
                <List class="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
