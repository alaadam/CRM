import React from 'react';

const Badge = (props) => {

    return (
        <span>
            <span>{props.badge.title} </span>
            <span>{props.badge.value} </span>
            <span>{props.badge.icon} </span>
        </span>
    );
};

export default Badge;