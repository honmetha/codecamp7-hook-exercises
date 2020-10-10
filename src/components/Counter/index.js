import React, { useState } from "react";
import "./index.css";

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       counter: 0,
//     };

//     this.addCounter = this.addCounter.bind(this);
//     this.subtractCounter = this.subtractCounter.bind(this);
//     this.resetCounter = this.resetCounter.bind(this);
//   }

//   addCounter() {
//     this.setState((state) => {
//       return {
//         counter: state.counter + 1,
//       };
//     });
//   }

//   subtractCounter() {
//     this.setState((state) => {
//       return {
//         counter: state.counter - 1,
//       };
//     });
//   }

//   resetCounter() {
//     this.setState((state) => {
//       return {
//         counter: 0,
//       };
//     });
//   }

//   render() {
//     return (
//       <div className="counter-app">
//         <h2 className="counter-value">{this.state.counter}</h2>
//         <div className="counter-menu">
//           <button
//             className="button counter-add-button"
//             onClick={this.addCounter}
//           >
//             +
//           </button>
//           <button
//             className="button counter-subtract-button"
//             onClick={this.subtractCounter}
//           >
//             -
//           </button>
//           <button
//             className="button counter-reset-button"
//             onClick={this.resetCounter}
//           >
//             reset
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-app">
      <h2 className="counter-value">{counter}</h2>
      <div className="counter-menu">
        <button
          className="button counter-add-button"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <button
          className="button counter-subtract-button"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
        <button
          className="button counter-reset-button"
          onClick={() => setCounter(0)}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
