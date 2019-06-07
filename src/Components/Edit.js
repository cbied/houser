import React, { Component } from "react";
import "../";
import axios from "axios";
import {Link} from "react-router-dom"

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: [],
      id: this.props.match.params,
      newId: 0,
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
    this.getHouse=this.getHouse.bind(this)
    this.editHouse = this.editHouse.bind(this)
    this.updateName = this.updateName.bind(this)
  }

  getHouse() {
    axios
      .get(`/api/properties${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          houses: res.data,
          newId: res.data[0].id,
          name: res.data[0].name,
          address: res.data[0].breed,
          city: res.data[0].age,
          state: res.data[0].img,
          zip: res.data[0].zip
        });
        console.log(res.data);
      });
  }

  editHouse() {
    console.log(this.props.match.params)
    axios
      .put(
        `/api/properties/${this.state.newId}`,
        { name: this.state.name ,
         address: this.state.address ,
         city: this.state.city,
         state: this.state.state,
         zip: this.state.zip,
         }
      )
      .then(res => {
        this.setState({
          houses: res.data[0],
          newId: res.data.id,
          name: res.data.name,
          address: res.data.address,
          city: res.data.city,
          state: res.data.state,
          zip: res.data.zip
        });
        console.log(res.data);
      });
  }



  updateName(value, id) {
    this.setState({ [id]: value });
    this.setState({ name: value });
  }

  updateAddress(value, id) {
    this.setState({ [id]: value });
    this.setState({ address: value });
  }

  updateCity(value, id) {
    this.setState({ [id]: value });
    this.setState({ city: value });
  }

  updateState(value, id) {
    this.setState({ [id]: value });
    this.setState({ state: value });
  }

  updateZip(value, id) {
    this.setState({ [id]: value });
    this.setState({ zip: value });
  }

  componentDidMount() {
    this.getHouse();
  }

  render() {
    return (
      <div className="Wizard">
        <div className="container">
          <h3>Property Name</h3>
          <input type="text" onChange={e => this.updateName(e.target.value)} />
          <h3>Address</h3>
          <input type="text" onChange={e => this.updateAddress(e.target.value)} />
          <h3>City</h3>
          <input type="text" onChange={e => this.updateCity(e.target.value)} />
          <h3>State</h3>
          <input type="text" onChange={e => this.updateState(e.target.value)} />
          <h3>Zip</h3>
          <input type="text" onChange={e => this.updateZip(e.target.value)} />

          <Link to="/">
            <button onClick={event => this.editHouse(this.state.newId)}>Submit</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Edit;