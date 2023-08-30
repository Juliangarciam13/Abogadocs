let downloadWord = document.getElementById('ampleSufficientPower');
downloadWord.addEventListener('click', function () {
    let link = document.createElement('a');
    link.href = './Contracts/ampleSufficientPower.docx'; 
    link.download = 'ampleSufficientPower.docx'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
let wordDownloadLink = document.getElementById('ampleSufficientPower');
wordDownloadLink.addEventListener('click', function (event) {
    event.preventDefault();
    downloadWord();
});

let downloadWord1 = document.getElementById('assignmentContract');
downloadWord1.addEventListener('click', function () {
    let link = document.createElement('a');
    link.href = './Contracts/assignmentContract.doc'; 
    link.download = 'assignmentContract.doc'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
let wordDownloadLink1 = document.getElementById('assignmentContract');
wordDownloadLink1.addEventListener('click', function (event) {
    event.preventDefault();
    downloadWord1();
});

let downloadWord2 = document.getElementById('confidentialityAgreement');
downloadWord2.addEventListener('click', function () {
    let link = document.createElement('a');
    link.href = './Contracts/confidentialityAgreement.docx'; 
    link.download = 'confidentialityAgreement.docx'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

let downloadWord3 = document.getElementById('powerContract');
downloadWord3.addEventListener('click', function () {
    let link = document.createElement('a');
    link.href = './Contracts/powerContract.docx'; 
    link.download = 'powerContract.docx'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

let downloadWord4 = document.getElementById('succession');
downloadWord4.addEventListener('click', function () {
    let link = document.createElement('a');
    link.href = './Contracts/succession.doc';
    link.download = 'succession.doc'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

let downloadWord5 = document.getElementById('urbanLeaseContract');
downloadWord5.addEventListener('click', function () {
    let link = document.createElement('a');
    link.href = './Contracts/urbanLeaseContract.docx';
    link.download = 'urbanLeaseContract.docx'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});