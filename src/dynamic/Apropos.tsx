import { dateDiff } from '@utils/index';
import { getCollection } from 'astro:content';
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

const times = (await getCollection('times')).sort(
  (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
);

export default defineComponent({
  setup() {
    const { t } = useI18n();
    return () => (
      <div class="px-8 text-sm text-slate-600 select-none">
        <div>{t('apropos')}</div>
        {times.map((i) => {
          return (
            <div class="cursor-pointer bg-slate-300 dark:bg-slate-700 box-content h-24 rounded mt-5 relative  overflow-hidden  opacity-75 flex justify-center items-center">
              <div class="absolute -z-10">
                <img src={i.data.background} class="blur" />
              </div>
              <div class="text-white text-xs w-full grid grid-flow-col grid-cols-4">
                <div class="flex items-center w-full  col-span-2">
                  <img
                    src={i.data.background}
                    class="object-cover clip-path-background h-24 w-full"
                  />
                </div>
                <div class="col-span-2 flex flex-col items-end pr-4 justify-end pb-3">
                  <div>
                    <span class="text-3xl font-bold pr-2">{dateDiff(i.data.date)}</span>
                    Day
                  </div>
                  <div>{i.data.title}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
});
