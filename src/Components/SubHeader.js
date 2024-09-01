import React from 'react';

function SubHeader() {
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
                    <select
                        className="bg-gray-800 rounded-xl md:h-[40px] md:w-[160px] text-lg md:pl-2 font-bold text-white border-2 border-green-900 appearance-none"
                    >
                        <option value="">Select Category</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                        <option value="category3">Category 3</option>
                        {/* Add more categories as needed */}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        ▼
                    </div>
                </div>
                <div className="relative">
                    <select
                        className="bg-gray-800 border-2 border-green-900 text-white rounded-xl md:h-[40px] md:w-[150px] text-lg md:pl-2 font-bold appearance-none"
                    >
                        <option value="">Select Services</option>
                        <option value="service1">Service 1</option>
                        <option value="service2">Service 2</option>
                        <option value="service3">Service 3</option>
                        {/* Add more services as needed */}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                        ▼
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;
