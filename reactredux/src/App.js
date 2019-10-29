import React from 'react';
import Header from './components/header';
// import { useSelector, useDispatch, connect } from 'react-redux';

// import './App.css';
// import { Increment, Decrement } from './actions';

// const App = props => {
//   const { math, i,d } = props;
//   // const math = useSelector(state => state.math);
//   // const dispatch = useDispatch();
  
//   return (
//     <div className="App">
//       <button onClick={() => i()}>
//         +
//       </button>
//       <button onClick={() => d()}>
//         -
//       </button>
//       <div>{ math }</div> 
//     </div>
//   );
// }

// const mapStateToProps = ({math}) => {
//   return {
//     math
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     i: () => dispatch(Increment()),
//     d: () => dispatch(Decrement())
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

const App = (props) => {
  return(
    <Header />
  )
}

export default App;
