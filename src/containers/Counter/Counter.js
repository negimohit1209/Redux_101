import React, { Component } from 'react';
import {connect} from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
                default: break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Results</button>
                <ul>
                    {this.props.results.map((count,index) => <li key={count.id} onClick={() => this.props.onDeleteResult(count.id)}>{count.val}</li>)}
                    
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        ctr: state.counter,
        results: state.results
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: "INCREMENT"}),
        onDecrementCounter: () => dispatch({type: "DECREMENT"}),
        onAddCounter: () => dispatch({type: "ADD", amount: 5}),
        onSubtractCounter: () => dispatch({type: "SUBTRACT", amount: 5}),
        onStoreResult: () => dispatch({type: "STORE_RESULT"}),
        onDeleteResult: (id) => dispatch({type: "DELETE_RESULT", resultElementId: id}),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);