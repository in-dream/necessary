import { CollectionEntry, getCollection } from 'astro:content';
import { defineStore } from 'pinia';

interface PaginationType {
  current: number;
  pageSize: number;
  total: number;
}

interface CategoryType {
  name: string;
  key: string;
}

export const usePostsState = defineStore('posts-store', {
  state: () => ({
    all: <CollectionEntry<'posts'>[]>[],
    postList: <CollectionEntry<'posts'>[]>[],
    pagination: <PaginationType>{
      current: 1,
      pageSize: 5,
      total: 0,
    },
    categoryList: <CategoryType[]>[
      {
        name: '全部',
        key: 'all',
      },
    ],
    categoryIndex: 0,
  }),
  actions: {
    async onInit() {
      this.getPostList();
      this.getCategories();
    },
    async getPostList() {
      this.all = (await getCollection('posts')).sort(
        (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
      );
      this.pagination.total = this.all.length;
      const { current, pageSize } = this.pagination;
      const start = (current - 1) * pageSize;
      const end = current * pageSize;
      this.postList = this.all.slice(start, end);
    },
    async next() {
      if (
        this.pagination.current * this.pagination.pageSize >=
        this.pagination.total
      ) {
        return;
      }
      this.pagination.current += 1;
      await this.getPostList();
    },
    async prev() {
      if (this.pagination.current <= 1) {
        return;
      }
      this.pagination.current -= 1;
      await this.getPostList();
    },
    async filterbyCategory(index: number) {
      this.categoryIndex = index;
      if (index === 0) {
        await this.getPostList();
      } else {
        const posts = (await getCollection('posts')).sort(
          (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
        );
        this.postList = posts.filter(
          (post) => post.data.category === this.categoryList[index].key,
        );
      }
    },
    async getCategories() {
      const posts = (await getCollection('posts')).sort(
        (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
      );
      posts.forEach((post) => {
        if (
          !this.categoryList.find(
            (category) => category.key === post.data.category,
          )
        ) {
          this.categoryList.push({
            name: post.data.category,
            key: post.data.category,
          });
        }
      });
    },
  },
});
