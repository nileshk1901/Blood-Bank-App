// import React from "react";
// import Form from "../../components/Shared/Form/Form";
// import {useSelector} from 'react-redux';
// import Spinner from './../../components/Shared/Spinner';
// import { toast } from "react-toastify";


// const Login = () => {
//   const {loading,error}=useSelector(state=> state.auth)

//   return (
//     <>
//     {error && <span>{alert(error)}</span>}
//     {loading?<Spinner/>:(
//       <div className="row" g-0 style={{ display: 'flex' }}>
//       <div style={{ flex: '0 0 75%' }}>
//         <img src="./assets/images/loginpage.png" alt="loginImg" style={{ width: '100%' }} />
//       </div>
    
    
    
//       <div style={{ flex: '0 0 25%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <Form formTitle={'Login Page'} submitBtn={'Login'} formType={'login'}/>
    
//       </div>
//       </div>
//     )}
     
  

//      </>
    
//   );
// };

// export default Login;
import React from "react";
import Form from "../../components/Shared/Form/Form";
import { useSelector } from 'react-redux';
import Spinner from './../../components/Shared/Spinner';
import { toast } from "react-toastify";
import './Login.css';

const Login = () => {
  const { loading, error } = useSelector(state => state.auth);

  return (
    <>
      {error && <span>{toast.error(error)}</span>}
      {loading ? <Spinner /> : (
        <div className="login-background">
          <div className="login-form-container">
            <div className="login-card">
              <h2>Welcome Warrior!</h2>
              <p></p>
              <Form formTitle={''} submitBtn={'Login'} formType={'login'} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

