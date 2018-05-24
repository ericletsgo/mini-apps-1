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
    <p>Zip Code:<input type="input" name="zipCode" onChange={props.handleInput}/></p>
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
    <p>Exp. Date:<input type="input" name="expDate" onChange={props.handleInput}/></p>
    <p>CVV:<input type="input" name="cvv" onChange={props.handleInput}/></p>
    <p>Billing Zip Code: <input type="input" name="billingZip" onChange={props.handleInput}/></p>
    <div>
      <input onClick={props.submitForm} type="submit" value="Submit"/>
      <button onClick={props.previousView}>Previous Page</button>
    </div>
    </form>
  </div>
);

const PageFour = (props) => (
  <div>
  <h1>Confirmation</h1>
  <button onClick={props.submitForm}></button>
  </div>
)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      page: 0,
    }
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  nextView(event) {
    event.preventDefault();
    this.setState({page: this.state.page + 1});
  }

  previousView() {
    this.setState({page: this.state.page - 1});
  }

  submitForm() {
    var submitData = this.state;
    delete submitData['page'];

    $.ajax({
      url: 'http://127.0.0.1:8000/',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(submitData),
      success: function(data) {
        console.log('success!');
      },
      error: function() {
        console.log('failed');
      }
    });
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
        <PageOne nextView={this.nextView.bind(this)} previousView={this.previousView.bind(this)} handleInput={this.handleInput.bind(this)} />
      );
    }
    if (this.state.page === 2) {
      return(
        <PageTwo nextView={this.nextView.bind(this)} previousView={this.previousView.bind(this)} handleInput={this.handleInput.bind(this)} />
      );
    }
    if (this.state.page === 3) {
      return(
        <PageThree nextView={this.nextView.bind(this)} previousView={this.previousView.bind(this)} handleInput={this.handleInput.bind(this)} />
      );
    }
    if (this.state.page === 4) {
      return(
        <PageFour submitForm={this.submitForm.bind(this)} />
      )
    }
  }
}
