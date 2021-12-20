import React from 'react';
import Action from "../Action/Action";
import View from "../View/View";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.plusCounte = this.plusCounte.bind(this);
    this.state = { counter: 0 }
  }

 plusCounte(arg){
    (arg) ? this.setState({ counter: ++this.state.counter }) : this.setState({ counter: --this.state.counter });
  }

  render() {
    return (
      <div>
        <Action
          plusCounte={this.plusCounte}
        />
        <View 
          counter={this.state.counter}
        />
      </div>
    )
  }
}

export default Counter