import React from 'react'
import { connect } from 'react-redux';
import { CounterActionInc, CounterActionDec } from "../redux/actions"

const Main = (props) => {
  return (
    <div>
      <h1>{props.counter}</h1>
      <button onClick={props.CounterActionInc}>INCREMENT</button>
      <button onClick={props.CounterActionDec}>DECREMENT</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    CounterActionInc: () => dispatch(CounterActionInc()),
    CounterActionDec: () => dispatch(CounterActionDec()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);