import React from "react";
import { useNavigate } from "react-router-dom";

import HintsScrollingBox from "./hintsScrollingBox";

export default function ClinicalTrial2() {

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
                            <p><h2>HINTS FOR SCAFFOLD ACTIVITY</h2></p>
                  
                        </div>
                        <p><h3>Here are some hints available if you prefer to see models of types of
                            questions that are useful when thinking about pitfalls in studies that
                            might lead to accidental unmasking of experiments.
                            <br></br><br></br>
                            With your group, note your thoughts and any targeted questions you might ask about
                            the study to help discover risk points.
                            <br></br>
                        </h3></p>

                        <div>
                            <HintsScrollingBox />
                        </div>
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