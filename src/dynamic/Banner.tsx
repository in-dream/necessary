import { PropType, defineComponent } from 'vue';

interface Banner {
  bgImageUrl: string;
  name: string;
  description: string;
  avatar: string;
}

export default defineComponent({
  props: {
    banner: {
      type: Object as PropType<Banner>,
      default: () => {},
    },
  },
  setup(props, { slots }) {
    const banner = props.banner;
    return () => (
      <div class="h-52 flex justify-center items-center overflow-hidden relative select-none">
        <img src={banner.bgImageUrl} alt="banner-img" class="object-cover scale-105 filter" />
        <div class="absolute right-10 bottom-5 flex items-center">
          <div class="text-white text-right pr-3">
            <div>{banner.name}</div>
            <div class="text-xs pt-2 font-bold">{banner.description}</div>
          </div>
          <img src={banner.avatar} alt="avatars" class="w-14 rounded" />
        </div>
      </div>
    );
  },
});
