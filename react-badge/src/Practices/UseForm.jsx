import React, { useState } from "react"

 export const UseForm =(initialvalue)=>{
    const [value,setValue]=useState(initialvalue);

    return [
        value,
        (event)=>{
            setValue({
                ...value,
                [event.target.name]:event.target.value,
            });
        },
    ];

};