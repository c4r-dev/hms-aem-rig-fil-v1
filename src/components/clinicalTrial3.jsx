import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClinicalTrial2() {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const navigate = useNavigate();
    const submitContinueClick = () => {
        navigate("/")
    }

    return (

        <>
            <div className="ctbackground">
                <div className="boxes">
                    <div className="big-box yellow">
                        <div>
                            <h1>RIGOR FILES</h1>
                            <p><h2>Guide for Creating a "Take Home" Template (REFERENCE TOOL)</h2></p>
                        </div>

                        <div><h3>1. INTRODUCTION</h3></div>
                        <div>Breifly describe your experiment and its purpose.</div>
                        <div>Identify any sensitive information or variables that need to remain blinded.</div>

                        <div><h3>2. PARTICIPANT RECRUITMENT AND CONSENT</h3></div>
                        <div>How will you ensure that participants are unaware of the experimental conditions?</div>
                        <div>Describe your informed consent process and how it maintains blinding.</div>

                        <div><h3>3. RANDOMIZATION AND ALLOCATION</h3></div>
                        <div>How will you randomize participants into different groups or conditions?</div>
                        <div>How will you randomize participants into different groups or conditions?</div>

                        <div><h3>4. DATA COLLECTION AND MEASUREMENT</h3></div>
                        <div>Specify who collects data and how they remain blinded.</div>
                        <div>Detail any precations to prevent inadvertent unmasking during data collection.</div>

                        <div><h3>5. DATA ANALYSIS AND INTERPRETATION</h3></div>
                        <div>How will you analyze the data while maintaining blinding?</div>
                        <div>Consider statistical methods or procedures that minimize unmasking.</div>

                        <div><h3>6. DATA ANALYSIS AND INTERPRETATION</h3></div>
                        <div>How will you analyze the data while maintaining blinding?</div>
                        <div>Consider statistical methods or procedures that minimize unmasking.</div>

                        <div><h3>7. DATA ANALYSIS AND INTERPRETATION</h3></div>
                        <div>Regularly assess whether blinding procedures are being followed.</div>
                        <div>Encourage team members to reflect on potential risks of unmasking.</div>

                        <div><h3>8. CUSTOM QUESTIONS (YOUR OWN REFLECTION)</h3></div>
                        <div>Take a moment to think about your specific experiment and research context.</div>
                        <div>What other aspects of your study might pose risks of unmasking or blinding?</div>
                        <div>Create additional questions that address these unique challenges.</div>
                        <div>Consider involving your team members in brainstorming and refining these questions.</div>

                        <br></br>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Custom Questions"
                        />
                        <br></br><br></br>

                        <input
                            type="button"
                            onClick={submitContinueClick}
                            value="DOWNLOAD as PDF" />

                        <br></br><br></br>
                    </div>
                </div>
            </div>
        </>


    )
}