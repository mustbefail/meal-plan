const backendUrl = import.meta.env.VITE_BACKEND_URL
export const getPosts = async (queryParams) => {
  const res = await fetch(`${backendUrl}/posts?${new URLSearchParams(queryParams)}`)
  return res.json()
}

export const createPost = async (post) => {
  const res = await fetch(`${backendUrl}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })

  return res.json()
}
