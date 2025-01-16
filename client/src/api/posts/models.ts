export interface Post {
  title: string
  contents: string
  author: string
}

export interface PostResponse {
  _id: string
  title: string
  contents: string
  author: string
  createdAt: string
  updatedAt: string
}
