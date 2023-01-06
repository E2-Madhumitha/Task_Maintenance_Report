import {
    AppBar,
    Fab,
    Paper,
    Button,
    MenuItem,
    Modal,
    FormControlLabel,
    Radio,
    RadioGroup,
    Tabs,
    Tab,
    TextField,
    Dialog,
    IconButton,
    CircularProgress,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { useState, useEffect } from "react";
import "./App.css";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Select from "./Select";
import Input from "./Input";
function Report() {
    const [showmaintenanceForm, setShowmaintenanceForm] = useState(false);
    const [displayPage, setDisplayPage] = useState(0);
    const [reportType, setReportType] = useState(1);
    const [selectedCustomerId, setSelectedCustomerId] = useState(0);
    const [status, setStatus] = useState(0);
    const [status3, setStatus3] = useState(0);
    const [status4, setStatus4] = useState(0);
    const [status5, setStatus5] = useState(0);
    const [inputvalue, setinputvalue] = useState("");
    const [inputvalue1, setinputvalue1] = useState("");
    const [inputvalue2, setinputvalue2] = useState("");
    const [inputvalue3, setinputvalue3] = useState("");
    const [inputvalue4, setinputvalue4] = useState("");
    const [inputvalue5, setinputvalue5] = useState("");
    const [inputvalue6, setinputvalue6] = useState("");
    const [inputvalue7, setinputvalue7] = useState("");
    const [inputvalue8, setinputvalue8] = useState("");
    const [inputvalue9, setinputvalue9] = useState("");
    const [inputvalue10, setinputvalue10] = useState("");
    const [inputvalue11, setinputvalue11] = useState("");
    const [inputvalue12, setinputvalue12] = useState("");
    const [inputvalue13, setinputvalue13] = useState("");
    const [inputvalue14, setinputvalue14] = useState("");
    const [inputvalue15, setinputvalue15] = useState("");
    const [inputvalue16, setinputvalue16] = useState("");
    const [inputvalue17, setinputvalue17] = useState("");
    const [inputvalue18, setinputvalue18] = useState("");
    const [inputvalue19, setinputvalue19] = useState("");
    const [inputvalue20, setinputvalue20] = useState("");
    const [inputvalue21, setinputvalue21] = useState("");
    const [inputvalue22, setinputvalue22] = useState("");
    const [inputvalue23, setinputvalue23] = useState("");
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValue1, setSelectedValue1] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");
    const [selectedValue3, setSelectedValue3] = useState("");
    const [selectedValue4, setSelectedValue4] = useState("");
    const [showInvalidInputError_12, setShowInvalidInputError_12] = useState(false);
    const [showError_12, setShowError_12] = useState(false);
    const [error, seterror] = useState({});
    const [errorMsgFields, setErrorMsgFields] = useState({
		"mandatoryErrorMsg": "This field is required",
		"invalidIntegerInput": "Only numbers are allowed",
		"invalidDecimalInput": "Only numbers are allowed",
		"invalidPhoneInput": "Enter valid phone number",
		"invalidLocationInput": "Only numbers are allowed",
		"maxImageCountExceeded": "Only up to 4 images are allowed",
		"invalidImageInput": "Upload file(s) in JPG, PNG, JPEG, GIF, AVIF, WEBP formats",
	})
    const openAddReport = async () => {
        try {
            setShowmaintenanceForm(true);
        } catch (err) {}
    };
    useEffect(async () => {
		try {
            let errorMessageFields = errorMsgFields;
			setErrorMsgFields({ ...errorMessageFields });
			
		} catch (err) {

		}
	}, []);
    const handleChangeDisplayPage = async (event, value) => {
        try {
            event.preventDefault();
            setDisplayPage(value);
        } catch (err) {}
    };
    const validatePhoneNumber = async (value) => {
		try {
			let regex = /^[\+]?[\+[0-9]{0,5}]?[. -]?[({]?[0-9]{0,10}[)}]?[-\s\.{}]?[({]?[0-9]{0,10}[})]?[-\s\.{}]?[({]?[0-9]{4,15}?[})]?[-. ]?[0-9]{0,20}$/
			return regex.test(value);
		} catch (err) {

		}
	}
    const handlechange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handlechange1 = (event) => {
        setSelectedValue1(event.target.value);
    };
    const handlechange2 = (event) => {
        setSelectedValue2(event.target.value);
    };
    const handlechange3 = (event) => {
        setSelectedValue3(event.target.value);
    };
    const handlechange4 = (event) => {
        setSelectedValue4(event.target.value);
    };
    const handleChangeDisplayvalue = (event) => {
        try {
            event.preventDefault();
            const name = event.target.name;
            const value = event.target.value;
            setinputvalue(value);
            if (name == "community_name" && !value) {
                seterror({ ...error, name: "Name is required" });
            }
            console.log(inputvalue);
            console.log(name);
        } catch (err) {}
    };
    const handleChangeDisplayvalue1 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue1(value);
            console.log(inputvalue1);
        } catch (err) {}
    };
    const handleChangeDisplayvalue2 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue2(value);
            console.log(inputvalue2);
        } catch (err) {}
    };
    const handleChangeDisplayvalue3 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue3(value);
            console.log(inputvalue3);
        } catch (err) {}
    };
    const handleChangeDisplayvalue4 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue4(value);
            console.log(inputvalue4);
        } catch (err) {}
    };
    const handleChangeDisplayvalue5 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue5(value);
            console.log(inputvalue5);
        } catch (err) {}
    };
    const handleChangeDisplayvalue6 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue6(value);
            console.log(inputvalue6);
        } catch (err) {}
    };
    const handleChangeDisplayvalue7 = async (question_id,event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue7(value);
            if (question_id == 12) {
                if(validatePhoneNumber(value)){
                    if (question_id == 12) {
						setShowInvalidInputError_12(true);
					}
                } else {
                    setShowInvalidInputError_12(false);
                }
            }
            if (question_id == 12) {
                if (value && value != "") {
                    setShowError_12(false);
                } else {
                    setShowError_12(true);
                }
            }
            console.log(inputvalue7);
        } catch (err) {}
    };
    const handleChangeDisplayvalue8 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue8(value);
            console.log(inputvalue8);
        } catch (err) {}
    };
    const handleChangeDisplayvalue9 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue9(value);
            console.log(inputvalue9);
        } catch (err) {}
    };
    const handleChangeDisplayvalue10 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue10(value);
            console.log(inputvalue10);
        } catch (err) {}
    };
    const handleChangeDisplayvalue11 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue11(value);
            console.log(inputvalue11);
        } catch (err) {}
    };
    const handleChangeDisplayvalue12 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue12(value);
            console.log(inputvalue12);
        } catch (err) {}
    };
    const handleChangeDisplayvalue13 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue13(value);
            console.log(inputvalue13);
        } catch (err) {}
    };
    const handleChangeDisplayvalue14 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue14(value);
            console.log(inputvalue14);
        } catch (err) {}
    };
    const handleChangeDisplayvalue15 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue15(value);
            console.log(inputvalue15);
        } catch (err) {}
    };
    const handleChangeDisplayvalue16 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue16(value);
            console.log(inputvalue16);
        } catch (err) {}
    };
    const handleChangeDisplayvalue17 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue17(value);
            console.log(inputvalue17);
        } catch (err) {}
    };
    const handleChangeDisplayvalue18 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue18(value);
            console.log(inputvalue18);
        } catch (err) {}
    };
    const handleChangeDisplayvalue19 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue19(value);
            console.log(inputvalue19);
        } catch (err) {}
    };
    const handleChangeDisplayvalue20 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue20(value);
            console.log(inputvalue20);
        } catch (err) {}
    };
    const handleChangeDisplayvalue21 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue21(value);
            console.log(inputvalue21);
        } catch (err) {}
    };
    const handleChangeDisplayvalue22 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue22(value);
            console.log(inputvalue22);
        } catch (err) {}
    };
    const handleChangeDisplayvalue23 = async (event) => {
        try {
            event.preventDefault();

            const value = event.target.value;
            setinputvalue23(value);
            console.log(inputvalue23);
        } catch (err) {}
    };
    const closeAddReport = async () => {
        try {
            setShowmaintenanceForm(false);
            setDisplayPage(0);
        } catch (err) {}
    };
    const changeReportType = async (event) => {
        try {
            let value = parseInt(event.target.value);
            setReportType(value);
        } catch (err) {}
    };
    const selectPartner = async (event) => {
        try {
            let value = event.target.value;
            setSelectedCustomerId(value);
        } catch (err) {}
    };

    const radioHandler = (status) => {
        setStatus(status);
    };
    const radioHandler3 = (status3) => {
        setStatus3(status3);
    };
    const radioHandler4 = (status4) => {
        setStatus4(status4);
    };
    const radioHandler5 = (status5) => {
        setStatus5(status5);
    };
    const saveReport = () => {
        validateMandatoryFields();
    };
    const validateMandatoryFields = () => {};
    return (
        <div className="content-body">
            <Paper className="full-height-width">
                <div className="addbut">
                    <Fab
                        size="medium"
                        title="Add New Report"
                        color="primary"
                        onClick={() => openAddReport()}
                    >
                        <AddIcon />
                    </Fab>
                </div>
            </Paper>
            <Dialog
                maxWidth="md"
                disableBackdropClick
                onClose={() => closeAddReport()}
                aria-labelledby="customized-dialog-title"
                open={showmaintenanceForm}
            >
                <div className="modal-header flexAlignCenterJustifySpaceBetween">
                    {"New Report"}
                    <IconButton
                        aria-label="close"
                        onClick={() => closeAddReport()}
                    >
                        <CloseIcon />
                    </IconButton>
                </div>
                <div className="formnav">
                    <Paper square>
                        <Tabs
                            value={displayPage}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={(e, value) =>
                                handleChangeDisplayPage(e, value)
                            }
                            aria-label="disabled tabs example"
                        >
                            <Tab label="Maintenance Notification" />
                            <Tab label="Maintenance Activity" />
                            <Tab label="Pump Inspection" />
                            <Tab label="Short Testimony #1 " />
                            <Tab label="Final Documentation " />
                        </Tabs>
                    </Paper>
                </div>

                <MuiDialogContent dividers>
                    <div className="page-content" style={{ overflow: "auto" }}>
                        <form
                            className="flexWrap"
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}
                        >
                            {displayPage == 0 ? (
                                <div
                                    className="flexWrap"
                                    style={{ overflow: "auto" }}
                                >
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Site ID
                                            </div>
                                        </div>
                                        <div className="answerDisplay">
                                            <Select
                                                name="Communitynameandcountry"
                                                customClassName="input-container-5"
                                                label="Select"
                                                handleSelectValueChange={(e) =>
                                                    selectPartner(e)
                                                }
                                                value={selectedCustomerId}
                                            >
                                                <MenuItem value="">
                                                    Select
                                                </MenuItem>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Community Name
                                            </div>
                                        </div>
                                        <div className="answerDisplay">
                                            <Input
                                                type="text"
                                                label=""
                                                name="community_name"
                                                customClassName="input-container-5"
                                                style={{ display: "block" }}
                                                value={inputvalue}
                                                errorMessage={error.name}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue(e)
                                                }
                                            />
                                        </div>
                                    </div>

                                    <p></p>

                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Country
                                            </div>
                                        </div>
                                        <div className="answerDisplay">
                                            <Input
                                                type="text"
                                                label=""
                                                customClassName="input-container-5"
                                                style={{ display: "block" }}
                                                value={inputvalue1}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue1(e)
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                District
                                            </div>
                                        </div>
                                        <div className="answerDisplay">
                                            <Input
                                                type="text"
                                                label=""
                                                customClassName="input-container-5"
                                                style={{ display: "block" }}
                                                value={inputvalue2}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue2(e)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Region
                                            </div>
                                        </div>
                                        <div className="answerDisplay">
                                            <Input
                                                type="text"
                                                label=""
                                                customClassName="input-container-5"
                                                style={{ display: "block" }}
                                                value={inputvalue3}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue3(e)
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                LifePump ID
                                            </div>
                                        </div>
                                        <div className="answerDisplay">
                                            <Input
                                                type="text"
                                                label=""
                                                customClassName="input-container-5"
                                                style={{ display: "block" }}
                                                value={inputvalue4}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue4(e)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Please describe the reported
                                                issue
                                            </div>
                                        </div>
                                        <div className="answerDisplay">
                                            <Input
                                                type="text"
                                                rows="3"
                                                label=""
                                                customClassName={
                                                    "input-container-5"
                                                }
                                                maxLength="250"
                                                style={{ display: "block" }}
                                                name="reportedissue"
                                                value={inputvalue5}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue5(e)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Please provide community contact
                                                information:
                                            </div>
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                1. Care taker/ first responder
                                            </div>
                                        </div>
                                        <div className="ca-site-contact-details">
                                            <Input
                                                key={"CONTACT_NAME1"}
                                                type="text"
                                                label="Name"
                                                name={"CONTACT_NAME1"}
                                                customClassName={"width-50"}
                                                style={{ display: "block" }}
                                                value={inputvalue6}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue6(e)
                                                }
                                            />
                                            <Input
                                                key={"PHN_NUMBER1"}
                                                type="text"
                                                label="Phone Number"
                                                name={"PHN_NUMBER1"}
                                                customClassName={"width-50"}
                                                style={{ display: "block" }}
                                                value={inputvalue7}
                                                errorMessage={showError_12 ? errorMsgFields.invalidPhoneInput : errorMsgFields.invalidPhoneInput} 
                                                showError={ showError_12|| showInvalidInputError_12}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue7(12,e)
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                2. Water Point committee member
                                            </div>
                                        </div>
                                        <div className="ca-site-contact-details">
                                            <Input
                                                key={"CONTACT_NAME1"}
                                                type="text"
                                                label="Name"
                                                name={"CONTACT_NAME1"}
                                                customClassName={"width-50"}
                                                style={{ display: "block" }}
                                                value={inputvalue8}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue8(e)
                                                }
                                            />
                                            <Input
                                                key={"PHN_NUMBER1"}
                                                type="text"
                                                label="Phone Number"
                                                name={"PHN_NUMBER1"}
                                                customClassName={"width-50"}
                                                style={{ display: "block" }}
                                                value={inputvalue9}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue9(e)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : displayPage == 1 ? (
                                <div
                                    className="flexWrap"
                                    style={{ overflow: "auto" }}
                                >
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Date performed
                                            </div>
                                        </div>
                                        <div
                                            className="answerDisplay"
                                            style={{ display: "block" }}
                                        >
                                            <Input
                                                label=""
                                                type="date"
                                                customClassName="input-container-5"
                                                style={{ display: "block" }}
                                                value={inputvalue23}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue23(
                                                        e
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Name of person performing
                                                maintenance
                                            </div>
                                        </div>
                                        <div
                                            className="answerDisplay"
                                            style={{ display: "block" }}
                                        >
                                            <Input
                                                type="text"
                                                label=""
                                                customClassName="input-container-5"
                                                style={{ display: "block" }}
                                                value={inputvalue10}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue10(
                                                        e
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Primary reason for visiting pump
                                            </div>
                                        </div>
                                        <div className="answerDisplay radio">
                                            <RadioGroup
                                                aria-label="position"
                                                name="position"
                                            >
                                                <FormControlLabel
                                                    value="c"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={
                                                        "Preventative Maintenance"
                                                    }
                                                    checked={
                                                        selectedValue == "c"
                                                    }
                                                    onChange={handlechange}
                                                />
                                                <FormControlLabel
                                                    value="b"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Repair"}
                                                    checked={
                                                        selectedValue == "b"
                                                    }
                                                    onChange={handlechange}
                                                />
                                                <FormControlLabel
                                                    value="a"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Pump Removal"}
                                                    checked={
                                                        selectedValue == "a"
                                                    }
                                                    onChange={handlechange}
                                                />
                                            </RadioGroup>
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Was issue(s) resolved?
                                            </div>
                                        </div>
                                        <div className="answerDisplay radio">
                                            <RadioGroup
                                                aria-label="position"
                                                name="position"
                                                value={reportType}
                                                onChange={(event) =>
                                                    changeReportType(event)
                                                }
                                                row
                                            >
                                                <FormControlLabel
                                                    value="e"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Yes"}
                                                    checked={
                                                        selectedValue1 == "e"
                                                    }
                                                    onChange={handlechange1}
                                                />
                                                <FormControlLabel
                                                    value="d"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"No"}
                                                    checked={
                                                        selectedValue1 == "d"
                                                    }
                                                    onChange={handlechange1}
                                                />
                                            </RadioGroup>
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Was pump functional upon leaving
                                                site?
                                            </div>
                                        </div>
                                        <div className="answerDisplay radio">
                                            <RadioGroup
                                                aria-label="position"
                                                name="position"
                                                row
                                            >
                                                <FormControlLabel
                                                    value="g"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Yes"}
                                                    checked={
                                                        selectedValue2 == "g"
                                                    }
                                                    onChange={handlechange2}
                                                />
                                                <FormControlLabel
                                                    value="f"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"No"}
                                                    checked={
                                                        selectedValue2 == "f"
                                                    }
                                                    onChange={handlechange2}
                                                />
                                            </RadioGroup>
                                        </div>
                                    </div>

                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                New LifePumpLink Installed?
                                            </div>
                                        </div>
                                        <div className="answerDisplay">
                                            <>
                                                <RadioGroup
                                                    aria-label="position"
                                                    name="position"
                                                    customClassName={"width-50"}
                                                    row
                                                >
                                                    <FormControlLabel
                                                        value={"Yes"}
                                                        control={
                                                            <Radio color="primary" />
                                                        }
                                                        label={"Yes"}
                                                        id="Yes"
                                                        checked={status === 1}
                                                        onClick={(e) =>
                                                            radioHandler(1)
                                                        }
                                                    />
                                                    <FormControlLabel
                                                        value={"No"}
                                                        control={
                                                            <Radio color="primary" />
                                                        }
                                                        label={"No"}
                                                        id="No"
                                                        checked={status === 2}
                                                        onClick={(e) =>
                                                            radioHandler(2)
                                                        }
                                                    />
                                                </RadioGroup>

                                                {status === 1 && (
                                                    <Input
                                                        type="text"
                                                        label="Serial number"
                                                        customClassName={
                                                            "width-50"
                                                        }
                                                        style={{
                                                            display: "block",
                                                        }}
                                                        value={inputvalue14}
                                                        handleSelectValueChange={(
                                                            e
                                                        ) =>
                                                            handleChangeDisplayvalue14(
                                                                e
                                                            )
                                                        }
                                                    />
                                                )}
                                            </>
                                        </div>
                                    </div>

                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                New Gearbox Assembly Number (if
                                                applicable)
                                            </div>
                                        </div>
                                        <div className="answerDisplay radio">
                                            <RadioGroup
                                                aria-label="position"
                                                name="position"
                                                row
                                            >
                                                <FormControlLabel
                                                    value="m"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"1003101"}
                                                    checked={
                                                        selectedValue3 == "m"
                                                    }
                                                    onChange={handlechange3}
                                                />
                                                <FormControlLabel
                                                    value="l"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"1003401"}
                                                    checked={
                                                        selectedValue3 == "l"
                                                    }
                                                    onChange={handlechange3}
                                                />
                                                <FormControlLabel
                                                    value="k"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"1003151"}
                                                    checked={
                                                        selectedValue3 == "k"
                                                    }
                                                    onChange={handlechange3}
                                                />
                                                <FormControlLabel
                                                    value="j"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"1003451"}
                                                    checked={
                                                        selectedValue3 == "j"
                                                    }
                                                    onChange={handlechange3}
                                                />
                                                <FormControlLabel
                                                    value="i"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"1003201"}
                                                    checked={
                                                        selectedValue3 == "i"
                                                    }
                                                    onChange={handlechange3}
                                                />
                                                <FormControlLabel
                                                    value="h"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"1003421"}
                                                    checked={
                                                        selectedValue3 == "h"
                                                    }
                                                    onChange={handlechange3}
                                                />
                                            </RadioGroup>
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                New Gearbox Date Code (if
                                                applicable)
                                            </div>
                                        </div>
                                        <div className="answerDisplay">
                                            <Input
                                                type="text"
                                                label=""
                                                customClassName="input-container-5"
                                                style={{ display: "block" }}
                                                value={inputvalue11}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue11(
                                                        e
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>

                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                New Stator Serial Number (if
                                                applicable)
                                            </div>
                                        </div>
                                        <div
                                            className="answerDisplay"
                                            style={{ display: "block" }}
                                        >
                                            <Input
                                                type="text"
                                                label=""
                                                customClassName="input-container-5"
                                                style={{ display: "block" }}
                                                value={inputvalue12}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue12(
                                                        e
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Maintenance Notes
                                                <p>
                                                    {" "}
                                                    (please indicate any
                                                    important details about the
                                                    installation)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="answerDisplay">
                                            <Input
                                                type="text"
                                                rows="6"
                                                label=""
                                                customClassName={
                                                    "input-container-5"
                                                }
                                                maxLength="600"
                                                style={{ display: "block" }}
                                                value={inputvalue13}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue13(
                                                        e
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) : displayPage == 2 ? (
                                <div
                                    className="flexWrap"
                                    style={{ overflow: "auto" }}
                                >
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Were any non-standard hardware
                                                installed on the pump?
                                            </div>
                                        </div>
                                        <div className="answerDisplay">
                                            <>
                                                <RadioGroup
                                                    aria-label="position"
                                                    name="position"
                                                    customClassName={"width-50"}
                                                    row
                                                >
                                                    <FormControlLabel
                                                        value={"Yes"}
                                                        control={
                                                            <Radio color="primary" />
                                                        }
                                                        label={"Yes"}
                                                        id="Yes"
                                                        checked={status3 === 3}
                                                        //	onChange={(event) => toggleRetrofitOption(event)}
                                                        onClick={(e) =>
                                                            radioHandler3(3)
                                                        }
                                                    />
                                                    <FormControlLabel
                                                        value={"No"}
                                                        control={
                                                            <Radio color="primary" />
                                                        }
                                                        label={"No"}
                                                        id="No"
                                                        checked={status3 === 4}
                                                        //onChange={(event) => toggleRetrofitOption(event)}
                                                        onClick={(e) =>
                                                            radioHandler3(4)
                                                        }
                                                    />
                                                </RadioGroup>

                                                {status3 === 3 && (
                                                    <Input
                                                        type="text"
                                                        label="– if so, please describe:"
                                                        customClassName={
                                                            "width-50"
                                                        }
                                                        style={{
                                                            display: "block",
                                                        }}
                                                        value={inputvalue15}
                                                        handleSelectValueChange={(
                                                            e
                                                        ) =>
                                                            handleChangeDisplayvalue15(
                                                                e
                                                            )
                                                        }
                                                    />
                                                )}
                                            </>
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Peak handle torque
                                                <p>(requires torque wrench)</p>
                                            </div>
                                        </div>
                                        <div
                                            className="answerDisplay"
                                            style={{ display: "block" }}
                                        >
                                            <Input
                                                type="text"
                                                rows="3"
                                                label=""
                                                customClassName="input-container-5"
                                                style={{ display: "block" }}
                                                value={inputvalue16}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue16(
                                                        e
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Handle rotations to fill 20 L
                                                container
                                                <p>(requires 20 L container)</p>
                                            </div>
                                        </div>
                                        <div
                                            className="answerDisplay"
                                            style={{ display: "block" }}
                                        >
                                            <Input
                                                type="text"
                                                rows="3"
                                                label=""
                                                customClassName="input-container-5"
                                                style={{ display: "block" }}
                                                value={inputvalue17}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue17(
                                                        e
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Is gearbox seal leaking?
                                                <p>
                                                    (visual assessment – take
                                                    photo)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="ca-site-contact-details">
                                            <>
                                                <RadioGroup
                                                    aria-label="position"
                                                    name="position"
                                                    customClassName={"width-50"}
                                                >
                                                    <FormControlLabel
                                                        value={"Yes"}
                                                        control={
                                                            <Radio color="primary" />
                                                        }
                                                        label={"Yes"}
                                                        id="Yes"
                                                        checked={status4 === 5}
                                                        //	onChange={(event) => toggleRetrofitOption(event)}
                                                        onClick={(e) =>
                                                            radioHandler4(5)
                                                        }
                                                    />
                                                    <FormControlLabel
                                                        value={"No"}
                                                        control={
                                                            <Radio color="primary" />
                                                        }
                                                        label={"No"}
                                                        id="No"
                                                        checked={status4 === 6}
                                                        //onChange={(event) => toggleRetrofitOption(event)}
                                                        onClick={(e) =>
                                                            radioHandler4(6)
                                                        }
                                                    />
                                                </RadioGroup>

                                                {status4 === 5 && (
                                                    <>
                                                        <label>
                                                            <Button
                                                                className="site-image-upload-button"
                                                                variant="contained"
                                                                color="primary"
                                                                component="span"
                                                            >
                                                                {"CHOOSE FILES"}
                                                            </Button>
                                                        </label>

                                                        <div className="testimonyFiles"></div>
                                                    </>
                                                )}
                                            </>
                                        </div>
                                    </div>
                                </div>
                            ) : displayPage == 3 ? (
                                <>
                                    <div
                                        className="flexWrap"
                                        style={{ overflow: "auto" }}
                                    >
                                        <div className="questionsFormat">
                                            <div className="spanDiv">
                                                <div className="questionDisplay">
                                                    Pump Maintenance Period
                                                </div>
                                            </div>
                                            <div
                                                className="ca-site-contact-details"
                                                style={{ display: "block" }}
                                            >
                                                <>
                                                    <RadioGroup
                                                        aria-label="position"
                                                        name="position"
                                                        customClassName={
                                                            "width-50"
                                                        }
                                                    >
                                                        <FormControlLabel
                                                            value={"Yes"}
                                                            control={
                                                                <Radio color="primary" />
                                                            }
                                                            label={
                                                                "Not maintained greater than a year"
                                                            }
                                                            id="Yes"
                                                            checked={
                                                                status5 === 7
                                                            }
                                                            onClick={(e) =>
                                                                radioHandler5(7)
                                                            }
                                                        />
                                                        <FormControlLabel
                                                            value={"No"}
                                                            control={
                                                                <Radio color="primary" />
                                                            }
                                                            label={
                                                                "Maintained within a year"
                                                            }
                                                            id="No"
                                                            checked={
                                                                status5 === 8
                                                            }
                                                            onClick={(e) =>
                                                                radioHandler5(8)
                                                            }
                                                        />
                                                    </RadioGroup>
                                                </>
                                            </div>
                                        </div>
                                        {status5 === 7 && (
                                            <div className="questionsFormat">
                                                <div className="spanDiv">
                                                    <div className="questionDisplay">
                                                        If pump has not been
                                                        maintenanced for more
                                                        than 1 year, ask
                                                        community member:
                                                        <p>
                                                            “How has the
                                                            LifePump benefited
                                                            your community?”
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="answerDisplay">
                                                    <Input
                                                        type="text"
                                                        rows="5"
                                                        label=""
                                                        customClassName={
                                                            "input-container-5"
                                                        }
                                                        maxLength="400"
                                                        style={{
                                                            display: "block",
                                                        }}
                                                        value={inputvalue18}
                                                        handleSelectValueChange={(
                                                            e
                                                        ) =>
                                                            handleChangeDisplayvalue18(
                                                                e
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        {status5 === 8 && (
                                            <div className="questionsFormat">
                                                <div className="spanDiv">
                                                    <div className="questionDisplay">
                                                        If pump has been
                                                        maintenanced within the
                                                        last 1 year, ask
                                                        community member:
                                                        <p>
                                                            “Do you understand
                                                            what the problem was
                                                            with your LifePump?”{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="answerDisplay">
                                                    <Input
                                                        type="text"
                                                        rows="5"
                                                        label=""
                                                        customClassName={
                                                            "input-container-5"
                                                        }
                                                        maxLength="400"
                                                        style={{
                                                            display: "block",
                                                        }}
                                                        value={inputvalue19}
                                                        handleSelectValueChange={(
                                                            e
                                                        ) =>
                                                            handleChangeDisplayvalue19(
                                                                e
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <div className="questionsFormat">
                                            <div className="spanDiv">
                                                <div className="questionDisplay">
                                                    Please record name of person
                                                    being interviewed
                                                </div>
                                            </div>
                                            <div className="answerDisplay">
                                                <Input
                                                    type="text"
                                                    label=""
                                                    customClassName={
                                                        "input-container-5"
                                                    }
                                                    maxLength="400"
                                                    style={{ display: "block" }}
                                                    value={inputvalue20}
                                                    handleSelectValueChange={(
                                                        e
                                                    ) =>
                                                        handleChangeDisplayvalue20(
                                                            e
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="questionsFormat">
                                            <div className="spanDiv">
                                                <div className="questionDisplay">
                                                    Please record age of person
                                                    being interviewed
                                                </div>
                                            </div>
                                            <div className="answerDisplay">
                                                <Input
                                                    type="text"
                                                    label=""
                                                    customClassName={
                                                        "input-container-5"
                                                    }
                                                    maxLength="400"
                                                    style={{ display: "block" }}
                                                    value={inputvalue21}
                                                    handleSelectValueChange={(
                                                        e
                                                    ) =>
                                                        handleChangeDisplayvalue21(
                                                            e
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="questionsFormat pd-top-10">
                                            <div className="questionsFormat">
                                                <div className="spanDiv">
                                                    <div className="questionDisplay">
                                                        Please take photo of
                                                        person being interviewed
                                                    </div>
                                                </div>
                                                <input
                                                    accept="image/*"
                                                    style={{ display: "none" }}
                                                    type="file"
                                                    multiple
                                                />
                                                <div className="image-container flexAlignCenter">
                                                    <label>
                                                        <Button
                                                            className="site-image-upload-button"
                                                            variant="contained"
                                                            color="primary"
                                                            component="span"
                                                        >
                                                            {"CHOOSE FILES"}
                                                        </Button>
                                                    </label>
                                                </div>
                                                <div className="testimonyFiles"></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : displayPage == 4 ? (
                                <div
                                    className="flexWrap"
                                    style={{ overflow: "auto" }}
                                >
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Photo checklist
                                            </div>
                                        </div>
                                        <div className="answerDisplay radio">
                                            <RadioGroup
                                                aria-label="position"
                                                name="position"
                                            >
                                                <FormControlLabel
                                                    value="r"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={
                                                        "Replaced and/or broken components"
                                                    }
                                                    checked={
                                                        selectedValue4 == "r"
                                                    }
                                                    onChange={handlechange4}
                                                />
                                                <FormControlLabel
                                                    value="q"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Inspection photos"}
                                                    checked={
                                                        selectedValue4 == "q"
                                                    }
                                                    onChange={handlechange4}
                                                />
                                                <FormControlLabel
                                                    value="p"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Testimony photos"}
                                                    checked={
                                                        selectedValue4 == "p"
                                                    }
                                                    onChange={handlechange4}
                                                />
                                                <FormControlLabel
                                                    value="o"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={
                                                        "5-10 additional photos from installation and when LP is operating "
                                                    }
                                                    checked={
                                                        selectedValue4 == "o"
                                                    }
                                                    onChange={handlechange4}
                                                />
                                                <FormControlLabel
                                                    value="n"
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={
                                                        "1-3 short videos of LP operating"
                                                    }
                                                    checked={
                                                        selectedValue4 == "n"
                                                    }
                                                    onChange={handlechange4}
                                                />
                                            </RadioGroup>
                                        </div>
                                    </div>
                                    <div className="questionsFormat">
                                        <div className="spanDiv">
                                            <div className="questionDisplay">
                                                Submit Report from App
                                            </div>
                                        </div>
                                        <div className="answerDisplay">
                                            <Input
                                                type="text"
                                                label=""
                                                customClassName={
                                                    "input-container-5"
                                                }
                                                maxLength="400"
                                                style={{ display: "block" }}
                                                value={inputvalue22}
                                                handleSelectValueChange={(e) =>
                                                    handleChangeDisplayvalue22(
                                                        e
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                    {
                                        <div
                                            className="submit-container flexAlignCenterJustifyCenter"
                                            style={{ paddingTop: "30px" }}
                                        >
                                            <Button
                                                type="button"
                                                variant="contained"
                                                color="primary"
                                                onClick={() => saveReport()}
                                            >
                                                SAVE
                                            </Button>
                                        </div>
                                    }
                                </div>
                            ) : (
                                " "
                            )}
                        </form>
                    </div>
                </MuiDialogContent>
            </Dialog>
        </div>
    );
}
export default Report;

