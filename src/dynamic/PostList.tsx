import { defineComponent, onMounted } from 'vue';
import { LocationOutline } from '@vicons/ionicons5';
import { DocumentText } from '@vicons/ionicons5';
import PhotoView from '@dynamic/PhotoView';
import { formatDate, generateExcerpt, generateImageList } from '@utils/index';
import avatar from '@assets/images/avatar.jpg';
import { usePostsState } from '@stores/Posts';
import { storeToRefs } from 'pinia';
import PostListBar from './PostListBar';
import PostPlayer from './PostPlayer';
export default defineComponent({
  setup() {
    const postsState = usePostsState();
    onMounted(async () => {
      await postsState.onInit();
    });
    const { postList, categoryList, categoryIndex } = storeToRefs(postsState);
    return () => (
      <div>
        {!postList.value ? (
          <div class="text-sm text-slate-400 text-center flex justify-center items-center flex-col py-10">
            <DocumentText class="w-20 mb-5" />
            POST NOT FOUND
          </div>
        ) : (
          <div class="px-4 text-xs border-b mb-4 border-slate-400/10">
            <ul class="flex gap-3 py-3">
              {categoryList.value.map((item, k) => (
                <li
                  onClick={() => {
                    postsState.filterbyCategory(k);
                  }}
                  class={
                    item.key === categoryList.value[categoryIndex.value].key
                      ? 'bg-slate-500 dark:bg-slate-900 rounded-sm px-2 py-1 text-white cursor-pointer'
                      : 'bg-slate-200 dark:bg-slate-900/30  rounded-sm px-2 py-1 text-slate-500 dark:text-white cursor-pointer'
                  }
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div class="px-4 gap-12 grid">
          {postList.value?.map((post) => {
            return (
              <article>
                <div class="border-b pb-8 border-slate-500/5">
                  <div class="flex justify-between">
                    <div class="flex">
                      <img
                        src={avatar}
                        alt="avatars"
                        class="w-12 h-12 rounded"
                      />
                      <div class="pl-4 text-slate-500 flex flex-col justify-between">
                        <div class="text-sm font-bold">{post.data.author}</div>
                        <div class="text-sm font-bold cursor-pointer">
                          <a href={`/${post.slug}`}>{post.data.title}</a>
                        </div>
                      </div>
                    </div>
                    <div class="text-xs text-slate-500">
                      {formatDate(post.data.date)}
                    </div>
                  </div>
                  <div>
                    <div class="text-sm text-slate-500/80 pt-4 pl-16 line-clamp-5">
                      {generateExcerpt(post.body)}
                    </div>
                    <div>
                      {post.data.type === 'music' ? (
                        <div class="pt-4 pl-16">
                          <PostPlayer playerId={post.data.music} />
                        </div>
                      ) : null}
                      <PhotoView imgList={generateImageList(post.body)} />
                    </div>
                    <PostListBar />
                    <div class="text-xs text-slate-500/80 pt-4 pl-16 flex items-center">
                      <LocationOutline class="w-4 mr-1 text-slate-500/70" />
                      {post.data.location}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  },
});
