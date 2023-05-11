export const stringToDate = (date: string) => {
  return new Date(date);
};
export const formatDate = (date: Date) => {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
};

export const dateDiff = (date: Date) => {
  return Math.floor(
    (new Date().getTime() - date.getTime()) / (24 * 3600 * 1000),
  );
};

export const generateExcerpt = (
  content: string,
  length: number = 145,
): string => {
  const regex = /!\[[^\]]*\]\(([^)]*)\)|```[\s\S]*?```|#+\s+.*|<[^>]+>/g;
  const excerpt = content
    .replace(regex, '')
    .replace(/\n|\r/g, '')
    .substring(0, length);
  return excerpt.length >= length ? excerpt.slice(0, length) + '...' : excerpt;
};

export const generateImageList = (content: string): string[] => {
  const imageList: string[] = [];
  const regex = /!\[[^\]]*\]\(([^)]*)\)/g;
  let result = regex.exec(content);
  while (result) {
    imageList.push(result[1]);
    result = regex.exec(content);
  }
  return imageList;
};

export const getImageByPost = (content: string) => {
  const regex = /!\[[^\]]*\]\(([^)]*)\)/g;
  const result = regex.exec(content);
  return result ? result[1] : '';
};
