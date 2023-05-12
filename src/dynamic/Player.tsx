import { defineComponent, onMounted, ref } from 'vue';
import { Play, Pause, List } from '@vicons/ionicons5';
import PlayerCover from '@assets/images/singlecover.png';
import { useMediaControls } from '@vueuse/core';
import PlayerDefaultImg from '@assets/images/defaultPlayer.png';
import { fetchMusicInfo } from '../api/repositories/Music';

export default defineComponent({
  async setup() {
    onMounted(async () => {
      volume.value = 1;
      currentTime.value = 0;
    });

    const { avatar, name, artists, url } = await fetchMusicInfo(4899152);
    const music = ref<HTMLVideoElement>();
    const { playing, currentTime, duration, volume } = useMediaControls(music, {
      src: {
        src: url,
        type: 'audio/mp3',
      },
    });
    const landState = ref(false);

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
                  <tbody class=" dark:bg-slate-800/20 bg-slate-300/20">
                    <tr>
                      <td class="border-b border-slate-100 px-2 py-1 dark:border-slate-700  text-white dark:text-slate-400">
                        唯一
                      </td>
                      <td class="border-b border-slate-100 px-2 py-1 dark:border-slate-700   text-white dark:text-slate-400">
                        告五人
                      </td>
                      <td class="border-b border-slate-100 px-2 py-1 dark:border-slate-700  text-white dark:text-slate-400">
                        3:41
                      </td>
                      <td class="border-b border-slate-100 px-2 py-1 dark:border-slate-700  text-white dark:text-slate-400 text-right">
                        <Play class="w-3 h-3 text-white cursor-pointer" />
                      </td>
                    </tr>
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
              src={avatar ? avatar : PlayerDefaultImg}
              alt="music-pic"
              class="w-10 h-10 object-cover absolute -z-10 rounded-full"
            />
          </div>
          <div class="flex-grow flex justify-between pl-2 h-full pr-3">
            <div class="py-3 flex justify-between flex-col">
              <div class="text-xs text-white line-clamp-2">
                {name ? name : '歌曲名称'}
              </div>
              <div class="text-xs text-white/75 pt-1">
                {artists.map((item) => item).join('/')}
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
