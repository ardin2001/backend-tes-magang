"use client";
import CountUp from 'react-countup';
import { useState } from 'react';

export default function CardMarket({ front, value, unit,caption }: any) {
    const [hasEnded, setHasEnded] = useState(false);
    return (
        <div className="card text-center">
            <h2 className="text-7xl font-semibold mb-1.5 mx-auto">{front}<CountUp enableScrollSpy={!hasEnded} end={value} />{unit}</h2>
            <h4 className="font-bold">{caption}</h4>
        </div>
    );
}