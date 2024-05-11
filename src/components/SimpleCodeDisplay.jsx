import React from 'react';
import './SimpleCodeDisplay.css'; // Assuming you create a CSS file for styling

function SimpleCodeDisplay({ children, type }) {
    // Determine the className based on the type prop
    const className = type === 'response' ? 'simple-response-display' : 'simple-code-display';

    return <pre className={className}>{children}</pre>;
}

export default SimpleCodeDisplay;
