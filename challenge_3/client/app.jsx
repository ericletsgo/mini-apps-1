const PageOne = (props) => (
  <div>
  <h1>Login Information</h1>
  <form>
    Name:<input type="input"/>
    Email:<input type="input"/>
    Password:<input type="input"/><input onClick={props.nextView} type="submit" value="Submit"/>
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
    Zip Code:<input type="input"/><input onClick={props.nextView} type="submit" value="Submit"/>
  </form>
  </div>
);

const PageThree = (props) => (
  <div>
  <h1>Credit Card Information</h1>
  <form>
    Credit Card Number:<input type="input"/>
    Exp. Date:<input type="input" maxlength="4"/>CVV:<input type="input"/>
    Billing Zip Code: <input type="input" maxlength="5"/><input onClick={props.nextView} type="submit" value="Submit"/>
    </form>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      page: 0
    }
    this.nextView = this.nextView.bind(this);
  }

  parseUserData(data) {

  }

  nextView(userInput) {
    this.setState({page: this.state.page + 1});
    if (this.state.page !== 0) {
      $.ajax({
        url: 'http://127.0.0.1:8000/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(parseUserData(userInput)),
        success: function() {

        },
        error: function() {

        }
      });
    }
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
        <PageOne nextView={this.nextView.bind(this)}/>
      );
    }
    if (this.state.page === 2) {
      return(
        <PageTwo nextView={this.nextView.bind(this)}/>
      );
    }
    if (this.state.page === 3) {
      return(
        <PageThree nextView={this.nextView.bind(this)}/>
      );
    }
  }
}
