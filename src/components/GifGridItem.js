import React from 'react';
import PropTypes from 'prop-types';

const GridItem = ({id, title, content}) => {
    return (
        <li id={id} className='card animate__fadeIn animate__backInDown'>
            <img src={content} title={title} alt={title} className='animate__fadeIn'/>
            <h3>{title}</h3>
        </li>
    );
};

GridItem.propTypes = {};

export default GridItem;
