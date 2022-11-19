let swapi = fetch => {
    return fetch('https://swapi.dev/api/')
        .then(response => response.json())
        .then(data => {
            console.log('swapi: ', data);
            return {
                count: data.count,
                results: data.results
            }
        })
}

export default swapi;