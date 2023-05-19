import { PropType, Ref, defineComponent, onMounted, ref } from 'vue';
import { Play } from '@vicons/ionicons5';
import { usePlayerStore } from '@stores/Player';
import type { Player } from '@api/model/MusicType';
import { fetchMusicInfo } from '@api/repositories/Music';
import defaultPlayer from '@assets/images/defaultPlayer.png';
import background from '@assets/images/times.jpg';
export default defineComponent({
  props: {
    playerId: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const playerState = usePlayerStore();
    const player: Ref<Player[]> = ref([]);
    onMounted(async () => {
      player.value = await fetchMusicInfo([props.playerId]);
    });

    const addInPlayerList = () => {
      playerState.addInPlayerList(player.value[0]);
    };

    return () => (
      <div class="bg-slate-400 w-72 h-16 rounded flex justify-center items-center overflow-hidden relative select-none">
        <img
          src={player.value[0]?.picUrl ? player.value[0]?.picUrl : background}
          alt="back"
          class="blur-lg w-full"
        />
        <div class="absolute w-full h-full flex justify-start items-start">
          <img
            src={
              player.value[0]?.picUrl ? player.value[0]?.picUrl : defaultPlayer
            }
            alt="music-pic"
            class="w-16 h-16 object-cover"
          />
          <div class="flex-grow flex justify-between pl-2 h-full pr-3">
            <div class="pt-2">
              <div class="text-xs text-white line-clamp-2">
                {player.value[0]?.name}
              </div>
              <div class="text-xs text-white/75 pt-1">
                {player.value[0]?.artists.map((i) => i.name).join(' / ')}
              </div>
            </div>
            <div
              class="flex justify-center cursor-pointer"
              onClick={addInPlayerList}
            >
              <Play class="w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    );
  },
});
