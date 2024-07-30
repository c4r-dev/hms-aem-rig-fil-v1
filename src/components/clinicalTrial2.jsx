import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import HintsScrollingBox from "./hintsScrollingBox";

export default function ClinicalTrial2() {

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
        navigate("/clinicalTrial3")
    }

    return (

        <>
            <div className="ctbackground">
                <div ref={printRef} style={{ padding: '10px', border: '1px solid #000' }}>
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
                            <div className="text-box-container">
                                <textarea className="text-box" placeholder="Note your thoughts and any targeted questions."></textarea>
                            </div>
                            <h3>Here are some hints available if you prefer to see models of types of
                                questions that are useful when thinking about pitfalls in studies that
                                might lead to accidental unmasking of experiments.
                                <br></br>
                            </h3>
                            <div>
                                <HintsScrollingBox />
                            </div>
                            <br></br>
                            <div> <button onClick={handlePrint}>Print to PDF</button></div>
                            <div> <button onClick={submitContinueClick}>REFERENCE TOOL</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}