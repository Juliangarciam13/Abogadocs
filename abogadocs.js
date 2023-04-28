function downloadPdf() {
    let link = document.createElement('a');
    link.href = './DownloadPdf/mobileAppPresentation.pdf';
    link.download = 'mobileAppPresentation.pdf';
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

let pdfDownloadLink = document.getElementById('pdf-download-link');
pdfDownloadLink.addEventListener('click', function (event) {
    event.preventDefault(); // prevent the default behavior of the link (which is to navigate to the href)
    downloadPdf(); // download the PDF
});

// funcion para descargar el libro en formato pdf
/*const downloadBook = async (key) => {
  try {
    // Get the book metadata from the Open Library API
    const bookUrl = `https://openlibrary.org/books/${key}.json`;
    const bookResponse = await fetch(bookUrl);
    const bookData = await bookResponse.json();
    
    // Check if the book is available in PDF format
    if (bookData && bookData.formats && bookData.formats['application/pdf']) {
      // Get the PDF download link from the book metadata
      const pdfUrl = bookData.formats['application/pdf'];
      
      // Download the PDF
      const pdfResponse = await fetch(pdfUrl);
      const pdfBlob = await pdfResponse.blob();
      const pdfFilename = `${bookData.title}.pdf`;
      const pdfLink = URL.createObjectURL(pdfBlob);
      const pdfDownloadLink = document.createElement('a');
      pdfDownloadLink.href = pdfLink;
      pdfDownloadLink.download = pdfFilename;
      pdfDownloadLink.click();
    } else {
      console.log('This book is not available in PDF format.');
    }
  } catch (error) {
    console.error(error);
  }
}

downloadBook('OL28197656M');
 */
