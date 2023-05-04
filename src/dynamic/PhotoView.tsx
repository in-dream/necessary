import { PropType, defineComponent, reactive } from 'vue';
import { Close } from '@vicons/ionicons5';

interface DialogConfig {
  state: boolean;
  photo: string;
}

export default defineComponent({
  props: {
    imgList: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props) {
    const dialogConfig = reactive<DialogConfig>({
      state: false,
      photo: '',
    });

    const dialogPhoto = (photo: number) => {
      dialogConfig.state = true;
      document.documentElement.style.overflowY = 'hidden';
      dialogConfig.photo = props.imgList[photo];
    };

    const dialogEvent = () => {
      document.documentElement.style.overflowY = 'scroll';
      dialogConfig.state = false;
    };

    const stop = (event: Event) => {
      event.stopPropagation();
    };

    return () => {
      if (!props.imgList.length) return null;

      return (
        <div class="pt-4 pl-16 pr-28 flex flex-wrap gap-1">
          {dialogConfig.state && (
            <div
              class="fixed w-screen h-screen top-0 bg-gray-950/70 left-0 z-50 flex justify-center items-center"
              onClick={dialogEvent}
            >
              <div class="absolute right-0 top-0">
                <div
                  class="w-12 h-8  bg-slate-900/75 text-white flex items-center justify-center cursor-pointer"
                  onClick={dialogEvent}
                >
                  <Close class="w-4" />
                </div>
              </div>
              <img src={dialogConfig.photo} class="h-3/4" onClick={stop} />
            </div>
          )}

          {props.imgList.map((i, k) => (
            <img
              src={i}
              alt="photo-view"
              class="w-28 h-28 object-cover rounded"
              onClick={() => dialogPhoto(k)}
            />
          ))}
        </div>
      );
    };
  },
});
