import React from 'react';
import JSONTree from 'react-json-tree'

const Output = ({json}) => {
    return (
        <div className="output">
            <h2>JSON Tree</h2>
            <JSONTree data={json} />
        </div>
    );
}

Output.defaultProps = {
    json: {}
};

export default Output;