import { mockPosts } from "../../../shared/data/posts";

export function filterByLength(minLength: number) {
  return mockPosts.filter((post) => post.title.length >= minLength);
}