import { useNavigate } from "react-router-dom";

import Hints from "../hintsScaffold3.json"

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
                            <p><h2>CLINICAL TRIAL FOR A NEW DRUG</h2></p>
                            <br></br>
                            <p><h2>Interrogate the experiment: In this activity, identify
                                all the ways the experiment could become unmasked.</h2></p>
                            <br></br>
                            <p><h2>Guide for Creating a "Take Home" Template</h2></p>
                        </div>
                        <p><h3>Here are some hints available if you prefer to see models of types of
                            questions that are useful when thinking about pitfalls in studies that
                            might lead to accidental unmasking of experiments.
                            <br></br><br></br>
                            Note your thoughts and any targeted questions you might ask about
                            the study to help discover risk points in the space provided for your group.
                            <br></br>
                        </h3></p>
                        <p><h2>HINTS FOR SCAFFOLD ACTIVITY</h2></p>
                        <ul>
                            {Hints.map((hint) => (
                                <li key={hint.number}>
                                    {hint.hint}
                                </li>
                            ))}
                        </ul>

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