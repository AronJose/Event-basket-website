import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Event from './Event';

function EventList({query, setQuery}) {
    const dispatch = useDispatch();
    const [eventsData, setEventsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEvents = async () => {
        try {
            let res = await dispatch.Events.getEvents(query);
            setEventsData(res);

        } catch (err) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };
    console.log(eventsData, "eventsData");
    useEffect(() => {
        fetchEvents();
    }, [query]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-col items-center space-y-4 p-2 border border-gray-100 font-serif">
            {Array.isArray(eventsData) && eventsData.length > 0 ? (
                eventsData.map((event, index) => (
                    <div
                        key={index}
                        className="w-full h-80 max-w-5xl bg-white border border-gray-200 rounded-lg shadow-md">
                        <Event event={event} />
                    </div>
                ))
            ) : (
                <div>No events available</div>
            )}
        </div>
    );
}

export default EventList;
