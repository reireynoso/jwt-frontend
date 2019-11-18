import React, {useState} from 'react';
import './App.css';
import Header from './Header'
import SignInForm from './SignInForm';
import LoginForm from './LoginForm'

function App() {
  const [user, setUser] = useState({})
  const [form, setForm] = useState("")

  const handleLogin = (user) => {
    console.log(user)
  }

  const handleFormSwitch = (input) => {
    setForm(input)
  }

  const renderForm = () => {
    switch(form){
      case "login":
        return <LoginForm handleLogin={handleLogin}/>
        break;
      default:
        return <SignInForm handleLogin={handleLogin}/>
    }
  }
  return (
    <div className="App">
        <Header handleFormSwitch={handleFormSwitch}/>
        {
          renderForm()
        }
    </div>
  );
}

export default App;
