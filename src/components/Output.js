import React from "react";
import JSONTree from "react-json-tree";
import InvalidDataMessage from "./InvalidDataMessage";

const Output = ({ json }) => {

    const validateJSON = json => {
        try {
            JSON.parse(json);
            return true;
        } catch (error) {
            return null;
        }
    };

    return (
        <div className="output">
            <h2>JSON View Tree</h2>
            {
                validateJSON(json)
                    ? <JSONTree data={JSON.parse(json)} />
                    : <InvalidDataMessage />
            }
        </div>
    );
};

Output.defaultProps = {
    json: {}
};

export default Output;
