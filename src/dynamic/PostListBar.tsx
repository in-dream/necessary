import { defineComponent } from 'vue';
import { Heart } from '@vicons/ionicons5';
import { Comments } from '@vicons/fa';

export default defineComponent({
  setup(props) {
    return () => (
      <div class="text-xs text-slate-400  pl-16 mt-3">
        <div class="bg-slate-400/10 rounded flex  justify-between items-center px-4 py-2">
          <div class="flex">
            <div class="flex mr-4">
              <Heart class="w-4 mr-1 cursor-pointer" />3
            </div>
          </div>
          <div class="flex cursor-pointer">
            <Comments class="w-4 mr-2" />
            {2}
          </div>
        </div>
      </div>
    );
  },
});
