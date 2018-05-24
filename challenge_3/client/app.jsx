const PageOne = (props) => (
  <div>
  <h1>Login Information</h1>
  <form>
    <p>Name:<input type="input" name="name" onChange={props.handleInput}/></p>
    <p>Email:<input type="email" name="email" onChange={props.handleInput}/></p>
    <p>Password:<input type="password" name="password" onChange={props.handleInput}/></p>
    <div>
      <input onClick={props.nextView} type="submit" value="Submit"/>
      <button onClick={props.previousView}>Previous Page</button>
    </div>
  </form>
  </div>
)

const PageTwo = (props) => (
  <div>
  <h1>Shipping Information</h1>
  <form>
    <p>Line 1:<input type="input" name="line1" onChange={props.handleInput}/></p>
    <p>Line 2:<input type="input" name="line2" onChange={props.handleInput}/></p>
    <p>City:<input type="input" name="city" onChange={props.handleInput}/></p>
    <p>State:<input type="input" name="state" onChange={props.handleInput}/></p>
    <p>Zip Code:<input type="number" name="zipCode" onChange={props.handleInput}/></p>
    <div>
      <input onClick={props.nextView} type="submit" value="Submit"/>
      <button onClick={props.previousView}>Previous Page</button>
    </div>
  </form>
  </div>
);

const PageThree = (props) => (
  <div>
  <h1>Credit Card Information</h1>
  <form>
    <p>Credit Card Number:<input type="input" name="creditCardNumber" onChange={props.handleInput}/></p>
    <p>Exp. Date:<input type="number" maxLength="4" name="expDate" onChange={props.handleInput}/></p>
    <p>CVV:<input type="number" maxLength="3" name="cvv" onChange={props.handleInput}/></p>
    <p>Billing Zip Code: <input type="number" maxLength="5" name="billingZip" onChange={props.handleInput}/></p>
    <div>
      <input onClick={props.nextView} type="submit" value="Submit"/>
      <button onClick={props.previousView}>Previous Page</button>
    </div>
    </form>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      page: 0,
    }
  }

  // parseUserData(data) {
  //   if (this.state.page === 1) {
  //     return {
  //       name: userInput.name,
  //       email: userInput.email,
  //       password: userInput.password
  //     }
  //   }
  //   if (this.state.page === 2) {
  //     return {
  //       address: {
  //         line1: userInput.line1,
  //         line2: userInput.line2,
  //         city: userInput.city,
  //         state: userInput.state,
  //         zip: userInput.zip
  //       }
  //     }
  //   }
  //   if (this.state.page === 3) {
  //     return {
  //       creditCardInfo: {
  //         creditCardNumber: userInput.creditCardNumber,
  //         expDate: userInput.expDate,
  //         cvv: userInput.cvv,
  //         billingZipCode: userInput.zip
  //       }
  //     }
  //   }
  // }

  handleInput() {

  }

  nextView(event) {
    // event.preventDefault();
    console.log(event.target.name);
    this.setState({page: this.state.page + 1});
    // if (this.state.page !== 0) {
    //   $.ajax({
    //     url: 'http://127.0.0.1:8000/',
    //     type: 'POST',
    //     contentType: 'application/json',
    //     // data: JSON.stringify(this.parseUserData()),
    //     success: function(data) {
    //       console.log('success!');
    //     },
    //     error: function() {
    //       console.log('failed');
    //     }
    //   });
    // }
  }

  previousView() {
    this.setState({page: this.state.page - 1});
  }

  render() {
    if (this.state.page === 0) {
      return(
        <div>
          <button onClick={this.nextView.bind(this)}>Checkout</button>
        </div>
      );
    }
    if (this.state.page === 1) {
      return(
        <PageOne nextView={this.nextView.bind(this)} previousView={this.previousView.bind(this)} />
      );
    }
    if (this.state.page === 2) {
      return(
        <PageTwo nextView={this.nextView.bind(this)} previousView={this.previousView.bind(this)} />
      );
    }
    if (this.state.page === 3) {
      return(
        <PageThree nextView={this.nextView.bind(this)} previousView={this.previousView.bind(this)} />
      );
    }
  }
}
