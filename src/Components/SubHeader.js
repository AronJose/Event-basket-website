// import { input } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';


function SubHeader({ query, setQuery }) {
    const dispatch = useDispatch();
    const [categoryList, setCategoryList] = useState([]);
    const [service, setServices] = useState([]);


    const fetchApiData = async (values) => {
        const categories = await dispatch.Common.categories(values);
        setCategoryList(categories);
        const services = await dispatch.Common.services(values);
        setServices(services);
    };

    const search = async (search) => {
        setQuery({ ...query, search })
    };

    const sortCategory = async (category) => {
        setQuery({ ...query, category })
    };

    const sortService = async (service) => {
        setQuery({ ...query, service });
    };

    useEffect(() => {
        fetchApiData();
    }, []);

    const serviceOptions = service.map((serviceList) => ({
        value: serviceList.services,
        label: serviceList.services,
    }));

    const categoryOptions = categoryList.map((category) => ({
        value: category.category_name,
        label: category.category_name,
    }));

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            padding: 10,
            color: state.isSelected ? 'green' : 'black',
            backgroundColor: state.isSelected ? 'green' : 'white',
            // backgroundColor: 'transparent',
            textAlign: 'left',
        }),
        control: (provided, state) => ({
            ...provided,
            width: '180px',
            height: '40px',
            border: '2px solid green',
            borderRadius: '10px',
            boxShadow: state.isFocused ? '0 0 0 3px rgba(34,139,34, 0.3)' : 'none',
            '&:hover': {
                borderColor: 'darkgreen',
            },
            backgroundColor: 'transparent',
            color: 'white',
            textAlign: 'left',


        }),
        container: (provided) => ({
            ...provided,
            color: 'white',
            zIndex: '1',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'white',
        }),
    };
    return (
        <div className="bg-gray-800 h-[60px] grid grid-cols-2 font-serif">
            <div className="flex justify-center items-center">
                <input
                    className="bg-white rounded-lg md:h-[40px] border-2 border-green-900 md:w-[500px] text-lg md:pl-5"
                    placeholder="Enter a search events"
                    onChange={(e) => search(e.target.value)}
                />
            </div>
            <div className="w-[500px] flex justify-self-center items-center gap-4">
                <div className="relative">
                    <Select
                        styles={customStyles}
                        placeholder="Select categories"
                        options={categoryOptions}
                        onChange={(e) => sortCategory(e.value)}
                    />

                </div>
                <div className="relative">
                    <Select
                        styles={customStyles}
                        placeholder="Select Services"
                        options={serviceOptions}
                        onChange={(e) => sortService(e.value)}
                    />

                </div>
            </div>
        </div>
    );
}

export default SubHeader;
