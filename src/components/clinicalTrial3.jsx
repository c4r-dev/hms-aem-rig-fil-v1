import React, { useRef, useState } from "react";
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

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

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

                            <br></br>
                            <input className="inputBox"
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Custom Questions"
                            />
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