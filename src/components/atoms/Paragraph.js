import React from 'react';

const Paragraph = ({children, className}) => (
    <p className={`py-2 text-white tracking-wide ${className}`}>
      {children}
    </p>
)

export default Paragraph