import React, { useState, useEffect, useContext, useRef, useCallback } from "react";
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import "./App.css";
function SelectInput({ fullWidth = null,
    disabled = false,
    customClassName = "",
    name = "", label = "",
    required = false,
    autoFocus = false,
    children = null,
    removeError = () => null,
    handleSelectValueChange = () => null,
    value=null,
    
}) {
    return (
        <FormControl className={(fullWidth ? "input-container select-container flexJustifyCenter input-container-full-width " : "input-container select-container flexJustifyCenter ") + (disabled ? " select-disabled-container " : " ") + (customClassName || "")} >
            <InputLabel id={name}>{label + (required ? " *" : "")}</InputLabel>
            <Select
                margin="dense"
                autoFocus={autoFocus}
                labelId={name}
                value={value}
                onFocus={() => removeError(name)}
                onChange={(event) => handleSelectValueChange(event)}
                disabled={disabled}
            >
                {children}
            </Select>
            {/* <FormHelperText>{name + "Error" ? name + "ErrorText" : ""}</FormHelperText> */}
        </FormControl>
    );
}

export default SelectInput;