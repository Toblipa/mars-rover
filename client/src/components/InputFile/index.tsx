import React, { useEffect, useState } from "react";
import { sendInstructions } from "../../services/roverService";

function InputFile() {
  const [name, setName] = useState<string>();
  const [textValue, setTextValue] = useState<string>();
  const [result, setResult] = useState<string[]>();

  useEffect(() => {
    if(textValue){
        sendInstructions(textValue).then(response => {
            if(response){
                setResult(response.result);
            }
            else {
                setResult(["An error occurred"]);
            }
    });
    }
  }, [textValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (!files || files?.length === 0) return;
    const file = files[0];
    setName(file.name);

    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setTextValue(typeof reader.result === "string" ? reader.result : undefined);
    });
    
    reader.readAsText(file, 'UTF-8');
  };

  return (
    <React.Fragment>
      <input type="file" accept='.txt' onChange={handleChange} />
      <br />
      <div>File: {name}</div>
      <br />
      <div>Result:</div>
      {result && result.map(item => {
          return <div>{item}</div>;
        })}
    </React.Fragment>
  );
}

export default InputFile;
  