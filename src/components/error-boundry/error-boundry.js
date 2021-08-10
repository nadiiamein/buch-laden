import React, {Children, Component} from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends component {
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }
    render() {
        if(this.state.hasError) {
return <ErrorIndicator/>
        }
        return this.props.children;
    }
}