import { followMe } from "@consts";
import { defineComponent, h } from "vue";
import { I18n } from "@utils/vue.entry";
const { t } = I18n.global;
export default defineComponent({
  setup() {
    return () => (
      <div class="px-8 text-sm text-slate-600 select-none">
        <div>{t('follow')}</div>
        <ul class="mt-4 mb-6 flex gap-2 flex-col">
          {followMe.map((i) => (
            <li>
              <a
                href={i.url}
                target="_blank"
                class="flex rounded cursor-pointer items-center"
              >
                {h(i.icon, { class: "w-5 h-5 mr-2 text-slate-500" })}
                <span class="text-slate-500/90">{i.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  },
});
