let input = document.querySelector('input')
let info = document.querySelector('.info')
let meaning1 = document.querySelector('.meaning1')
let meaning = document.querySelector('.meaning')
let title = document.querySelector('.title')
let audio = document.querySelector('#audio')



async function fetchapi(word) {
    try {
        info.style.display = 'block';
        info.innerText = `Searching the meaning of '${word}'`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res) =>  res.json() )

        if(result.title){
            info.innerText='Enter the meaningful word'
            meaning1.style.display='none';
        }else{
            info.style.display = 'none';
        meaning1.style.display = 'block';
        title.innerText = result[0].word;
        meaning.innerText = result[0].meanings[0].definitions[0].definition;
        audio.src= result[0].phonetics[0].audio;
        }
    } catch (error) {
        console.log(error);
    }
}







input.addEventListener('keyup', (e) => {
    if (e.target.value && e.key === 'Enter') {
        fetchapi(e.target.value)
    }
})
