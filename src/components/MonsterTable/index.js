import React, { useState, useEffect } from "react";

// export default class MonsterTable extends React.Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <table style={{ width: "100%", border: "1px solid black" }}>
//         <thead>
//           <th>Name</th>
//           <th>Element</th>
//           <th>HP</th>
//           <th>MP</th>
//           <th>Rating</th>
//         </thead>
//         <tbody>
//           {monsters.map((monster, index) => {
//             return <TableRow key={monster.id} {...monster} />;
//           })}
//         </tbody>
//       </table>
//     );
//   }
// }

// class TableRow extends React.Component {
//   state = {
//     backgroundColor: "hsl(120, 100%, 50%)",
//   };

//   componentDidMount() {
//     this.timerId = setInterval(() => {
//       const saturation = Math.floor(Math.random() * 100);
//       this.setState({
//         backgroundColor: `hsl(120, ${saturation}%, 50%)`,
//       });
//     }, 100);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }

//   render() {
//     const { name, hp, mp, element, rating } = this.props;
//     return (
//       <tr style={{ backgroundColor: this.state.backgroundColor }}>
//         <td>{name}</td>
//         <td>{element}</td>
//         <td>{hp}</td>
//         <td>{mp}</td>
//         <td>{rating}</td>
//       </tr>
//     );
//   }
// }

const TableRow = ({ name, hp, mp, element, rating }) => {
  const [backgroundColor, setBackgroundColor] = useState("hsl(120, 100%, 50%)");

  useEffect(() => {
    const interval = setInterval(() => {
      const saturation = Math.floor(Math.random() * 100);
      setBackgroundColor(`hsl(120, ${saturation}%, 50%)`);
    }, 100);
    return () => clearInterval(interval);
  }, [backgroundColor]);

  return (
    <tr style={{ backgroundColor: backgroundColor }}>
      <td>{name}</td>
      <td>{element}</td>
      <td>{hp}</td>
      <td>{mp}</td>
      <td>{rating}</td>
    </tr>
  );
};

const MonsterTable = ({ monsters }) => {
  return (
    <table style={{ width: "100%", border: "1px solid black" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Element</th>
          <th>HP</th>
          <th>MP</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {monsters.map((monster) => {
          return <TableRow key={monster.id} {...monster} />;
        })}
      </tbody>
    </table>
  );
};

export default MonsterTable;
