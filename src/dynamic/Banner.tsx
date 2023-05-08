import { PropType, defineComponent } from 'vue';

interface Banner {
  bgImageUrl: string;
  title: string;
  description: string;
  avatar?: string;
}

type BannerType = 'default' | 'post';

export default defineComponent({
  props: {
    banner: {
      type: Object as PropType<Banner>,
      default: () => {},
    },
    type: {
      type: String as PropType<BannerType>,
      default: 'default',
    },
  },
  setup(props) {
    const banner = props.banner;

    const defaultRender = () => {
      return (
        <div>
          <img
            src={banner.bgImageUrl}
            alt="banner-img"
            class="object-cover scale-105 filter brightness-50"
          />
          <div class="absolute right-10 bottom-5 flex items-center">
            <div class="text-white text-right pr-3">
              <div>{banner.title}</div>
              <div class="text-xs pt-2 font-bold line-clamp-2">
                {banner.description}
              </div>
            </div>
            {banner.avatar ? (
              <img
                src={banner.avatar}
                alt="avatars"
                class="w-14 rounded"
              />
            ) : null}
          </div>
        </div>
      );
    };

    const postRender = () => {
      return (
        <div>
          <img
            src={banner.bgImageUrl}
            alt="banner-img"
            class="object-cover scale-105 filter brightness-50"
          />
          <div class="absolute z-10 w-full bottom-0 text-white p-4">
            <div class="text-xl mb-2 font-bold">
              {banner.title}
            </div>
            <div class="text-xs line-clamp-2">
              {banner.description}
            </div>
          </div>
        </div>
      );
    };

    return () => (
      <div class="h-52 flex justify-center items-center overflow-hidden relative select-none">
        {props.type === 'default'
          ? defaultRender()
          : postRender()}
      </div>
    );
  },
});
