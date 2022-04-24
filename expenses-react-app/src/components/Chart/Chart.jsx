import React from 'react';
import './Char.css';

import ChartBar from './ChartBar';

const Chart = props => {
    <div className="chart">
        {props.data.map(item => (
            <ChartBar
                key={item.label}
                value={item.value}
                maxValue={null}
                label={item.label}
            />
        ))}
    </div>
};

export default Chart;