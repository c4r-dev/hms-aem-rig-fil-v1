import { useNavigate } from "react-router-dom";

import { ReactComponent as Raven4 } from '../assets/files-scattered.svg';

export default function StartRaven() {

    const navigate = useNavigate();


    const submitStart1Click = () => {
        navigate("/clinicalTrial1")
    }

    const submitStart2Click = () => {
        navigate("/")
    }

    return (

        <>
            <div>
                <h1>RIGOR FILES</h1>
                <p><h2>SELECT A LAB SCENARIO TO EXPLORE! YOU WILL EXAMINE
                    YOUR CHOSEN CASE STUDY FOR POTENTIAL RISKS OF UN-MASKING.</h2></p>
            </div>

            <div className="boxes">
                <div className="box yellow">
                    <h2>Clinical Trial for a New Drug</h2>
                    <p><h3>A pharmaceutical company is conducting
                        a phase III clinical trial to evaluate the safety
                        and efficiacy of a novel drug for treating
                        hypertension. The drug aims to lower blood
                        pressure without significant side effects.</h3></p>
                    <input
                        type="button"
                        onClick={submitStart1Click}
                        value="START" />
                </div>
                <div className="box blue">
                    <h2>Behavioral Study on Sleep Patterns</h2>
                    <p><h3>A psychology research team is investigating the
                        impact of blue light exposure on sleep quality. Participants
                        are exposed to different light conditions before bedtime.</h3></p>
                    <input
                        type="button"
                        onClick={submitStart2Click}
                        value="START" />
                </div>
            </div>

            <div>
                <Raven4 />
            </div>

        </>
    )
}