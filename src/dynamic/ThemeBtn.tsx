import { InvertMode } from '@vicons/ionicons5';
import { defineComponent, onMounted } from 'vue';
import { useThemeStore } from 'stores/Theme';
export default defineComponent({
  setup() {
    const store = useThemeStore();
    onMounted(() => {
      store.onInit();
    });

    return () => (
      <div
        class={`cursor-pointer transition transform ${
          store.theme === 'light' ? '' : 'rotate-180'
        } text-slate-500 dark:text-slate-400`}
        onClick={store.toggleTheme}
      >
        <InvertMode class="w-6" />
      </div>
    );
  },
});
