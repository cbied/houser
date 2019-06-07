import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
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
            .get('/api/properties')
            .then(response => this.setState({ houses: response.data }))
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
        return (
            <div>
                <Link to='/Wizard'>Add New Property</Link>
            </div>
        )
    }
}

export default Dashboard
