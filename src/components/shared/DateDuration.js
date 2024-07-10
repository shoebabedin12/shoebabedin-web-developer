import React, { useState, useEffect } from 'react';

const DateDuration = ({ startDate }) => {
    const [duration, setDuration] = useState({
        years: 0,
        months: 0,
        days: 0
    });

    useEffect(() => {
        const calculateDuration = () => {
            const today = new Date();
            const start = new Date(startDate);

            let years = today.getFullYear() - start.getFullYear();
            let months = today.getMonth() - start.getMonth();
            let days = today.getDate() - start.getDate();

            // Adjust for negative months and days
            if (days < 0) {
                months -= 1;
                const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                days += lastMonth.getDate();
            }

            if (months < 0) {
                years -= 1;
                months += 12;
            }

            setDuration({ years, months, days });
        };

        calculateDuration();
    }, [startDate]);

    return (
        <p className='date-format'>
            <span>Years: {duration.years} Y</span>
            <span>Months: {duration.months} M</span>
            <span>Days: {duration.days} D</span>
        </p>
    );
};

export default DateDuration;
