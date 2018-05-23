
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      page: 0
    }
    this.nextView = this.nextView.bind(this);
  }

  nextView() {
    this.setState({page: this.state.page + 1});
  }


  render() {
    if (this.state.page === 0) {
      return(
        <div>
          <button onClick={this.nextView}>Checkout</button>
        </div>
      );
    }
    if (this.state.page === 1) {
      return(
        <div>
        <h1>Login Information</h1>
        <form>
          Name:<input type="input"/>
          Email:<input type="input"/>
          Password:<input type="input"/><input onClick={this.nextView} type="submit" value="Submit"/>
        </form>
        </div>
      )
    }
    if (this.state.page === 2) {
      return(
        <div>
        <h1>Shipping Information</h1>
        <form>
          Line 1:<input type="input"/>
          Line 2:<input type="input"/>
          City:<input type="input"/>State:<input type="input"/>
          Zip Code:<input type="input"/><input onClick={this.nextView} type="submit" value="Submit"/>
        </form>
        </div>
      )
    }
    if (this.state.page === 3) {
      return(
        <div>
        <h1>Credit Card Information</h1>
        <form>
          Credit Card Number:<input type="input"/>
          Exp. Date:<input type="input" maxLength="4"/>CVV:<input type="input"/>
          Billing Zip Code: <input type="input" maxLength="5"/><input onClick={this.nextView} type="submit" value="Submit"/>
        </form>
        </div>
      )
    }
  }
}
//
// pageOne = () => {
//   return (
//     <div>
//     <h1>Login Information</h1>
//     <form>
//       Name:<input type="input"/>
//       Email:<input type="input"/>
//       Password:<input type="input"/><input onClick={this.nextView} type="submit" value="Submit"/>
//     </form>
//     </div>
//   )
// }
//
// pageTwo = () => (
//   <div>
//   <h1>Shipping Information</h1>
//   <form>
//   Line 1:<input type="input"/>
//   Line 2:<input type="input"/>
//   City:<input type="input"/>State:<input type="input"/>
//   Zip Code:<input type="input"/><input onClick={this.nextView} type="submit" value="Submit"/>
//   </form>
//   </div>
// );
//
// pageThree = () => (
//   <div>
//   <h1>Credit Card Information</h1>
//   <form>
//   Credit Card Number:<input type="input"/>
//   Exp. Date:<input type="input" maxlength="4"/>CVV:<input type="input"/>
//   Billing Zip Code: <input type="input" maxlength="5"/><input onClick={this.nextView} type="submit" value="Submit"/>
//   </form>
//   </div>
// );
