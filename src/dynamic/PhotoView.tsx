import { PropType, defineComponent, reactive, ref } from "vue";
import { Close } from "@vicons/ionicons5";
export default defineComponent({
  props: {
    imgList: {
      type: Array as PropType<string[]>,
    },
  },
  setup(props) {
    const dialogConfig = reactive({
      state: false,
      photo: "",
    });
    const dialogPhoto = (photo: number) => {
      dialogConfig.state = true;
      document.documentElement.style.overflowY = 'hidden'; 
      if (props.imgList) dialogConfig.photo = props.imgList[photo];
    };

    const dialogEvent = (event: Event) => {
        event.stopPropagation()
        document.documentElement.style.overflowY = 'scroll'; 
        dialogConfig.state = false;
    }

    return () => (
      <div class="pt-4 pl-16 pr-28 flex flex-wrap gap-1">
        {dialogConfig.state ? (
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
            <img src={dialogConfig.photo} class="h-3/4" />
          </div>
        ) : null}

        {props.imgList?.map((i, k) => (
          <img
            src={i}
            alt="photo-view"
            class="w-28 h-28 object-cover rounded"
            onClick={() => dialogPhoto(k)}
          />
        ))}
      </div>
    );
  },
});
