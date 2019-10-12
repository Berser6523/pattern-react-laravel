import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { requestPeople } from '../store/actions/people'


class Index extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return <h1>olá</h1>
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestPeople }, dispatch);

const mapStateToProps = state => ({
    filtro: state.people.filtro,
    people: state.people.people
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)
