class 

const getApiData = async (url) => {
    let response= await fetch(url);
    if(!response.ok){
        throw new Error(`Ups, smth goes wrong at ${url} with error ${response.status}`)
    }
    let data = await response.json();
    return data;
}

getApiData('https://swapi.dev/api/people/1')
    .then(res => console.log(res.name))