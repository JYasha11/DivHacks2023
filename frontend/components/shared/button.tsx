import React from 'react';

interface ButtonProps {
    text: string;
    variant?: 'regular' | 'fancy' | 'see-through';
}

const Button: React.FC<ButtonProps> = ({ text, variant = 'regular' }) => {
    let className = 'text-white text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none';

    if (variant === 'regular') {
        className += ' bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg';
    } else if (variant === 'fancy') {
        className += ' text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2';
    } else if (variant === 'see-through') {
        className += ' bg-transparent hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium';
    }

    return (
        <button type="button" className={className}>
            {text}
        </button>
    );
};

export default Button;
