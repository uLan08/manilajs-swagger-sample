import React, { Component } from 'react'
import Api from '../Api'

const api = Api()

export default class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: { hasErrors: false, message: '' }
        }
    }

    componentDidMount() {
        api.getAll('contacts')
        .then(response => this.setState({ contacts: response.data }))
        .catch(err => this.setState({
            errors: { hasErrors: true, message: err.message}
        }))
    }

    render() {
        const { contacts, errors } = this.state
        if (errors.hasErrors) return <p> {errors.message} </p>
        if (!contacts) return <p> Loading... </p>
        const list = contacts.map(contact => {
            return (
                <div key={contact.name}>
                    <div>
                        <span>{contact.name}</span>
                    </div>
                    <div>
                       <span>{contact.contact_no}</span>   
                    </div>
                    <br/>                 
                </div>
            )
        })
        return (
            <div> 
                {list}
            </div>
        )
    }
}