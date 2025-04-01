import './App.css';
import Login from './components/auth/Login'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home.js'
import Signup from './components/auth/Signup.js'
import List from './components/List.js'
import Add from './components/Add.js'
import NoPathMatch from './components/NoPathMatch'
import Profile from './components/Profile';
import Visit from './components/Visit'
//import LandingPage from './components/LandingPage';


const ProtectedRoute = (props) => {
  return(
        <Route path={props.path} render={data => localStorage.getItem('auth_id') === null || localStorage.getItem('auth_id') === "NOACTIVEUSER" ? 
        (<Redirect to={{pathname:'/login'}}></Redirect>):
        (<props.component {...data}></props.component>)}></Route>
    )
}

const LoginSignUpRollBackRoute = (props) => {
  return(
        <Route path={props.path} render={data => localStorage.getItem('auth_id') === null || localStorage.getItem('auth_id') === "NOACTIVEUSER" ? 
        (<props.component {...data}></props.component>):
        (<Redirect to={{pathname: '/home'}}></Redirect>)}></Route>
    )
}

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route component={Visit} exact path ="/visit" />
        <LoginSignUpRollBackRoute exact path="/login" component={Login} />
        <LoginSignUpRollBackRoute exact path="/signup" component={Signup} />
        <ProtectedRoute exact path="/home" component={Home}/>
        <ProtectedRoute exact path="/" component={Home}/>
        <ProtectedRoute exact path="/list" component={List} />
        <ProtectedRoute exact path="/add" component={Add} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <Route component={NoPathMatch}/>
      </Switch>
    </div>
  );
}

export default App;