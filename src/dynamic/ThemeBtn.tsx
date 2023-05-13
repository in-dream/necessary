import { InvertMode } from '@vicons/ionicons5';
import { defineComponent, onMounted } from 'vue';
import { useThemeStore } from 'stores/Theme';
export default defineComponent({
  setup() {
    const theme = useThemeStore();
    onMounted(() => {
      theme.onInit();
    });
    return () => (
      <div
        class={`cursor-pointer transition transform ${
          theme.theme === 'light' ? 'rotate-180' : ''
        } text-slate-500 dark:text-slate-400`}
        onClick={theme.toggleTheme}
      >
        <InvertMode class="w-6" />
      </div>
    );
  },
});
