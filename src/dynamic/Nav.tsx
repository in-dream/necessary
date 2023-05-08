import { PropType, defineComponent, h } from 'vue';
import { title } from '@consts';
import { navigate } from '@utils/router';

export default defineComponent({
  props: {
    routerPath: {
      type: String as PropType<String>,
      default: '/',
    },
  },
  setup(props) {
    const { routerPath } = props;
    return () => (
      <div class="rounded-tl-lg bg-gray-100 col-span-1 flex flex-col justify-between dark:bg-slate-900/75 h-full">
        <div>
          <div class="p-3 pl-5 h-20 flex justify-center flex-col text-slate-600 text-sm border-b border-gray-300/20 dark:border-slate-700/10">
            <div class="text-lg pl-3">{title}</div>
            <div class="text-xs pt-2 pl-3">Pry into whose life.</div>
          </div>
          <div>
            <ul class="p-5 text-sm text-slate-500 gap-3 grid">
              {navigate.map((i) => (
                <li
                  class={`rounded hover:bg-slate-400 hover:text-white cursor-pointer dark:hover:bg-slate-600/25 ${
                    routerPath === i.url ? 'bg-slate-400 text-white dark:bg-slate-600/25' : ''
                  }`}
                >
                  <a href={i.url} class="rounded-lg flex items-center p-3 py-3">
                    {h(i.icon, { class: 'w-5 h-5 mr-3' })}
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  },
});
