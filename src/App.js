import './App.css';
import InstaImage from './photos/InstaImage.PNG'
import InstaName from './photos/InstaName.PNG'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import GooglePlay from './photos/GooglePlay.png'
import Microsoft from './photos/Microsoft.png';





function App() {
  return (
    <div className="App-Container">
      <div className='App-mobilelogo'>
        <img className='img' src= {InstaImage} alt="logo" />
        
      </div>
      <div className='App-LoginSource'>
        <div className='App-Tittle'>
          <img className='App-InstaName' src={InstaName} alt='Insta'></img>
        </div>
        <div className='App-LoginInput'>
          <input className='App-LoginInputField' id='username' type="text" placeholder="Phone number,
          username, or email"/>
          <input className='App-LoginInputField' id='password' type='password' placeholder='Password'></input>
          <button className='Login-Button'
          >Login</button>
          <div className='App-Liner'>
            <div className='lines'>_______________</div>
            <div id='OR'>OR</div>
            <div className='lines'>________________</div>
          </div>
          <div className='App-Icons'>
          <div className='inner-Icons'>
            <FaSquareWhatsapp className='wtsapp'/>
            <FaFacebookSquare className='FB'/>
            </div>
            <a>Login with Facebook</a>
          </div>
          <div className='App-Forgot'>
            <a>Forgot password?</a>
          </div>
        </div>
        <div className='App-Signup'>
        <p>Don't have an account? <b id='signup'>Sign up</b></p>
      </div>
      <div className='App-GetTheApp'>
        Get The App
      </div>
      <div className='App-Store'>
        <img src={GooglePlay} alt='Google'></img>
        <img src={Microsoft} alt='Micro'></img>
      </div>

      </div>
      
      
      
    </div>
    
  );
}

export default App;
