const base = fetch => {
    return fetch('https://swapi.dev/api/')
        .then(response => response.json())
        .then(data => {
            console.log('base: ', data);
            return {
                count: data.count,
                results: data.results
            }
        })
}

const people = async (fetch) => {
const getRequest = await fetch('https://swapi.dev/api/people')
const data = await getRequest.json();
console.log('people:', data)
    return {
        count: data.count,
        results: data.results
    }
}

export default {base, people};
