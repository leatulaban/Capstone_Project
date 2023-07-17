import React from 'react';
import axios from 'axios';
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }
  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }
  render() {
    return(
	<>
	
	<div class="contactmain">
		<div id="aboutdiv">
<p class="bookpromo">Limited promo! Book right now and get TWO LESSONS for FREE!!!</p><br />
<p class="bookinfo">Fill up the form below for details and questions. </p>
</div><br />
			<div className="contactdiv">
				<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
					<div className="form-group">
						<label htmlFor="name">Name: </label>
						<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address: </label>
						<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
					</div>
					<div className="form-group">
						<label htmlFor="message">Message: </label><br />
						<textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
					</div>
					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		</div></>
	  
    );
  }
  onNameChange(event) {
	  this.setState({name: event.target.value})
  }
  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }
  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}
export default Contact;