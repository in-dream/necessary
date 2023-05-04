import { defineComponent } from 'vue';
import Raving from '@dynamic/Raving';
import Tools from '@dynamic/Tools';
import ShotView from '@dynamic/ShotView';
import Apropos from '@dynamic/Apropos';
import FollowMe from '@dynamic/FollowMe';
export default defineComponent({
  components: {
    Raving,
    Tools,
    ShotView,
    Apropos,
    FollowMe,
  },
  setup() {
    return () => (
      <div class="bg-gray-100 row-span-1 md:min-lg:hidden dark:bg-slate-900/75 rounded-tr-lg">
        <Tools />
        <FollowMe />
        <Raving />
        <ShotView />
        <Apropos />
      </div>
    );
  },
});
