// import CreatePost from './posts/CreatePost'
import PostList from './posts/PostList'
import Header from '@/components/blog/header/Header.tsx'
import useFilters from '@/components/blog/posts/hooks/useFilters.ts'
import Filters from '@/components/blog/filters/Filters.tsx'

export default function Blog() {
  const { filters, setters } = useFilters()

  return (
    <div>
      <Header />
      <main>
        <h2>Full stack blog app</h2>
        <div>
          <Filters filters={filters} setters={setters} />
          <PostList filters={filters} />
        </div>
        {/*<CreatePost />*/}
      </main>
    </div>
  )
}
