// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchFunction = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const finalResults = destinationsList.filter(list =>
      list.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="container">
        <h1 className="heading-style">Destination Search</h1>
        <input
          type="search"
          className="input-style"
          value={searchInput}
          onChange={this.searchFunction}
        />
        <ul className="user-list-container">
          {finalResults.map(eachList => (
            <DestinationItem userDetails={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
