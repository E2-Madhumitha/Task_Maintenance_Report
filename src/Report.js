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

    const [isRetrofit, setIsRetrofit] = useState(false);
    const openAddReport = async () => {
        try {
            setShowmaintenanceForm(true);
        } catch (err) {}
    };
    const handleChangeDisplayPage = async (event, value) => {
        try {
            event.preventDefault();
            setDisplayPage(value);
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
    const toggleRetrofitOption = async (event) => {
        try {
            let value = event.target.value;

            if (value == "Yes") {
                setIsRetrofit(true);
            } else {
                setIsRetrofit(false);
            }
        } catch (err) {}
    };

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
                                                customClassName="input-container-5"
                                                style={{ display: "block" }}
                                            />
                                        </div>
                                    </div>
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
                                            />
                                            <Input
                                                key={"PHN_NUMBER1"}
                                                type="text"
                                                label="Phone Number"
                                                name={"PHN_NUMBER1"}
                                                customClassName={"width-50"}
                                                style={{ display: "block" }}
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
                                            />
                                            <Input
                                                key={"PHN_NUMBER1"}
                                                type="text"
                                                label="Phone Number"
                                                name={"PHN_NUMBER1"}
                                                customClassName={"width-50"}
                                                style={{ display: "block" }}
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
                                                    value={2}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={
                                                        "Preventative Maintenance"
                                                    }
                                                />
                                                <FormControlLabel
                                                    value={1}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Repair"}
                                                />
                                                <FormControlLabel
                                                    value={0}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Pump Removal"}
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
                                                    value={1}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Yes"}
                                                />
                                                <FormControlLabel
                                                    value={0}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"No"}
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
                                                    value={1}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Yes"}
                                                />
                                                <FormControlLabel
                                                    value={0}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"No"}
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
                                                        onChange={(event) =>
                                                            toggleRetrofitOption(
                                                                event
                                                            )
                                                        }
                                                    />
                                                    <FormControlLabel
                                                        value={"No"}
                                                        control={
                                                            <Radio color="primary" />
                                                        }
                                                        label={"No"}
                                                        id="No"
                                                        onChange={(event) =>
                                                            toggleRetrofitOption(
                                                                event
                                                            )
                                                        }
                                                    />
                                                </RadioGroup>

                                                <Input
                                                    type="text"
                                                    label="Serial number"
                                                    customClassName={"width-50"}
                                                    style={{ display: "block" }}
                                                />
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
                                                    value={5}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"1003101"}
                                                />
                                                <FormControlLabel
                                                    value={4}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"1003401"}
                                                />
                                                <FormControlLabel
                                                    value={3}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"1003151"}
                                                />
                                                <FormControlLabel
                                                    value={2}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"1003451"}
                                                />
                                                <FormControlLabel
                                                    value={1}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"1003201"}
                                                />
                                                <FormControlLabel
                                                    value={0}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"1003421"}
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
                                        <div className="ca-site-contact-details">
                                            <RadioGroup
                                                aria-label="position"
                                                name="position"
                                                customClassName={"width-50"}
                                            >
                                                <FormControlLabel
                                                    value={1}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Yes"}
                                                />
                                                <FormControlLabel
                                                    value={0}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"No"}
                                                />
                                            </RadioGroup>

                                            <Input
                                                type="text"
                                                label="-if so please describe"
                                                customClassName={"width-50"}
                                                style={{ display: "block" }}
                                            />
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
                                        <div className="answerDisplay">
                                            <RadioGroup
                                                aria-label="position"
                                                name="position"
                                                row
                                            >
                                                <FormControlLabel
                                                    value={1}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Yes"}
                                                />
                                                <FormControlLabel
                                                    value={0}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"No"}
                                                />
                                            </RadioGroup>
                                            <div className="answerDisplay">
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
                                            <div className="answerDisplay radio">
                                                <RadioGroup
                                                    aria-label="position"
                                                    name="position"
                                                >
                                                    <FormControlLabel
                                                        value={1}
                                                        control={
                                                            <Radio color="primary" />
                                                        }
                                                        label={
                                                            "Not maintained greater than a year"
                                                        }
                                                    />
                                                    <FormControlLabel
                                                        value={0}
                                                        control={
                                                            <Radio color="primary" />
                                                        }
                                                        label={
                                                            "Maintained within a year"
                                                        }
                                                    />
                                                </RadioGroup>
                                            </div>
                                        </div>
                                        <div className="questionsFormat">
                                            <div className="spanDiv">
                                                <div className="questionDisplay">
                                                    If pump has not been
                                                    maintenanced for more than 1
                                                    year, ask community member:
                                                    <p>
                                                        “How has the LifePump
                                                        benefited your
                                                        community?”
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
                                                    style={{ display: "block" }}
                                                />
                                            </div>
                                        </div>
                                        <div className="questionsFormat">
                                            <div className="spanDiv">
                                                <div className="questionDisplay">
                                                    If pump has been
                                                    maintenanced within the last
                                                    1 year, ask community
                                                    member:
                                                    <p>
                                                        “Do you understand what
                                                        the problem was with
                                                        your LifePump?”{" "}
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
                                                    style={{ display: "block" }}
                                                />
                                            </div>
                                        </div>
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
                                                />
                                            </div>
                                        </div>
                                        <div className="questionsFormat">
                                            <div className="spanDiv">
                                                <div className="questionDisplay">
                                                    Please record age of person
                                                    being interviewed and take
                                                    photo.
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
                                                    value={4}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={
                                                        "Replaced and/or broken components"
                                                    }
                                                />
                                                <FormControlLabel
                                                    value={3}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Inspection photos"}
                                                />
                                                <FormControlLabel
                                                    value={2}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={"Testimony photos"}
                                                />
                                                <FormControlLabel
                                                    value={1}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={
                                                        "5-10 additional photos from installation and when LP is operating "
                                                    }
                                                />
                                                <FormControlLabel
                                                    value={0}
                                                    control={
                                                        <Radio color="primary" />
                                                    }
                                                    label={
                                                        "1-3 short videos of LP operating"
                                                    }
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
