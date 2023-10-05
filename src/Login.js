import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginStatusService } from './LoginStatusService';
function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [errorMessg, setErrorMessag] = useState('');

    const navigate = useNavigate();

    const loginCallBack = (userInfo) => {
        loginStatusService.setStatus(true);
        navigate('/');
        axios.post('http://localhost:3000/v1/users/login', userInfo).then(response => {
            const { data: { data: { token, userId } } } = response;
            localStorage.setItem('usr-session', JSON.stringify({ token, userId }));


        }).catch((error) => {
            const { response: { data: { errorDescription } } } = error;
            if (errorDescription) {
                setErrorMessag(errorDescription);

            }
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <h1>Login Page</h1>
                    <form onSubmit={handleSubmit(loginCallBack)}>
                        <div className="form-group my-3">
                            <label htmlFor="userName">UserName</label>
                            <input type="text" className="form-control" id="userName" placeholder="Enter UserName" {...register("userName", { required: true })} />
                            {errors?.userName?.type == 'required' && <p className='text-danger'>UserName must be required</p>}
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="password" >Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" {...register("password", { required: true })} />
                            {errors?.password?.type == 'required' && <p className='text-danger' >Password must be required</p>}
                        </div>
                        <button className="btn btn-primary my-2"> Login</button>
                        <p className='text-danger'>{errorMessg}</p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;