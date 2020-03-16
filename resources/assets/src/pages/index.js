import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { requestPeople } from "../store/actions/people";

const Index = ({ requestPeople, people }) => {
    useEffect(() => {
        requestPeople();
    }, []);

    return people.map((person, key) => <h1 key={key}>{person.name.first}</h1>);
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ requestPeople }, dispatch);

const mapStateToProps = state => ({
    filtro: state.people.filtro,
    people: state.people.people
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
