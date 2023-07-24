// import { useState } from 'react';
// import { setGlobal } from '../global';


// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');


//     function handleEmailChange(event) {
//         setEmail(event.target.value);
//     }

//     function handlePasswordChange(event) {
//         setPassword(event.target.value);
//     }
    
//     const validate = () => {
//         setGlobal({ empemail: email });  
//     }
//     console.log(email);
//     return (
//         <div>
//             <h1>Login</h1>

//             <label>
//                 Email:
//                 <input type="email" value={email} onChange={handleEmailChange} />
//             </label>
//             <br />
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={handlePasswordChange} />
//             </label>
//             <br />
//             <button onClick={() => validate()}>Log In</button>

//         </div>
//     );
// }
// export default Login;