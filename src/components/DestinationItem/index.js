// Write your code here

import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {imgUrl, name} = userDetails
  return (
    <li className="list-style">
      <img src={imgUrl} className="img-style" alt={name} />
      <p className="paragraph-style">{name}</p>
    </li>
  )
}
export default DestinationItem
