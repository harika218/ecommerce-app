import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Register() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMesg, setErrorMessg] = useState('')

    const registerUser = (userInfo) => {
        setErrorMessg('');
        axios.post('http://localhost:3000/v1/users/register', userInfo).then(response => {
            const { data: { data: { token, userId } } } = response;
            localStorage.setItem('user-session', JSON.stringify({ token, userId }))
            navigate('/')
        }).catch((error) => {
            console.log(error);
            const { response: { data: { errorDescription } } } = error
            if (errorDescription) {
                setErrorMessg(errorDescription);
            }
        });
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <h1 className="text-center"> Register </h1>
                    <form onSubmit={handleSubmit(registerUser)}>
                        <div className="form-group my-3">
                            <label htmlFor="firstName">FirstName</label>

                            <input type="text" className="form-control" id="firstName" {...register("firstName", { required: true, minLength: 4, pattern: "[A-Za-z]{1,32}" })} placeholder="Enter FirstName" />
                            {errors?.firstName?.type == 'required' && <p className="text-danger">First name is required</p>}
                            {errors?.firstName?.type == 'minLength' && <p className='text-danger'>Enter alteast min 4 characters</p>}

                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="lastName">LastName</label>
                            <input type="text" className="form-control" id="lastName" {...register("lastName", { required: true, minLength: 5, pattern: "[A-Za-z]{1,32}" })} placeholder="Enter LastName" />
                            {errors?.lastName?.type == 'required' && <p className='text-danger'>LastName must be required</p>}
                            {errors?.lastName?.type == 'pattern' && <p className='text-danger'>LastName must be alpahnumeric</p>}
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="email">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Enter email" {...register("email", { required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" })} />
                            {errors?.email?.type == 'required' && <p className='text-danger'>Email must be required</p>}
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" {...register("password", { required: true })} />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="mobileno">MobileNumber</label>
                            <input type="text" className="form-control" id="mobileno" placeholder="Enter Mobile number" {...register("mobileno", { required: true })} />
                        </div>

                        <button className="btn btn-primary my-3" type="submit" >Register</button>
                        <p className='text-danger'>{errorMesg}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;