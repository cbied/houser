import React, { Component } from "react";
import store, {
    UPDATE_NAME, UPDATE_ADDRESS, 
    UPDATE_CITY, UPDATE_STATE,
    UPDATE_ZIP
} from '../store/store'
import axios from "axios";
import { Link } from "react-router-dom";

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        houses: {
            id: this.props.match.params,
            newId: 0,
            name: store.getState().name,
            address: store.getState().address,
            city: store.getState().city,
            state: store.getState().state,
            zip: store.getState().zip
        },
        
    };

    this.makePost = this.makePost.bind(this);
    this.cancel = this.cancel.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  makePost() {
    let { name, address, city, state, zip } = this.state
    axios
      .post("/api/properties", {
        name: name,
        address: address,
        city: city,
        state: state,
        zip: zip
      })
      .then(response => {
          console.log(response)
        this.setState({
          name: response.data.name,
          address: response.data.address,
          city: response.data.city,
          state: response.data.state,
          zip: response.data.zip
        });
      });
  }

  cancel() {
    this.setState({ name: "", address: "", city: "", state: "", zip: 0 });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.props.getHouses(this.props);
    }
  }

  handleChange(e) {
    this.setState({ [ e.target.name ]: e.target.value })
}

saveChanges() {
    let { name, address, city, state, zip } = this.state
    store.dispatch({
      type: UPDATE_NAME,
      payload: name
    })
    store.dispatch({
      type: UPDATE_ADDRESS,
      payload: address
    })
    store.dispatch({
      type: UPDATE_CITY,
      payload: city
    })
    store.dispatch({
      type: UPDATE_STATE,
      payload: state
    })
    store.dispatch({
        type: UPDATE_ZIP,
        payload: zip
      })

  }


  render() {
    let { name, address, city, state, zip } = this.state
    console.log(name, address, city, state, zip)
    return (
        
      <div>
        <div className="container display">
          <h3>Property Name</h3>
          <input type="text" name='name'  value={this.name} onChange={this.handleChange} />
          <h3>Address</h3>
          <input type="text" name='address' onChange={this.handleChange} />
          <h3>City</h3>
          <input type="text" name='city' onChange={this.handleChange} />
          <h3>State</h3>
          <input type="text" name='state' onChange={this.handleChange} />
          <h3>Zip</h3>
          <input type="text" name='zip' onChange={this.handleChange} />
          <div className="buttons">
          <Link to="/">
          <button className="cancel" onClick={this.cancel}>
            Cancel
          </button>
          </Link>
          <Link to="/">
            <button className="submit" onClick={() => this.makePost(this.props)}>Submit</button>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Wizard
