import React from 'react';
import cl from './MyModal.module.css'
const MyModal = ({visible, setVisible, children}) => {
    const rootClasses = [cl.myModal]

    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClasses.join(' ')}>
            <div onClick={e => e.stopPropagation()} className={cl.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;