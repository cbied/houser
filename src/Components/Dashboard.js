import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import store from '../store/store'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: store.getState().houses
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

    deleteOne() {
        axios
        .delete(`/api/properties`)
        .then((response) => this.setState({ houses: response.data }))
        .catch(error => console.log(`Dashboard-axiosDelete: ${error}`))
    }




    render() {
        let displayHouses = this.state.houses.map((house,index) => {
            return(
                <div key={index}>
                    <h1>{house.name}</h1>
                </div>
            )
        })
        return (
            <div>
                <Link to='/Wizard'>Add New Property</Link>
                {displayHouses}
            </div>
        )
    }
}

export default Dashboard
