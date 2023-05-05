import { defineComponent, onMounted, ref, watch } from 'vue';
import { Language } from '@vicons/ionicons5';
import { useStore } from '@nanostores/vue';
import { onInit, localE, changeLocale } from 'stores/I18n';
export default defineComponent({
  setup() {
    const local = useStore(localE);
    onMounted(() => {
      onInit();
    });

    return () => (
      <div class="text-slate-500 dark:text-slate-400 cursor-pointer" onClick={changeLocale}>
        <Language class="w-6" />
      </div>
    );
  },
});
