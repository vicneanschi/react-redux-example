import React from 'react'
import { connect } from 'react-redux'

import { ViewSwitcher } from './ViewSwitcher';
import {
    switchView
} from './../../actions/tweetsActions'

const makeMapStateToProps = (state, ownProps) => {
    return {
        view: state.get('view')
    };
};

const mapDispatchToProps = (dispatch) => ({
    switchView:()=>{
        dispatch(switchView());
    }
});

export const ViewSwitcherContainer = connect(
    makeMapStateToProps,
    mapDispatchToProps
)(ViewSwitcher);