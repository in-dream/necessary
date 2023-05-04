import { RefreshOutline } from '@vicons/ionicons5';
import { defineComponent, ref } from 'vue';
import { raving } from '@consts';
import { useI18n } from 'vue-i18n';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

export default defineComponent({
  setup() {
    const { t } = useI18n();
    let num = ref(0);
    let numChange = () => {
      num.value = Math.floor(Math.random() * (0 - raving.length) + raving.length);
    };

    return () => (
      <div class="px-8 text-sm text-slate-600 select-none">
        {t('raving')}
        <div class="w-full h-36 bg-slate600 mt-5 rounded overflow-hidden relative">
          <img
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F899eba0c-6ef8-4a62-b191-759179de7384%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1683597026&t=fb06c35e95c70e93e828199782fcbb2a"
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
              <div
                onClick={() => {
                  numChange();
                }}
              >
                <RefreshOutline class="w-8 cursor-pointer" />
              </div>
            </div>
            <div class="pt-4 line-clamp-2">{raving[num.value]}</div>
          </div>
        </div>
      </div>
    );
  },
});
