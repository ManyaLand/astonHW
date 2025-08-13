
type Post = {
  id: number,
  title: string,
  content: string,
  comments: string[],
}

export function filterByLength(posts: Post[], minLength: number) {
  return posts.filter((post) => post.title.length >= minLength);
}