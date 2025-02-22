const tas = [
  {
    id: 1,
    name: 'JavaScript'
  },
  {
    id: 2,
    name: 'React'
  },
  {
    id: 3,
    name: 'Node'
  },
  {
    id: 4,
    name: 'Python'
  },
  {
    id: 5,
    name: 'Django'
  },
  {
    id: 6,
    name: 'Java'
  },
  {
    id: 7,
    name: 'Spring'
  },
  {
    id: 8,
    name: 'MongoDB'
  },
  {
    id: 9,
    name: 'SQL'
  },
  {
    id: 10,
    name: 'GraphQL'
  }
]
export default function TagFilter() {
  return (
    <div>
      <ul>
        {tas.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </div>
  )
}
