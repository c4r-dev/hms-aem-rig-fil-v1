import { useNavigate } from "react-router-dom";

// import { ReactComponent as Raven4 } from '../assets/files-scattered.svg';

export default function ClinicalTrial1() {

    const navigate = useNavigate();

    const submitStartClick = () => {
        navigate("/clinicalTrial1")
    }

    return (

        <>
            <div class="ctbackground">
                <div className="boxes">
                    <div className="big-box yellow">
                        <div>
                            <h1>RIGOR FILES</h1>
                            <p><h2>CLINICAL TRIAL FOR A NEW DRUG</h2></p>
                        </div>
                        <p><h3>A pharmaceutical company is conducting
                            a phase II clinical trial to evaluate the safety
                            and efficiacy of a novel drug for treating
                            hypertension The drug aims to lower blood
                            pressure without significant side effects.</h3></p>
                        <input
                            type="button"
                            onClick={submitStartClick}
                            value="START" />
                    </div>
                </div>

                {/* <div>
                    <Raven4 />
                </div> */}
            </div>
        </>
    )
}