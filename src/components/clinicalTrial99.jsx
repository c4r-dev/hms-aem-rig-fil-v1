import React from "react";
import { useNavigate } from "react-router-dom";

export default function ClinicalTrial2() {

    const navigate = useNavigate();
    const submitContinueClick = () => {
        navigate("/clinicalTrial3")
    }

    return (

        <>
            <div className="ctbackground">
                <div className="boxes">
                    <div className="big-box yellow">
                        <div>
                            <h1>RIGOR FILES</h1>
                            <p><h2>Interrogate the experiment: In this activity, identify
                                all the ways the experiment could become unmasked.</h2></p>
                                <p><h2>Behavioral Study on Sleep Patterns</h2></p>
                        </div>
                       
                        <div><h3>STUDY TEAM</h3></div>
                        <div>Lead Researcher: Dr. Alex Ramirez</div>
                        <div>Graduate Research Assistants: Marta Humboldt and James Chen</div>
                        <div>Data Analyst: Dr. Mark Johnson</div>
                        <div><h3>DATA ACCUMULATION</h3></div>
                        <div>Blood pressure measurements (systolic and diastolic) at baselline, weekly intervals, and study endpoint</div>
                        <div>Adverse events reporting</div>
                        <div>Laboratory tests (e.g., kidney function, liver enzymes)</div>
                        <div><h3>PARTICIPANTS</h3></div>
                        <div>100 healthy adults (ages 18-35) recruited from the university community.</div>
                        <div>Randomly assigned to either one of three groups: blue light exposure, red light exposure, or no light (control)</div>
                        <div><h3>ENVIRONMENTAL CONDITIONS</h3></div>
                        <div>Clinical research center with controlled temperature, humidity, and lighting.</div>
                        <div>Standardized examination rooms.</div>
                        <div>Compliance with Good Clinical Practice (GCP) guidelines.</div>
                        <br></br>
                        <br></br>

                        <input
                            type="button"
                            onClick={submitContinueClick}
                            value="CONTINUE" />
                    </div>
                </div>
            </div>
        </>


    )
}