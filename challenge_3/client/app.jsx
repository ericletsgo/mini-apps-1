const PageOne = (props) => (
  <div>
  <h1>Login Information</h1>
  <form>
    Name:<input type="input"/>
    Email:<input type="input"/>
    Password:<input type="password"/>
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
    Line 1:<input type="input"/>
    Line 2:<input type="input"/>
    City:<input type="input"/>State:<input type="input"/>
    Zip Code:<input type="input"/>
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
    Credit Card Number:<input type="input"/>
    Exp. Date:<input type="input" maxLength="4"/>CVV:<input type="input"/>
    Billing Zip Code: <input type="input" maxLength="5"/>
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
      page: 0
    }
  }

  parseUserData(data) {
    if (this.state.page === 1) {
      return {
        name: userInput.name,
        email: userInput.email,
        password: userInput.password
      }
    }
    if (this.state.page === 2) {
      return {
        address: {
          line1: userInput.line1,
          line2: userInput.line2,
          city: userInput.city,
          state: userInput.state,
          zip: userInput.zip
        }
      }
    }
    if (this.state.page === 3) {
      return {
        creditCardInfo: {
          creditCardNumber: userInput.creditCardNumber,
          expDate: userInput.expDate,
          cvv: userInput.cvv,
          billingZipCode: userInput.zip
        }
      }
    }
  }

  nextView(userInput) {
    this.setState({page: this.state.page + 1});
    if (this.state.page !== 0) {
      $.ajax({
        url: 'http://127.0.0.1:8000/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(this.parseUserData(userInput)),
        success: function(data) {
          console.log('success!');
        },
        error: function() {
          console.log('failed');
        }
      });
    }
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
