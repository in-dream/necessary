import { RefreshOutline } from '@vicons/ionicons5';
import { defineComponent, ref } from 'vue';
import { raving } from '@consts';

import { banner } from '@consts';
const getDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return { year, month, day };
};

export default defineComponent({
  setup() {
    const { year, month, day } = getDate();
    const num = ref(0);
    const numChange = () => {
      num.value = Math.floor(
        Math.random() * (0 - raving.length) + raving.length,
      );
    };

    return () => (
      <div class="px-8 text-sm text-slate-600 select-none">
        呓语
        <div class="w-full h-36 bg-slate600 mt-5 rounded overflow-hidden relative">
          <img
            src={banner.bgImageUrl}
            alt="background"
            class="brightness-50 filter"
          />
          <div class="absolute top-0 text-white/80 w-full h-full p-5">
            <div class="flex justify-between items-center">
              <div>
                <div class="text-2xl">{day}</div>
                <div class="text-sm">
                  <span>{year}</span>/<span>{month}</span>
                </div>
              </div>
              <div onClick={numChange}>
                <RefreshOutline class="w-8 cursor-pointer" />
              </div>
            </div>
            <div class="pt-4 line-clamp-2">
              {raving[num.value]}
            </div>
          </div>
        </div>
      </div>
    );
  },
});
