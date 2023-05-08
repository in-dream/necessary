import { CaretForward } from '@vicons/ionicons5';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    return () => (
      <div>
        <div class="flex text-xs items-center  border-b px-6 py-4 border-gray-300/20 dark:border-slate-700/10 text-slate-500">
          <a href="/">首页</a>
          <CaretForward class="w-4 mx-2" />
          {props.title}
        </div>
      </div>
    );
  },
});
