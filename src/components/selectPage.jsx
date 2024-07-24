import { useNavigate } from "react-router-dom";

import { ReactComponent as Raven4 } from '../assets/files-scattered.svg';

export default function StartRaven() {

    const navigate = useNavigate();

    const submitContinueClick = () => {
      navigate("/selectPage")
    }

    return (

        <>
            <div>
                <h1>RIGOR FILES</h1>
                <p><h2>SELECT A LAB SCENARIO TO EXPLORE! YOU WILL EXAMINE
                    YOUR CHOSEN CASE STUDY FOR POTENTIAL RISKS OF UN-MASKING.</h2></p>
            </div>
            <input
                type="button"
                onClick={submitContinueClick}
                value="CONTINUE" />
            <div>
                <Raven4 />
            </div>
        </>
    )
}