import { defineComponent } from 'vue';
import { Heart, ShareSocial } from '@vicons/ionicons5';
import {Comments} from '@vicons/fa'
import { useClipboard } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const source = props.url;
    const { t } = useI18n();
    const { copy, copied } = useClipboard({ source });
    return () => (
      <div class="text-xs text-slate-400  pl-16 mt-3">
        <div class="bg-slate-400/10 rounded flex  justify-between items-center px-4 py-2">
          <div class="flex">
            <div class="flex mr-4">
              <Heart class="w-4 mr-1 cursor-pointer" />3
            </div>
            <div
              class="flex"
              onClick={() => {
                copy(source);
              }}
            >
              <ShareSocial class="w-4 cursor-pointer mr-2 " />{' '}
              <div
                class={[{ hidden: !copied.value, 'animate-[left-show_.1s_linear]': copied.value }]}
              >
                {t('success-copy')}
              </div>
            </div>
          </div>
          <div class="flex cursor-pointer"><Comments  class="w-4 mr-2"/>{2}</div>
        </div>
      </div>
    );
  },
});
