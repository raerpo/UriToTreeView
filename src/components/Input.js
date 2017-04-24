import React from "react";
import InvalidDataMessage from "./InvalidDataMessage";

const Input = ({ onChangeURI, onChangeJSON, contentURI, contentJSON }) => {
    return (
        <div className="input">
            <div className="uriInput">
                <h2>URI Value</h2>
                <textarea
                    className="contentArea"
                    onChange={onChangeURI}
                    value={contentURI ? contentURI : <InvalidDataMessage />}
                />
            </div>
            <div className="jsonInput">
                <h2>JSON Value</h2>
                <textarea
                    className="contentArea"
                    onChange={onChangeJSON}
                    value={contentJSON ? contentJSON : <InvalidDataMessage />}
                />
            </div>
        </div>
    );
};

export default Input;
