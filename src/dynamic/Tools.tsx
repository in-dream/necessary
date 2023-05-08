import { defineComponent } from 'vue';
import ThemeBtn from '@dynamic/ThemeBtn';

import { LogoRss } from '@vicons/ionicons5';
export default defineComponent({
  setup() {
    return () => (
      <div class="px-8 items-center h-20 flex justify-between">
        <div class="flex gap-4">
          <ThemeBtn />
        </div>
        <div class="cursor-pointer text-slate-500 dark:text-slate-400">
          <a href="/rss.xml" target="_blank">
            <LogoRss class="w-6" />
          </a>
        </div>
      </div>
    );
  },
});
