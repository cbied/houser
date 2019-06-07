import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import store from '../store/store'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: store.getState().houses,
        }
        this.getAll = this.getAll.bind(this)
        this.deleteOne = this.deleteOne.bind(this)
    }

    componentDidMount() {
       this.getAll()
    }

    getAll() {
        setTimeout(() => {
            axios
            .get('/api/properties', { houses: this.state.houses })
            .then(response => {
                console.log(response.data)
                this.setState({ houses: response.data })})
            .catch(error => console.log(`Dashboard-axiosGet: ${error}`))
            }, 1000)
    }

    deleteOne(index) {
        axios
        .delete(`/api/properties/${index}`)
        .then((response) => this.setState({ houses: response.data }))
        .catch(error => console.log(`Dashboard-axiosDelete: ${error}`))
    }




    render() {
        let displayHouses = this.state.houses.map((house,index) => {
            return(
                <div key={index} className="container displayHomes">
                    <div className="listing-container">
                    <div>
                    <img src={house.img} alt=""/>
                    <h6>House name: {house.name}</h6>
                    <h6>Address: {house.address}</h6>
                    <h6>City: {house.city}</h6>
                    <h6>State: {house.state}</h6>
                    <h6>Zip: {house.zip}</h6>
                    </div>
                    <div>
                        <button onClick={() =>this.deleteOne(index)}>Delete</button>
                    </div>
                    </div>
                    
                </div>
            )
        })
        return (
            <div className="container">
                <div className="dashboard">
                <h1>Dashboard</h1>
                <button className="addProp">
                    <Link className="link" to='/Wizard'>Add New Property</Link>
                </button>
                </div>
                <div>
                    {displayHouses}
                </div>
                
            </div>
        )
    }
}

export default Dashboard
