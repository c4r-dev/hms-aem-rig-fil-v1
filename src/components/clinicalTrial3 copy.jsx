import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import RefToolScrollingBox from "./refToolScrollingBox"
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default function ClinicalTrial3() {

    const printRef = useRef();
    const handlePrint = () => {
        const input = printRef.current;
        html2canvas(input)
            .then(canvas => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 0, 0);
                pdf.save('download.pdf');
            })
            .catch(error => {
                console.error('Error generating PDF:', error);
            });
    };

    const navigate = useNavigate();
    const submitContinueClick = () => {
        navigate("/finalPage")
    }

    return (

        <>
            <div className="ctbackground">
                <div ref={printRef} style={{ padding: '10px', border: '1px solid #000' }}>
                    <div className="boxes">
                        <div className="big-box yellow">
                            <div>
                                <h1 className="textLeft">RIGOR FILES</h1>
                                <p><h2>Guide for Creating a "Take Home" Template (REFERENCE TOOL)</h2></p>
                            </div>

                            <div>
                                <RefToolScrollingBox />
                            </div>

                            <div>
                                <h3>8. Custom Questions (Your Own Reflection):</h3>
                                <h4>a. Take a moment to think about your specific experiment and research context.</h4>
                                <h4>b. What other aspects of your study might pose risks of unmasking or blinding?</h4>
                                <h4>c. Create additional questions that address these unique challenges.</h4>
                                <h4>d. Consider involving your team members in brainstorming and refining these questions.</h4>
                            </div>
                            <div className="text-box-container">
                                <textarea className="text-box" placeholder="Note your thoughts and any targeted questions."></textarea>
                            </div>
                            <br></br>
                            <div> <button onClick={handlePrint}>Print to PDF</button></div>
                            <div> <button onClick={submitContinueClick}>CONTINUE</button></div>
                            <br></br><br></br>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}