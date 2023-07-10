// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {title, description, publishedDate} = eachItem
  return (
    <div>
      <div className="title">
        <h1 className="heading">{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default BlogItem
