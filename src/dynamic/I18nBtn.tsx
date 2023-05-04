import { defineComponent, onMounted, ref, watch } from 'vue';
import { Language } from '@vicons/ionicons5';

import { useI18nStore } from 'stores/I18n';
export default defineComponent({
  setup() {
    const store = useI18nStore();
    onMounted(() => {
      store.onInit();
    });

    return () => (
      <div class="text-slate-500 dark:text-slate-400 cursor-pointer" onClick={store.toggleLocale}>
        <Language class="w-6" />
      </div>
    );
  },
});
