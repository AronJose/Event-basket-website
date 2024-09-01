import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Email is Invalid')
            .required('Required'),
        password: Yup.string()
            .required('Required')
    });

    const Login = async (values) => {
        const userInfo = await dispatch.Auth.loginUser(values);
        console.log(userInfo.message, "userinformaton");
        if (userInfo.message === 'success') {
            Cookies.set('authToken', userInfo.userDetails.token);
            navigate('/home');
        }
    };

    return (
        <div className='bg-blue-200 h-screen flex items-center justify-center font-serif'>
            <div className='bg-white w-full h-[70%] max-w-md md:max-w-lg lg:max-w-xl p-6 rounded-lg shadow-xl border'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={Login}
                >
                    {formik => (
                        <Form >
                            <div className=" space-y-4 mt-[55px]">
                                <div>
                                    <h1 className='text-2xl md:text-3xl font-bold text-center'>Login</h1>
                                    <p className='text-gray-500 text-center text-sm'>Welcom to Events </p>
                                </div>
                                <div>
                                    <Field
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        className={`${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'} border rounded-full p-2 w-full md:w-[400px] h-[40px]`}
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                                </div>
                                <div>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className={`${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300'} border rounded-full p-2 w-full md:w-[400px] h-[40px]`}
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
                                </div>
                                <div>
                                    <button type="submit" className="bg-green-700 hover:bg-green-900 text-white font-bold rounded-full w-full md:w-[400px] h-[40px]">
                                        Sign In
                                    </button>
                                </div>
                            </div>
                            <p className="mt-5 text-center">Don't have an account? <a href="/signup" className="text-blue-600">Sign Up</a></p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default SignIn;
