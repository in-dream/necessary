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
    const { escape, arrowleft, arrowright } = useMagicKeys();
    const dialogConfig = reactive<DialogConfig>({
      state: false,
      photoKey: 0,
    });

    const dialogPhoto = (photo: number) => {
      dialogConfig.state = true;
      document.documentElement.style.overflowY = 'hidden';
      dialogConfig.photoKey = photo;
    };

    const dialogEvent = () => {
      document.documentElement.style.overflowY = 'scroll';
      dialogConfig.state = false;
    };

    const stopExtendFunc = (event: Event, func: Function = () => {}) => {
      event.stopPropagation();
      func();
    };

    const prevPhoto = () => {
      dialogConfig.photoKey =
        (dialogConfig.photoKey + props.imgList.length - 1) %
        props.imgList.length;
    };

    const nextPhoto = () => {
      dialogConfig.photoKey =
        (dialogConfig.photoKey + 1) % props.imgList.length;
    };

    watch(
      reactive({ escape, arrowleft, arrowright }),
      (v) => {
        if (v.escape) dialogEvent();
        if (v.arrowleft) prevPhoto();
        if (v.arrowright) nextPhoto();
      },
      {
        deep: true,
      },
    );

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
                class="w-10 h-10 bg-black/5 text-white flex justify-center items-center cursor-pointer absolute left-0"
                onClick={(e) => stopExtendFunc(e, prevPhoto)}
              >
                <ArrowBack class="w-6" />
              </div>
              <div class="absolute right-0 top-0">
                <div
                  class="w-12 h-8  bg-slate-900/75 text-white flex items-center justify-center cursor-pointer"
                  onClick={dialogEvent}
                >
                  <Close class="w-6" />
                </div>
              </div>
              <img
                src={props.imgList[dialogConfig.photoKey]}
                class="h-3/4"
                onClick={stopExtendFunc}
              />
              <div
                class="w-10 h-10 bg-black/5 text-white flex justify-center items-center cursor-pointer absolute right-0"
                onClick={(e) => stopExtendFunc(e, nextPhoto)}
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
