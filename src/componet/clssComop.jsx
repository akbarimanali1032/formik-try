
import React, { Component } from 'react'

export class ClssComop extends Component {
    constructor() {
        super();
        this.state = { color: 'red', ok: false }
    }

    handleChange(event) {
        this.setState({ color: event.target.value, ok: true });
    }

    componentDidMount() {
        console.log('Component mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component updated');
        if (prevState.counter !== this.state.counter) {
            console.log('Counter value changed componentDidUpdate');
        }
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    render() {

        return (
            <div>
                <input
                    type="text"
                    value={ this.state.color }
                    onChange={ this.handleChange.bind(this) }
                />
                <p>Input value: { this.state.color }</p>

                {
                    this.state.ok ? <h1>Ok</h1> : <h1>no-Ok</h1>
                }
            </div>
        )
    }
}

export default ClssComop