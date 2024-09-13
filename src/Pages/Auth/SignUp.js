import React, { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const phoneRegExp = /^[0-9]{10}$/;

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        contact: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        first_name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        last_name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        email: Yup.string().email('Email is Invalid').required('Required'),
        contact: Yup.string()
            .required('Required')
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, 'Too short')
            .max(10, 'Too long'),
        password: Yup.string().required('Required')
    });

    const signUpUser = async (values) => {
        if (values) {
            const result = await dispatch.Auth.SignUp(values);
            console.log(result);
        }
        navigate('/home');
    };

    useEffect(() => {
        console.log("hello1")
    }, []);

    return (
        <div className='bg-blue-200 h-screen w-[100%] flex items-center justify-center'>
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl font-serif">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={signUpUser}
                >
                    {formik => (
                        <Form className="w-full bg-white border-3 border-gray-900 rounded-lg shadow-lg p-6 md:p-8 space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-center">Create an Account</h2>
                            <p className="text-gray-500 text-center">Sign up with your email adress and select your role</p>

                            <div>
                                <Field
                                    type="text"
                                    name="first_name"
                                    placeholder="First Name"
                                    className={`border rounded-full p-2 w-full ${formik.touched.first_name && formik.errors.first_name ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <ErrorMessage name="first_name" component="div" className="text-red-600 text-sm" />
                            </div>

                            <div>
                                <Field
                                    type="text"
                                    name="last_name"
                                    placeholder="Last Name"
                                    className={`border rounded-full p-2 w-full ${formik.touched.last_name && formik.errors.last_name ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <ErrorMessage name="last_name" component="div" className="text-red-600 text-sm" />
                            </div>

                            <div>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className={`border rounded-full p-2 w-full ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                            </div>

                            <div>
                                <Field
                                    type="text"
                                    name="contact"
                                    placeholder="Phone Number"
                                    className={`border rounded-full p-2 w-full ${formik.touched.contact && formik.errors.contact ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <ErrorMessage name="contact" component="div" className="text-red-600 text-sm" />
                            </div>
                            <div>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className={`border rounded-full p-2 w-full ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
                            </div>

                            <div>
                                <button type="submit" className="bg-green-700 hover:bg-green-900 text-white font-bold rounded-full w-full py-2">
                                    Sign Up
                                </button>
                            </div>

                            <p className="text-center">Already have an account? <a href="/login" className="text-blue-700">Login</a></p>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default SignUp;
