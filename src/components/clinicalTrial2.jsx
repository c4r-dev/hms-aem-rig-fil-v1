import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import HintsScrollingBox from "./hintsScrollingBox";
import ScreenToPDF from "./screenToPdf";

export default function ClinicalTrial2() {

    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

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
                            <h1 className="textLeft">RIGOR FILES</h1></div>
                        <div>
                            <h2>CAPTURE IDEAS AND QUESTIONS</h2>
                        </div>
                        <h3>Interrogate the experiment: In this activity, identify all the ways the experiment could become unmasked.</h3>
                        <h3>Note your thoughts and any targeted questions you might ask about the study to help discover risk points in
                            the space provided for your group.
                        </h3>

                        <input className="inputBox"
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            placeholder="Note your thoughts and any targeted questions"
                        />


                        <h3>Here are some hints available if you prefer to see models of types of
                            questions that are useful when thinking about pitfalls in studies that
                            might lead to accidental unmasking of experiments.
                            <br></br>
                        </h3>

                        <div>
                            <HintsScrollingBox />
                        </div>
                        <br></br>
                        <input
                            type="button"
                            onClick={submitContinueClick}
                            value="REFERENCE TOOL" />
                        <div>
                            <br></br>
                            <ScreenToPDF />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}