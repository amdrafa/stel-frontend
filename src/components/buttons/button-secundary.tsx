import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

export const SecundaryButton: React.FC<ButtonProps> = ({ text, ...rest }) => {
    return <button className='bg-transparent text-primary-600 border-primary-600 border-[1.5px] py-2 px-4 text-lg hover:bg-gray-50' {...rest}>{text}</button>;
};
