import React from 'react'
import {connect} from 'react-redux'
import {userAction} from '../../actions'


class Login extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      email: '',
      password: ''
    }
  }
  
  emailPost = (e) => {
    e.preventDefault()
    this.setState({email: e.target.value})
  }
  
  passwordPost = (e) => {
    e.preventDefault()
    this.setState({password: e.target.value})
  }
  
  onSubmits = (e) => {
    e.preventDefault()
    if (this.state.email && this.state.password) {
      this.props.dispatch(userAction.register(this.state.email, this.state.password))
    }
  }
  
  logIn = () => {
    const {email, password} = this.state
    const {dispatch} = this.props
    if (email && password) {
      dispatch(userAction.login(email, password))
      this.props.history.push('/')
    }
  }
  
  render() {
    return (
      <div style={{margin: "auto", width: "50%", padding: "10px"}}>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail">Email address</label>
            <input className="form-control"
                   placeholder="Введите email"
                   id="email"
                   type="text"
                   name="email"
                   onChange={this.emailPost}
            />
            
            <small id="emailHelp" className="form-text text-muted">We'll never
              share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">Password</label>
            <input placeholder="Введите password"
                   id="password"
                   type="password"
                   name="password"
                   className="form-control"
                   onChange={this.passwordPost}
            />
          </div>
          <button type="submit"
                  className="btn btn-primary"
                  onClick={this.onSubmits}>
            Register
          </button>
          <button type="submit"
                  className="btn btn-primary ml-1"
                  onClick={this.logIn}>
            Login
          </button>
        </form>
      </div>
    )
  }
}


const mapStateToProps = ({authentication: {loggingIn, user}}) => {
  return {loggingIn, user}
}


export default connect(mapStateToProps, null)(Login)
