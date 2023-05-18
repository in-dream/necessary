import { followMe } from '@consts';
import { defineComponent, h } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div class="px-8 text-sm text-slate-600 select-none">
        <div>关注我</div>
        <ul class="mt-4 flex gap-1 flex-col text-sm">
          {followMe.map((i) => (
            <li>
              <a
                href={i.url}
                target="_blank"
                class="inline-flex rounded cursor-pointer items-center"
              >
                {h(i.icon, {
                  class: 'w-5 h-5 mr-2 text-slate-500',
                })}
                <span class="text-slate-500/90">{i.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  },
});
