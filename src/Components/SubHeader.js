import { input } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';


function SubHeader() {
    const dispatch = useDispatch();
    const [categoryList, setCategoryList] = useState([]);
    const [service, setServices] = useState([]);


    const fetchApiData = async (values) => {
        const categories = await dispatch.Common.categories(values);
        setCategoryList(categories);
        const services = await dispatch.Common.services(values);
        console.log(services, "services")
        setServices(services);
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
            backgroundColor: 'transparent',
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
            textAlign: 'left'


        }),
        container: (provided) => ({
            ...provided,
            color: 'white',
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
        <div className="bg-gray-800 h-[60px] grid grid-cols-3 font-serif">
            <div className="flex justify-center items-center">
                <input
                    className="bg-white rounded-lg md:h-[40px] border-2 border-green-900 md:w-[400px] text-lg md:pl-5"
                    placeholder="Enter a search events"
                />
            </div>
            <div></div>
            <div className="w-[600px] flex justify-self-center items-center gap-4">
                <div className="relative">
                    <Select
                        styles={customStyles}
                        placeholder="Select categories"
                        options={categoryOptions} >
                    </Select>
                </div>
                <div className="relative">
                    <Select
                        styles={customStyles}
                        placeholder="Select Services"
                        options={serviceOptions} >
                    </Select>

                </div>
            </div>
        </div>
    );
}

export default SubHeader;
