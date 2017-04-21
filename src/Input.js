import React from 'react';

const Input = ({onChange, initialData}) => {
    return (
        <div className="input">
            <h2>URI Value</h2>
            <textarea onChange={onChange}>
                {initialData}
            </textarea>
        </div>
    );
}

export default Input;