import React, { useRef } from "react";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const ScreenToPDF = () => {
    const captureRef = useRef();

    const captureScreen = async () => {
        const element = captureRef.current;
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [canvas.width, canvas.height]
        });

        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('screenshot.pdf');
    }

    return (
        <div>
            <button onClick={captureScreen}>Capture as PDF</button>
        </div>
    )
}

export default ScreenToPDF