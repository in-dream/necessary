import { defineComponent } from 'vue';
import Raving from '@dynamic/Raving';
import Tools from '@dynamic/Tools';
import Apropos from '@dynamic/Apropos';
import FollowMe from '@dynamic/FollowMe';
export default defineComponent({
  components: {
    Raving,
    Tools,
    Apropos,
    FollowMe,
  },
  setup() {
    return () => (
      <div class="bg-gray-100 row-span-1 md:min-lg:hidden dark:bg-slate-900/75 rounded-tr-lg h-full ">
        <Tools />
        <div class="flex flex-col gap-8">
        <FollowMe />
        <Raving />
        <Apropos />
        </div>
      </div>
    );
  },
});
