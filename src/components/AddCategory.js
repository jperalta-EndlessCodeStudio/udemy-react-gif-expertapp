import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = props => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            props.setCategory(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button type="submit">Agregar al listado&emsp;+</button>
            <br/>
            <strong hidden={(inputValue.length > 2)} className="text-danger">Ingresar al menos dos letras para cargar al listado</strong>
        </form>
    );
};

AddCategory.propTypes = {
    setCategory:PropTypes.func.isRequired,
};

export default AddCategory;
