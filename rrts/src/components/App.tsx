import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}

class _App extends Component<AppProps> {
    render() {
        return <div>App</div>;
    }
}

const mapToStateProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos };
};

export const App = connect(mapToStateProps, { fetchTodos })(_App);
