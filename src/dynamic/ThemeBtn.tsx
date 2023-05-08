import { InvertMode } from '@vicons/ionicons5';
import { defineComponent, onMounted } from 'vue';
import { useStore } from '@nanostores/vue';
import {
  themeStore,
  onInit,
  toggleTheme,
} from 'stores/Theme';
export default defineComponent({
  setup() {
    const theme = useStore(themeStore);
    onMounted(() => {
      onInit();
    });
    return () => (
      <div
        class={`cursor-pointer transition transform ${
          theme.value === 'light' ? 'rotate-180' : ''
        } text-slate-500 dark:text-slate-400`}
        onClick={toggleTheme}
      >
        <InvertMode class="w-6" />
      </div>
    );
  },
});
