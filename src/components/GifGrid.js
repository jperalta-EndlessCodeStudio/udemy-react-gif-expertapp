import React from 'react';
import PropTypes from 'prop-types';
import {useFetchGifs} from "../hooks/useFetchGifs";
import GridItem from "./GifGridItem";
const GifGrid = ({category}) => {

    const {data:gifs,loading} = useFetchGifs(category);

    return (
        <div>
            <h3 className='animate__flash animate__bounceInUp'>{category}</h3>
            {loading && <p>Loading...</p>}
            <ol className={'cards-grid'}>
                {
                    gifs.map(gif =>
                        <GridItem
                            key={gif.id}
                            {...gif}
                        />
                    )
                }
            </ol>
        </div>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
};

export default GifGrid;
