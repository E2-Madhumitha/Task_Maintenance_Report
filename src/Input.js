import React, { useState, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';


function CustomInput({ fullWidth = null,
	disabled = false,
	customClassName = "",
	name = 0,
	label = "",
	required = false,
	autoCapitalize = false,
	rows = 1,
	inputLabelProps = "",
	maxLength = "",
	style = 0,
	min = 0,
	max = 0,
	showPassword = false,
	type = "text",
	autoFocus = false,
	children = null,
	removeError = () => null,
	handleSelectValueChange = () => null,
	resetInvalidInputError = () => null,
	value = null,
	showError = false,
	errorMessage = "",
}) {
	return (
		<div className={"input-container flexJustifyCenter " + (fullWidth ? "input-container-full-width " : " ") + (customClassName || "")} >
			<TextField
				label={label + (required ? " *" : "")}
				margin="dense"
				id={name}
				type={showPassword ? "text" : type}
				helperText={showError ? errorMessage : ""}
				error={showError}
				value={value}
				onBlur={(event) => resetInvalidInputError(event)}
				// onFocus={() => removeError(name)}
				onKeyUp={(event) => removeError(event)}
				onChange={(event) => handleSelectValueChange(event)}
				// onKeyUp={(event) => capitalizeFirstLetter(name, autoCapitalize,  event,)}
				autoComplete="off"
				multiline={rows && rows > 1}
				rows={rows || 1}
				disabled={disabled || false}
				InputLabelProps={inputLabelProps || null}
				maxLength={maxLength}
				style={style}
				// max={max}
				//  onInput = {(e) =>{
				//  	e.target.value = Math.max(0, parseInt(maxLength) ).toString().slice(0,12)
				//  }}
				InputProps={{
					endAdornment: (type == "password" ? <InputAdornment>
						<IconButton
							aria-label="toggle password visibility"
						
						>
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
						: ""),
					onInput: (type == 'number' ? (e) => {
						e.target.value = (e.target.value).toString().slice(0, maxLength)
					} : null),
					inputProps: {
						max: max || null,
						min: min || null,
						maxLength: maxLength || null,
					},
					max: max
				}}
			/>
		</div>
	);
}

export default CustomInput;