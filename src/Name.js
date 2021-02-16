import React,{useState} from 'react';


function Name(){
    const [name, setName]=useState('');
    return(
        <div>
            <label className="header-name">
            <input
            value={name}
            placeholder="your Name"
            onChange={handleChange}
            onClick={handleClick}
            />
            </label>
        </div>
    )
    function handleChange(event){
        setName(event.target.value);
    }
    function handleClick(event){
        const range=event.target.value.length;
        event.target.setSelectionRange(0,range);
    }
}

export default Name;