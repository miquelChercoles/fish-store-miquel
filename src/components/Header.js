import React from 'react';
import PropTypes from 'prop-types';
const Header = (props) => {
    return (
        <header className="top">
            <h1>Fish Store</h1>
            <h3 className="tagline">
                <span>{props.tagline}</span>
                <span>{props.age}</span>
            </h3>
        </header>
    );
};
Header.propTypes = {
    tagline: PropTypes.string.isRequired
};
export default Header;