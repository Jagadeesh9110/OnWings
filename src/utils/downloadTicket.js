import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Downloads a ticket as a PDF file
 * @param {HTMLElement} ticketElement - The DOM element containing the ticket
 * @param {string} bookingId - The booking ID to use in the filename
 */
export const downloadTicketAsPDF = async (ticketElement, bookingId) => {
  try {
    // Show loading state (optional - you can add a loader if needed)
    const canvas = await html2canvas(ticketElement, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    // Calculate dimensions
    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Create PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    
    // Add image to PDF
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
    // Download the PDF
    pdf.save(`OnWings-Ticket-${bookingId}.pdf`);
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
};
