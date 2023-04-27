const fetchLegalResource = async () => {
    const url = `http://openlibrary.org/search.json?q=&subject=law`;
    try {
        const dataDocuments = await fetch(url,
            { method: 'GET' });
        const jsonDataDocuments = await dataDocuments.json();
        const mapDocuments = jsonDataDocuments.docs.map((result) => {
            const coverID = result.cover_i || '';
            const coverURL = `http://covers.openlibrary.org/b/id/${coverID}-M.jpg`;
            return {
                'cover_url': coverURL,
                'title': result.title,
                'first_publish_year': result['first_publish_year'],
                'number_of_pages_median': result['number_of_pages_median'],
                'key': result.key,
                'cover_i': result['cover_i'],
                'edition_count': result['edition_count']
            }
        });
        console.log(mapDocuments);
    } catch (error) {
        console.error(error);
        console.log(error.message);
    }
}

fetchLegalResource();
