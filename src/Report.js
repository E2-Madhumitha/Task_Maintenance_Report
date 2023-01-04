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
import CloseIcon from "@material-ui/icons/Close"
import { useState,useEffect } from "react";
import "./App.css";
import MuiDialogContent from '@material-ui/core/DialogContent';
import Select from './Select';
import Input from './Input';
function Report() {
    const [showmaintenanceForm, setShowmaintenanceForm] = useState(false);
    const [displayPage, setDisplayPage] = useState(0);
    const openAddReport = async () => {
		try {
		setShowmaintenanceForm(true);
		} catch (err) {

		}
	}
    const handleChangeDisplayPage = async (event, value) => {
		try {
			event.preventDefault();
			setDisplayPage(value)
		} catch (err) {

		}
	}
    const closeAddReport = async () => {
		try {
			setShowmaintenanceForm(false);
            setDisplayPage(0);
		} catch (err) {

		}
    }
    return(
        <div className="content-body">
    <Paper className="full-height-width">
        <div className="addbut">
        <Fab size="medium" title="Add New Report" color="primary" onClick={() => openAddReport()}>
            <AddIcon />
        </Fab>
        </div>
    </Paper>
    <Dialog maxWidth="md" disableBackdropClick onClose={() => closeAddReport()} aria-labelledby="customized-dialog-title" open={showmaintenanceForm}>
				<div className="modal-header flexAlignCenterJustifySpaceBetween">
					{ "New Report"}
					<IconButton aria-label="close" onClick={() => closeAddReport()} >
						<CloseIcon/>
					</IconButton>
				</div>
				<div className="formnav" >
					<Paper square >
						<Tabs
							value={displayPage}
							indicatorColor="primary"
							textColor="primary"
                            onChange={(e, value) => handleChangeDisplayPage(e, value)}
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
						<form className="flexWrap" onSubmit={e => { e.preventDefault(); }}>
							{displayPage == 0 ?
								<div className="flexWrap" style={{ overflow: "auto" }}>
									<div className="questionsFormat">
										<div className="spanDiv">
											<div className="questionDisplay">
                                            Community Name & Country & Site ID
											</div>
										</div>
										<div className="answerDisplay" >
										<Select name="Communitynameandcountry" customClassName="input-container-5" label="Select"  >
                                        <MenuItem value="">Select</MenuItem>
												</Select>
										</div>
									</div>
									<div className="questionsFormat">
										<div className="spanDiv">
											<div className="questionDisplay">
                                            District & Region (if applicable)

											</div>
										</div>
										<div className="answerDisplay" >
										<Select name="Districtandregion" customClassName="input-container-5" label="Select"  >
                                        <MenuItem value="">Select</MenuItem>
												</Select>
										</div>
									</div>
										
                                    <div className="questionsFormat">
										<div className="spanDiv">
											<div className="questionDisplay">
                                            LifePump ID

											</div>
										</div>
										<div className="answerDisplay" >
										<Select name="Lifepumpid" customClassName="input-container-5" label="Select"  >
                                        <MenuItem value="">Select</MenuItem>
												</Select>
										</div>
									</div>
									<div className="questionsFormat">
										<div className="spanDiv">
											<div className="questionDisplay">
                                            Please describe the reported issue

											</div>
										</div>
										<div className="answerDisplay" >
										
                                        <Input  type="text" rows='3' label=""  customClassName={"input-container-5" } maxLength="250" style={{ "display": "block" }}  />
												
										</div>
									</div>
									<div className="questionsFormat">
										<div className="spanDiv">
											<div className="questionDisplay">
                                            Please provide community contact information (name & cell phone):
                                          <p> 1. Care taker/ first responder</p> 
                                          <p> 2. Water Point committee member</p> 


											</div>
										</div>
										<div className="answerDisplay" >
										
                                        <Select name="Lifepumpid" customClassName="input-container-5" label="Select"  >
                                        <MenuItem value="">Select</MenuItem>
												</Select>
												
										</div>
									</div>

								</div>
								: displayPage == 1 ?
									<div className="flexWrap" style={{ overflow: "auto" }}>
										<div className="questionsFormat">
										<div className="spanDiv">
											<div className="questionDisplay">
                                            Date performed
                                        </div>
										</div>
										<div className="answerDisplay" style={{ "display": "block" }}>
										<Input  type="text"  label=""  customClassName="input-container-5" style={{ "display": "block" }}  />
										</div>
									</div>
                                    <div className="questionsFormat">
										<div className="spanDiv">
											<div className="questionDisplay">
                                            Name of person performing maintenance
                                        </div>
										</div>
										<div className="answerDisplay" style={{ "display": "block" }}>
										<Input  type="text"  label=""  customClassName="input-container-5" style={{ "display": "block" }}  />
										</div>
									</div>
                                    <div className="questionsFormat">
						<div className="spanDiv">
							<div className="questionDisplay">
                            Primary reason for visiting pump
							</div>
						</div>
						<div className="answerDisplay radio" >
							<RadioGroup
								aria-label="position"
								name="position"
								
							>
                                <FormControlLabel
													value={2}
													control={<Radio color="primary"  />}
													label={"Preventative Maintenance"}
												/>
								<FormControlLabel
													value={1}
													control={<Radio color="primary"  />}
													label={"Repair"}
												/>
												<FormControlLabel
													value={0}
													control={<Radio color="primary"/>}
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
										<div className="answerDisplay radio" >
											<RadioGroup
												aria-label="position"
												name="position"
												row
											>

												<FormControlLabel
													value={1}
													control={<Radio color="primary"  />}
													label={"Yes"}
												/>
												<FormControlLabel
													value={0}
													control={<Radio color="primary" />}
													label={"No"}
												/>
											</RadioGroup>
										</div>
                                    </div>
                                    <div className="questionsFormat">
										<div className="spanDiv">
											<div className="questionDisplay">
                                            Was pump functional upon leaving site? 
											</div>
										</div>
										<div className="answerDisplay radio" >
											<RadioGroup
												aria-label="position"
												name="position"
												row
											>

												<FormControlLabel
													value={1}
													control={<Radio color="primary"  />}
													label={"Yes"}
												/>
												<FormControlLabel
													value={0}
													control={<Radio color="primary" />}
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
                                                        <RadioGroup
												aria-label="position"
												name="position"
                                                customClassName={"width-50"}
												
											>

												<FormControlLabel
													value={1}
													control={<Radio color="primary"  />}
													label={"Yes"}
												/>
												<FormControlLabel
													value={0}
													control={<Radio color="primary" />}
													label={"No"}
												/>
											</RadioGroup>
															
											<Input  type="text"  label="Serial number"  customClassName={"width-50"} style={{ "display": "block" }}  />
														</div>
													</div>
                                                    <div className="questionsFormat">
						<div className="spanDiv">
							<div className="questionDisplay">
                            New Gearbox Assembly Number (if applicable)
							</div>
						</div>
						<div className="answerDisplay radio" >
							<RadioGroup
								aria-label="position"
								name="position"
								row
							>
                                <FormControlLabel
													value={5}
													control={<Radio color="primary"  />}
													label={"1003101"}
												/>
								<FormControlLabel
													value={4}
													control={<Radio color="primary"  />}
													label={"1003401"}
												/>
												<FormControlLabel
													value={3}
													control={<Radio color="primary"/>}
													label={"1003151"}
												/>
                                <FormControlLabel
													value={2}
													control={<Radio color="primary"  />}
													label={"1003451"}
												/>
								<FormControlLabel
													value={1}
													control={<Radio color="primary"  />}
													label={"1003201"}
												/>
												<FormControlLabel
													value={0}
													control={<Radio color="primary"/>}
													label={"1003421"}
												/>
							</RadioGroup>
						</div>
                        </div>
                        <div className="questionsFormat">
										<div className="spanDiv">
											<div className="questionDisplay">
                                            New Gearbox Date Code (if applicable)


											</div>
										</div>
										<div className="answerDisplay" >
										
                                        <Select name="gearboxdatecode" customClassName="input-container-5" label="Select"  >
                                        <MenuItem value="">Select</MenuItem>
												</Select>
												
										</div>
									</div>
					
                                    <div className="questionsFormat">
										<div className="spanDiv">
											<div className="questionDisplay">
                                            New Stator Serial Number (if applicable)
                                        </div>
										</div>
										<div className="answerDisplay" style={{ "display": "block" }}>
										<Input  type="text"  label=""  customClassName="input-container-5" style={{ "display": "block" }}  />
										</div>
									</div>
                                    <div className="questionsFormat">
										<div className="spanDiv">
											<div className="questionDisplay">
                                            Maintenance Notes 
                        <p> (please indicate any important details about the installation)</p>


											</div>
										</div>
										<div className="answerDisplay" >
										
                                        <Input  type="text" rows='6' label=""  customClassName={"input-container-5" } maxLength="600" style={{ "display": "block" }}  />
												
										</div>
									</div>
									</div>
									:
									displayPage == 2 ?
										<div className="flexWrap" style={{ overflow: "auto" }}>
											
										</div>
										: displayPage == 3 ?
											<>
												<div className="flexWrap" style={{ overflow: "auto" }}>
													
												</div>
												{
													<div className="submit-container flexAlignCenterJustifyCenter" style={{ paddingTop: "30px" }}>
														<Button type="button" variant="contained" color="primary" >
															SAVE
														</Button>
														{
													
																	<>
																		<Button type="button" className="approveAction" variant="contained" color="primary" >
																			SAVE & APPROVE
																		</Button>
																		<Button type="button" className="approveAction" variant="contained" color="primary" >
																			SAVE & DECLINE
																		</Button>
																	</> 
														}
														{
														
														}
													</div>
												}
                                                </>
											: 
                                            displayPage == 4?
                                                <div className="flexWrap" style={{ overflow: "auto" }}>
                                                    
                                                </div>
                                                :" "

							}

						</form>
					</div>
				</MuiDialogContent>
                </Dialog>
    </div>
    )
}
export default Report;
