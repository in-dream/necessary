import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRef,
  toRefs,
} from 'vue';
import { Play, Pause, List } from '@vicons/ionicons5';
import PlayerCover from '@assets/images/singlecover.png';
import { useMediaControls } from '@vueuse/core';
import PlayerDefaultImg from '@assets/images/defaultPlayer.png';
import { usePlayerStore } from '@stores/Player';
import { storeToRefs } from 'pinia';
import Scrubber from './Scrubber';
export default defineComponent({
  async setup() {
    const playerStore = usePlayerStore();
    onMounted(async () => {
      await playerStore.onInit();
      volume.value = 1;
      currentTime.value = 0;
    });

    const { player, playerConfig, playerList } = storeToRefs(playerStore);

    const music = ref<HTMLVideoElement>();
    const { playing, currentTime, duration, volume, buffered } =
      useMediaControls(music, { src: playerConfig });

    const landState = ref(false);

    const checkIn = (index: number) => {
      setTimeout(() => {
        playerStore.checkIn(index);
        currentTime.value = 0;
        playing.value = true;
      }, 50);
    };

    const endBuffer = computed(() =>
      buffered.value.length > 0
        ? buffered.value[buffered.value.length - 1][1]
        : 0,
    );


    
    const formatTime = (time: number) => {
      const min = Math.floor(time / 60);
      const sec = Math.floor(time % 60);
      return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
    };
    return () => (
      <div
        class="fixed bottom-0  justify-center items-center overflow-hidden select-none"
        style="width:640px"
      >
        {landState.value ? (
          <div
            class={{
              'bg-black/30 backdrop-blur-lg  px-3 py-5 text-white text-xs font-light':
                true,

              'transition ease-in duration-100 ': landState.value,
            }}
          >
            <div class="relative overflow-auto">
              <div class="shadow-sm overflow-hidden">
                <table class="border-collapse table-auto w-full text-xs">
                  <thead>
                    <tr>
                      <th class="border-b dark:border-slate-600 p-2 font-medium text-white dark:text-slate-200 text-left">
                        Song
                      </th>
                      <th class="border-b dark:border-slate-600 p-2  font-medium text-white dark:text-slate-200 text-left">
                        Artist
                      </th>
                      <th class="border-b dark:border-slate-600 p-2  font-medium  text-white dark:text-slate-200 text-left">
                        Time
                      </th>
                      <th class="border-b dark:border-slate-600 p-2  font-medium  text-white dark:text-slate-200 text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {playerList.value.map((i, k) => (
                      <tr>
                        <td class="border-b border-slate-100 px-2 py-1 dark:border-slate-700  text-white dark:text-slate-400">
                          {i.name}
                        </td>
                        <td class="border-b border-slate-100 px-2 py-1 dark:border-slate-700  text-white dark:text-slate-400">
                          {i.artists.map((i) => i.name).join(' / ')}
                        </td>
                        <td class="border-b border-slate-100 px-2 py-1 dark:border-slate-700  text-white dark:text-slate-400"></td>
                        <td class="border-b border-slate-100 px-2 py-1 dark:border-slate-700  text-white dark:text-slate-400 text-right">
                          <div
                            onClick={() => {
                              playing.value = false;
                              checkIn(k);
                            }}
                          >
                            {playing.value ? (
                              player.value.id === i.id ? (
                                <Pause class="w-3 h-3 text-white cursor-pointer" />
                              ) : (
                                <Play class="w-3 h-3 text-white cursor-pointer" />
                              )
                            ) : (
                              <Play class="w-3 h-3 text-white cursor-pointer" />
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
        <div class="flex w-full h-16  bg-black/30 backdrop-blur  px-2">
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
              <div class="text-xs text-white line-clamp-2">
                {player.value.name ? `《${player.value.name}》` : '歌曲名称'}
                {player.value.artists
                  ? player.value.artists.map((i) => i.name).join(' / ')
                  : '歌手'}
              </div>
              <div class="flex justify-between text-xs text-white pr-4 items-center">
                <div class="flex-grow">
                  <Scrubber
                    modelValue={currentTime.value}
                    max={duration.value}
                    secondary={endBuffer.value}
                    class="mr-2"
                  >
                  </Scrubber>
                </div>
                <div class="-scale-90">
                  <div class="-scale-100"> {formatTime(currentTime.value)} /{formatTime(duration.value)}</div>
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
                  <Play class="w-5 h-5 text-white" />
                ) : (
                  <Pause class="w-5 h-5 text-white" />
                )}
              </div>
              <div
                class=" cursor-pointer"
                onClick={() => {
                  landState.value = !landState.value;
                }}
              >
                <List class="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
});
