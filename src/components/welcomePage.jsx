import { useNavigate } from "react-router-dom";

import { ReactComponent as Raven4 } from '../assets/files-scattered.svg';

export default function StartRaven() {

    const navigate = useNavigate();

    const submitContinueClick = () => {
      navigate("/welcome")
    }

    return (

        <>
            <div>
                <h1>Rigor Files</h1>
                <h2>Welcome to The Rigor Files</h2>
                <h2>1. Discuss the case study.</h2>
                <h2>2. Capture ideas and questions.</h2>
                <p><h2>3. Convert those thoughts into a reference tool
                    for future self-assessment of your own experiments.</h2></p>
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