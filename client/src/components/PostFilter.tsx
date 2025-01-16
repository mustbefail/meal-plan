import { ChangeEventHandler } from 'react'

interface PostFilterProps {
  field: string
  author: string
  setAuthor: (value: string) => void
}

export default function PostFilter({ field, author, setAuthor }: PostFilterProps) {
  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => setAuthor(event.target.value)
  return (
    <div>
      <label htmlFor={`filter-${field}`}>{field}:</label>
      <input type="text" value={author} name={`filter-${field}`} id={`filter-${field}`} onChange={onChangeHandler} />
    </div>
  )
}
