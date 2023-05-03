import { defineComponent } from "vue";
import { stack } from "@consts";
import { I18n } from "@utils/vue.entry";
const { t } = I18n.global;
export default defineComponent({
  setup() {
    return () => (
      <div class="p-8 text-sm text-slate-600 select-none">
        <div>{t('techStack')}</div>
        <div class="bg-slate-300 dark:bg-slate-700 box-content h-32 rounded mt-5  overflow-hidden opacity-75 flex justify-center items-center">
          <div class="grid grid-cols-6 gap-x-16 gap-y-4 rotate-12 scale-110">
            {stack.map((i) => {
              const src = `https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${i}/${i}.png`;
              return (
                <div class="w-10 h-10 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center animate-[linear-rolling_25s_linear_infinite]">
                  <img src={src} class="w-7 h-7" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
});
