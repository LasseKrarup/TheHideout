import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../atoms/Paragraph';


const PriceExample = ({title, children, price}) => (
    <div className="pb-4">
        <h4 className="uppercase tracking-wider text-lg">{title}</h4>
        {!!children && <Paragraph>
          {children}
        </Paragraph>}
        <Paragraph>
          Price example: <strong>{price}</strong>
        </Paragraph>
    </div>
)
PriceExample.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default PriceExample