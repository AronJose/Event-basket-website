import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

function AddEvents() {
    const dispatch = useDispatch();
    const [providerData, setProviderData] = useState([]);
    const [providingData, setProvidingData] = useState([]);
    const [servicesData, setServicesData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [submitValue, setSubmitValue] = useState({});
    const [images, setImages] = useState([]);
    console.log("Form Values:", submitValue);

    const phoneRegExp = /^[0-9]{10}$/;

    const fetchApis = async () => {
        const fetchSubEventData = await dispatch.Events.subEventData();
        setProviderData(fetchSubEventData.providersData || []);
        setProvidingData(fetchSubEventData.providingDatas || []);
        setServicesData(fetchSubEventData.services || []);
        setCategoryData(fetchSubEventData.categoryList || []);
    };

    const categoryOptions = categoryData.map((category) => ({
        value: category.category_name,
        label: category.category_name,
    }));

    const servicesOptions = servicesData.map((services) => ({
        value: services.services,
        label: services.services,
    }));

    const providingOptions = providingData.map((providing) => ({
        value: providing.providing,
        label: providing.providing,
    }));

    const initialValues = {
        Event_name: '',
        place: '',
        desc: '',
        address: '',
        category: [],
        services: [],
        image: [],
        providing: [],
        providers: '',
        email: '',
        contact: ''
    };

    const validationSchema = Yup.object().shape({
        providers: Yup.string().required('Required'),
        Event_name: Yup.string()
            .max(50, 'Must be 50 characters or less')
            .required('Required'),
        place: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        desc: Yup.string()
            .max(300, 'Must be 200 characters or less')
            .required('Required'),
        address: Yup.string()
            .max(200, 'Must be 200 characters or less')
            .required('Required'),
        email: Yup.string().email('Email is Invalid').required('Required'),
        contact: Yup.string()
            .required('Required')
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, 'Too short')
            .max(10, 'Too long'),
        category: Yup.array().of(Yup.string()),
        services: Yup.array().of(Yup.string()),
        providing: Yup.array().of(Yup.string()),
        image: Yup.array(),
    });
    useEffect(() => {
        fetchApis()
    }, []);

    const customStyles = {
        option: (provided) => ({
            ...provided,
            padding: 10,
            textAlign: 'left',
            color: 'black',
            overflowY: 'auto',
        }),
        control: (provided) => ({
            ...provided,
            height: '100px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            textAlign: 'left',
            color: 'gray',
            overflowY: 'auto',
        }),
        container: (provided) => ({
            ...provided,
            color: 'white',
            overflowY: 'auto',
        }),

        placeholder: (provided) => ({
            ...provided,
            color: 'gray',
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 9999,
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: '150px',
            overflowY: 'auto',
        }),
    };

    const handleSelectValues = (value, field, setFieldValue) => {
        setFieldValue(field, value.map(option => option.value));
    };

    const handleImageChange = async (event, setFieldValue) => {
        const files = Array.from(event.target.files);
        const multipleImage = await dispatch.Events.imageUpload(files)
        const filePath = multipleImage.filepaths;
        setImages(files);
        setFieldValue('image', multipleImage.filepaths);
    };

    const handleEvnetCreation = async(events)=>{
await dispatch.Events.eventCreation(events);
    };

    return (
        <div className=' min-h-screen flex items-center justify-center mb-3' >
            <div className="w-[900px] font-serif">
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting }) => {
                        try {
                            await handleEvnetCreation(values); 
                            setSubmitting(false); 
                        } catch (error) {
                            console.error('Submission error:', error);
                            setSubmitting(false); 
                        }
                    }}>
                    {formik => (

                        <Form className="w-full bg-white border-5 border-gray-900 rounded-lg shadow-2xl shadow-gray-900 p-6 md:p-8 space-y-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900">Create an Event</h2>
                                <p className="text-gray-500 text-center text-sm ">Let's Introduce your Events</p>
                            </div>
                            <div className="flex items-center justify-evenly space-x-6">
                                {providerData.map((provider, index) => (
                                    <label key={index} className="flex items-center">
                                        <Field
                                            type="radio"
                                            name="providers"
                                            value={provider.providers}
                                            className="mr-2"
                                        />
                                        <span>{provider.providers}</span>
                                    </label>
                                ))}

                            </div>
                            <ErrorMessage name="providers" component="div" className="text-red-600 text-sm" />

                            <div>
                                <Field
                                    type="text"
                                    name="Event_name"
                                    placeholder="Enter the Name"
                                    className={`border rounded-lg p-2 w-full ${formik.touched.Event_name && formik.errors.Event_name ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <ErrorMessage name="Event_name" component="div" className="text-red-600 text-sm" />
                            </div>

                            <div>
                                <Field
                                    type="text"
                                    name="place"
                                    placeholder="Place"
                                    className={`border rounded-lg p-2 w-full ${formik.touched.place && formik.errors.place ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <ErrorMessage name="place" component="div" className="text-red-600 text-sm" />
                            </div>

                            <div>
                                <Field
                                    as="textarea"
                                    name="desc"
                                    placeholder="Description"
                                    className={`border rounded-lg p-2 w-full ${formik.touched.desc && formik.errors.desc ? 'border-red-500' : 'border-gray-300'}`}
                                    rows={5} />
                                <ErrorMessage name="desc" component="div" className="text-red-600 text-sm" />
                            </div>

                            <div>
                                <Field
                                    as="textarea"
                                    name="address"
                                    placeholder="Address"
                                    className={`border rounded-lg p-2 w-full ${formik.touched.address && formik.errors.address ? 'border-red-500' : 'border-gray-300'}`}
                                    rows={4}
                                />
                                <ErrorMessage name="address" component="div" className="text-red-600 text-sm" />
                            </div>

                            <div>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className={`border rounded-lg p-2 w-full ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                            </div>

                            <div>
                                <Field
                                    type="text"
                                    name="contact"
                                    placeholder="Phone Number"
                                    className={`border rounded-lg p-2 w-full ${formik.touched.contact && formik.errors.contact ? 'border-red-500' : 'border-gray-300'}`}
                                />
                                <ErrorMessage name="contact" component="div" className="text-red-600 text-sm" />
                            </div>

                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <Select
                                        isMulti
                                        name="category"
                                        options={categoryOptions}
                                        styles={customStyles}
                                        placeholder="Select Categories"
                                        onChange={(value) => handleSelectValues(value, "category", formik.setFieldValue)}
                                    />
                                </div>
                                <div>
                                    <Select
                                        isMulti
                                        name="providing"
                                        options={providingOptions}
                                        styles={customStyles}
                                        placeholder="Select Providing Items"
                                        onChange={(value) => handleSelectValues(value, "providing", formik.setFieldValue)}
                                    />
                                </div>
                            </div>
                            <div>
                                <Select
                                    isMulti
                                    name="services"
                                    options={servicesOptions}
                                    styles={customStyles}
                                    placeholder="Select Services"
                                    onChange={(value) => handleSelectValues(value, "services", formik.setFieldValue)}
                                />
                            </div>

                            <div className='grid grid-row-2  border-2 rounded-lg h-[200px] p-2'>
                                <div>
                                    <input
                                        type="file"
                                        name="image"
                                        multiple
                                        onChange={(event) => handleImageChange(event, formik.setFieldValue)}
                                        className={`border rounded-lg p-2 w-full mb-4 ${formik.touched.image && formik.errors.image ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    <ErrorMessage name="image" component="div" className="text-red-600 text-sm" />
                                </div>
                                {images.length > 0 && (
                                    <div className="flex flex-wrap gap-1 pl-2">
                                        {images.map((file, index) => (
                                            <img
                                                key={index}
                                                src={URL.createObjectURL(file)}
                                                alt={`Preview ${index}`}
                                                className="w-24 h-24 object-cover border border-gray-300 rounded"
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className='flex items-center justify-center '>
                                <button type="button" className=" mx-5 bg-red-700 hover:bg-gray-900 text-white font-bold rounded-full w-[200px] py-2">
                                    Cancel
                                </button>
                                <button type="submit" className="bg-blue-700 hover:bg-green-900 text-white font-bold rounded-full w-[200px] py-2">
                                    Save
                                </button>
                            </div>


                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default AddEvents;
