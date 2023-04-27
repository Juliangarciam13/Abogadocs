const apiUrl = 'https://cdn.filestackcontent.com/HANDLE';

const documents = async () => {
    try {
        const dataDocuments = await fetch("https://www.googleapis.com/drive/v3/files/fileId",
            { method: 'GET'});
        console.log(dataDocuments);
    } catch (error) {
        console.error(error);
    }
}

documents();
