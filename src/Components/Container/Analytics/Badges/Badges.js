import React from 'react';
import Badge from './Badge';

const Badges = (props) => {
    return (
        <span>
            {props.listBadges.map((badge,key) => <Badge key={key}  badge={badge} />)}
        </span>
    );
};

export default Badges;