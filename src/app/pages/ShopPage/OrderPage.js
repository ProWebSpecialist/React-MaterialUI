import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./__mockup__/shopMockup";
import { Link } from "react-router-dom";
import {
    TextField
  } from "@material-ui/core";
import CKEditor from "react-ckeditor-component";

export function OrderPage() {
    const [name, setName] = useState("");
    const [budget, setBudget] = useState("");
    const [deadline, setDeadline] = useState("");
    const [description, setDescription] = useState("");

    let { id } = useParams();
    let item = items.filter(c => c.id == id && c.category == "services");
    item = item[0];

    const handleChange2 = name => event => {
        if(name == "name") setName(event.target.value);
        if(name == "budget") setBudget(event.target.value);
        if(name == "deadline") setDeadline(event.target.value);
    };

    const onChange = evt => {
        console.log("onChange fired with event info: ", evt);
        var description = evt.editor.getData();
        setDescription(description);
    }
      
    const onBlur = evt => {
        console.log("onBlur event called with event info: ", evt);
    }
      
    const afterPaste = evt => {
        console.log("afterPaste event called with event info: ", evt);
    }

    return <div className="order-container pb-4"> 
        <div className="title">
            <h1 className="text-dark py-8">{item.itemName}</h1>
        </div>
        <div className="card px-12 py-6">
            <TextField
                id="outlined-name"
                label="Project Name"
                className={"mb-4"}
                value={name}
                onChange={handleChange2("name")}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-name"
                label="Budget"
                className={"mb-4"}
                value={budget}
                onChange={handleChange2("budget")}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="date"
                label="Deadline"
                type="date"
                value={deadline}
                className={"mt-4"}
                onChange={handleChange2("deadline")}
                InputLabelProps={{
                  shrink: true
                }}
            />
            <div className="mt-8">
                <CKEditor 
                    activeClass="p10" 
                    content={description} 
                    events={{
                    "blur": onBlur,
                    "afterPaste": afterPaste,
                    "change": onChange
                    }}
                />
            </div>
        </div>
        <div className={"order-btn text-right mt-6"}>
            <Link to={"/#"}>
                <button
                    type="button"
                    className="btn btn-transparent-white font-weight-bold px-12 py-4"
                >
                    Submit Order
                </button>
            </Link>
        </div>
    </div>
}