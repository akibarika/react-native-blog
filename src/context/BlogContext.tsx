import * as React from "react";

interface BlogContextInterface {
  num: number
}

const initBlogContext: BlogContextInterface = {
  num: 5,
};
const BlogContext = React.createContext<BlogContextInterface | null>(null);

export const BlogProvider: React.FC = () => {
  return <BlogContext.Provider value={initBlogContext}>
    ...
  </BlogContext.Provider>
}
export default BlogContext
