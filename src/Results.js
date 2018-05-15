import React, { Component } from 'react';

export class Results extends Component {
    constructor(props) {
        super(props)
    }
    get results() {
        const officials = this.props.data.officials;
        const offices = this.props.data.offices;
        return offices.map(office => {
            
        })
    }
    render() {

    }
}
