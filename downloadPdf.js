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
    event.preventDefault();
    downloadPdf();
  });