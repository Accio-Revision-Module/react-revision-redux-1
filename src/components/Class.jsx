import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as ActionTypes from '../store/ActionTypes'

class Class extends Component {
  render() {
    return (
        <div>
        <h1>Class Counter</h1>
        <button onClick={this.props.increment}>Increment (+1)</button>
        <p>Counter: {this.props.counter}</p>
        <button onClick={this.props.decrement}>Decrement (-1)</button>

        {/* <p>
            <input type="number" placeholder="Enter a value" value={addBy} onChange={(e) => setAddBy(e.target.value)} />
        </p>
        <p>
            <button onClick={addByFn}>Add by {addBy}</button>
        </p> */}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: ActionTypes.INCREMENT }),
        decrement: () => dispatch({ type: ActionTypes.DECREMENT }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Class)