import { PropType, defineComponent, reactive, watch } from 'vue';
import { Close, ArrowBack, ArrowForward } from '@vicons/ionicons5';
import { useMagicKeys } from '@vueuse/core';
interface DialogConfig {
  state: boolean;
  photoKey: number;
}

export default defineComponent({
  props: {
    imgList: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props) {
    const { escape } = useMagicKeys();

    const dialogConfig = reactive<DialogConfig>({
      state: false,
      photoKey: 0,
    });

    watch(
      () => escape.value,
      (v) => {
        if (v && dialogConfig.state) dialogConfig.state = false;
      },
      {
        deep: true,
      },
    );

    const dialogPhoto = (photo: number) => {
      dialogConfig.state = true;
      document.documentElement.style.overflowY = 'hidden';
      dialogConfig.photoKey = photo;
    };

    const dialogEvent = () => {
      document.documentElement.style.overflowY = 'scroll';
      dialogConfig.state = false;
    };

    const stop = (event: Event) => {
      event.stopPropagation();
    };

    const prevPhoto = (event: Event) => {
      event.stopPropagation();
      if (dialogConfig.photoKey === props.imgList.length - 1) {
        dialogConfig.photoKey = 0;
      } else {
        dialogConfig.photoKey++;
      }
    };

    const nextPhoto = (event: Event) => {
      event.stopPropagation();
      if (dialogConfig.photoKey === 0) {
        dialogConfig.photoKey = props.imgList.length - 1;
      } else {
        dialogConfig.photoKey--;
      }
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
              <div
                class="w-10 h-10 bg-black/40 text-white flex justify-center items-center cursor-pointer absolute left-0"
                onClick={prevPhoto}
              >
                <ArrowBack class="w-6" />
              </div>
              <div class="absolute right-0 top-0">
                <div
                  class="w-12 h-8  bg-slate-900/75 text-white flex items-center justify-center cursor-pointer"
                  onClick={dialogEvent}
                >
                  <Close class="w-4" />
                </div>
              </div>
              <img src={props.imgList[dialogConfig.photoKey]} class="h-3/4" onClick={stop} />
              <div
                class="w-10 h-10  bg-black/40 text-white flex justify-center items-center cursor-pointer absolute right-0"
                onClick={nextPhoto}
              >
                <ArrowForward class="w-6" />
              </div>
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
