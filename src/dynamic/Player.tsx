import { Ref, defineComponent, onMounted, ref, watch } from 'vue';
import { Play, Pause } from '@vicons/ionicons5';
import PlayerCover from '@assets/images/singlecover.png';
import { useMediaControls } from '@vueuse/core';
import PlayerDefaultImg from '@assets/images/defaultPlayer.png';
import { featchMusicInfo } from 'api/Music';
// import type { MusicType } from 'api/model/MusicType';
export default defineComponent({
  setup(props) {
    // const musicInfo: Ref<MusicType | undefined> = ref();

    onMounted(async () => {
      // musicInfo.value = await featchMusicInfo('1974698351');
      volume.value = 1;
      currentTime.value = 0;
    });
    // console.log(musicInfo.value?.code)
    const { avatar, name, author, url } = {
      avatar: '',
      name: '寻一个你',
      author: '刘宇宁',
      url: 'https://api.oick.cn/wyy/api.php?id=1974698351',
    };
    const music = ref<HTMLVideoElement>();
    const { playing, currentTime, duration, volume } = useMediaControls(music, {
      src: {
        src: url,
        type: 'audio/mp3',
      },
    });

    watch(
      () => playing.value,
      (v) => {
        console.log(v);
        console.log(music);
      },
    );

    return () => (
      <div
        class="fixed bottom-0 px-2 bg-black/20 backdrop-blur h-16 flex justify-center items-center overflow-hidden  select-none"
        style="width:640px"
      >
        <video ref={music} class="hidden" />
        <div class="relative w-16 h-16 flex justify-center items-center">
          <img src={PlayerCover} alt="PlayerCover" class="w-14 h-14" />
          <img
            src={avatar ? avatar : PlayerDefaultImg}
            alt="music-pic"
            class="w-12 h-12 object-cover absolute -z-10 rounded-full"
          />
        </div>
        <div class="flex-grow flex justify-between pl-2 h-full pr-3">
          <div class="py-3 flex justify-between flex-col">
            <div class="text-xs text-white line-clamp-2">
              {name ? name : '歌曲名称'}
            </div>
            <div class="text-xs text-white/75 pt-1">
              {author ? author : '歌手名称'}
            </div>
          </div>
          <div
            class="flex justify-center cursor-pointer"
            onClick={() => {
              playing.value = !playing.value;
            }}
          >
            {!playing.value ? (
              <Play class="w-8 text-white" />
            ) : (
              <Pause class="w-8 text-white" />
            )}
          </div>
        </div>
      </div>
    );
  },
});
