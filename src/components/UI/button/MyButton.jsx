import React from 'react';
import cl from './MyModal.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <div {...props} className={cl.myBtn}>
            {children}
        </div>
    );
};

export default MyButton;