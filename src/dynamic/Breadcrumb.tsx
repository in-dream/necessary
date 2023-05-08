import { CaretForward } from '@vicons/ionicons5';
import { PropType, defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String as PropType<String>,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div>
        <div class="flex text-xs font-bold items-center border-b border-t px-4 py-4 border-gray-300/20 dark:border-slate-700/10 text-slate-500">
          <a href="/">首页</a>
          <CaretForward class="w-4 mx-2" />
          <span>{props.title}</span>
        </div>
      </div>
    );
  },
});
