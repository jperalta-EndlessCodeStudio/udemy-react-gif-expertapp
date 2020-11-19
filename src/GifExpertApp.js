import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = props => {
    const [categories, setCategories] = useState(['Funny cat']);

    return (
        <>
            <h2 className="animate__bounceInUp">GifExpertApp</h2>
            <AddCategory setCategory={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>
        </>
    );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;