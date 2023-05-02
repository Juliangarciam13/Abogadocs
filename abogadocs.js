async function displaybooks() {
  try {
    const response = await fetch('http://openlibrary.org/search.json?q=&subject=law');
    const data = await response.json();
    const books = data.docs.filter(book => book.cover_i);

    books.forEach(book => {
      const card = document.createElement('div');
      card.className = 'card';

      const infoBox = document.createElement('div');
      infoBox.className = 'info-box hidden';
      infoBox.innerHTML = `
          <p>Title: ${book.title}</p>
          <p>Author: ${book.author_name}</p>
          <p>First Publish Year: ${book.first_publish_year}</p>
          <p>Number of Pages: ${book.number_of_pages}</p>
      `;

      const cover_img = document.createElement('img');
      cover_img.src = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
      cover_img.alt = book.title;
      cover_img.addEventListener('mouseover', () => {
        infoBox.classList.remove('hidden');
      });
      cover_img.addEventListener('mouseout', () => {
        infoBox.classList.add('hidden');
      });
      card.appendChild(cover_img);

      document.body.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}

displaybooks();

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
