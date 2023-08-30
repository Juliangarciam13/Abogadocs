const cardContainer = document.createElement('div');
document.body.appendChild(cardContainer);

async function displaybooks(category) {
  try {
    const response = await fetch(`http://openlibrary.org/search.json?q=&subject=${category}`);
    const data = await response.json();
    const books = data.docs.filter(book => book.cover_i);

    cardContainer.innerHTML = '';

    books.forEach(book => {
      const card = document.createElement('div');
      card.className = 'card';

      const cover_img = document.createElement('img');
      cover_img.src = `http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
      cover_img.alt = book.title;

      cover_img.addEventListener('click', () => {
        window.open(`https://openlibrary.org${book.key}`);
      });
      card.appendChild(cover_img);

      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.log(error);
  }
}

const historyButton = document.getElementById('history');
const lawButton = document.getElementById('law');
const politicsButton = document.getElementById('politic');

historyButton.addEventListener('click', () => {
  displaybooks('history');
});

lawButton.addEventListener('click', () => {
  displaybooks('law');
});

politicsButton.addEventListener('click', () => {
  displaybooks('politic');
});

document.addEventListener("DOMContentLoaded", async function (event) {
  await displaybooks();


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
});


