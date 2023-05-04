import { defineComponent } from 'vue';
import { InformationCircle, PeopleCircle, Bookmarks } from '@vicons/ionicons5';
import { title } from '@consts';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    return () => (
      <div class="rounded-tl-lg bg-gray-100 col-span-1 flex flex-col justify-between dark:bg-slate-900/75">
        <div>
          <div class="p-3 pl-5 h-20 flex justify-center flex-col text-slate-600 text-sm border-b border-gray-300/20 dark:border-slate-700/10">
            <div class="text-lg pl-3">{title}</div>
            <div class="text-xs pt-2 pl-3">Pry into whose life.</div>
          </div>
          <div>
            <ul class="p-5 text-sm text-slate-500 gap-3 grid">
              <li class="bg-slate-400 dark:bg-slate-600/25 rounded-lg dark:text-slate-300 text-white cursor-pointer dark:hover:bg-slate-600/25">
                <a href="/" class="rounded-lg flex p-2 py-3">
                  <Bookmarks class="w-7 pr-2" />
                  {t('nav.home')}
                </a>
              </li>
              <li class="rounded hover:bg-slate-400 hover:text-white dark:hover:bg-slate-600/25 cursor-pointer">
                <a href="/about" class="rounded-lg flex p-2 py-3">
                  <InformationCircle class="w-7 pr-2" />
                  {t('nav.about')}
                </a>
              </li>
              <li class="rounded hover:bg-slate-400 hover:text-white cursor-pointer dark:hover:bg-slate-600/25">
                <a href="/links" class="rounded-lg flex p-2 py-3">
                  <PeopleCircle class="w-7 pr-2" />
                  {t('nav.links')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  },
});
