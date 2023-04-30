
import { useNavigate } from "react-router-dom"
import "./css/login.css"

export default function Login() {
   const navigate=useNavigate();
  return (
    
    <div className='login'>
      <div className="loginScreen__background">
      <img className="loginScreen__logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt=""/>
                <button onClick={()=>navigate("/signin")} className='loginScreen__button'>
                    Sign
                     In
                </button>
                <div className="loginScreen__gradient"/>
      </div>
      <div className="loginScreen__body">
        
            
                <>
                    <h1>Unlimited Films, TV Programmes and More...</h1>
                    <h2>Watch anywhere, Cancel at any time</h2>
                    <h3>Ready to watch? Enter yout Email to create or restart yout membership.</h3>
                    <div className="loginScreen__input">
                    <form action="">
                        <input type="email" placeholder='email address' />
                        <button onClick={()=>navigate("/signin")} >GET STARTED</button>
                        </form>
                    </div>
                </>
            
        
        </div>
           
      </div>
  )
}
