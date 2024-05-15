import React from "react";
import InputFile from "../InputFile";

const HelloWorld: React.FC = () => {
    return (
        <>
            <h1>Mars Rover Instructions</h1>

            <hr />

            <p>Upload mars rovers instructions, please</p>
            <div><InputFile/></div>
        </>
    );
}

export default HelloWorld;
