import React from 'react';

var board = [
  [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6],
  [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6],
  [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6],
  [4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6],
  [5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6],
];

const Row = (props) => (
  <div class="row">
    <Square /><Square /><Square /><Square /><Square /><Square /><Square />
  </div>
)
const Square = (props) => (
  <div class="square" data-x={props.x} data-y={props.y} onClick={props.handleClick}/>
)


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleClick(event) {

  }

  render() {
    return(
      <div class="container">
        <Row /><Row /><Row /><Row /><Row /><Row />
      </div>
    );
  }
}

export default App;
