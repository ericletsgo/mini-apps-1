class App extends React.Component {
  constructor() {
    super();
    this.state= {

    }
  }

  nextView() {

  }

  render() {
    return(
      <div>
        <button onClick={this.nextView}>Checkout</button>
        <pageOne nextView={this.nextView} />
      </div>
    );
  }
}

pageOne = (props) => {
  <div>
    <p>Login Information</p>
    <form>
      <input type="input" value="Name"/>
      <input type="input" value="Email"/>
      <input type="input" value="Password"/><input onClick={props.nextView} type="submit" value="Submit"/>
    </form>
  </div>
}

pageTwo = (props) => {
  <div>
    <p>Shipping Information</p>
    <form>
      <input type="input" value="Line 1"/>
      <input type="input" value="Line 2"/>
      <input type="input" value="City"/><input type="input" value="State"/>
      <input type="input" value="Zip Code"/><input onClick={props.nextView} type="submit" value="Submit"/>
    </form>
  </div>
}

pageThree = (props) => {
  <div>
    <p>Credit Card Information</p>
    <form>
      <input type="input" value="Credit Card Number"/>
      <input type="input" value="Exp. Date"/><input type="input" value="Exp. Date"/><input type="input" value="CVV"/>
      <input type="input" value="Billing Zip Code"/><input onClick={props.nextView} type="submit" value="Submit"/>
    </form>
  </div>
}
