import './index.css'

const GetInfo = props => {
  const {item} = props
  const {title, description, publishedDate} = item
  return (
    <li className="list-item">
      <div className="text-cont">
        <h1 className="head">{title}</h1>
        <p className="para">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
      <hr className="line" />
    </li>
  )
}
export default GetInfo
