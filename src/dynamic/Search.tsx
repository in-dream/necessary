import { defineComponent } from 'vue';
import { Search as SearchIcon } from '@vicons/ionicons5';
export default defineComponent({
  setup() {
    return () => (
      <div class="h-20 flex items-center pl-4 border-b border-gray-300/20 dark:border-slate-700/10">
        <div class="p-2.5 flex justify-between bg-slate-100 dark:bg-slate-700 w-80 rounded-full text-xs text-slate-500 items-center">
          <div class="flex">
            <div class="pl-2 flex">
              <div>Post</div>
              <span class="text-slate-300 px-2 dark:text-slate-600">|</span>
            </div>
            <input
              type="text"
              placeholder="Search"
              class="outline-none bg-slate-100 dark:bg-slate-700 h-max flex-grow"
            />
          </div>
          <SearchIcon class="w-4 cursor-pointer mr-2" />
        </div>
      </div>
    );
  },
});
