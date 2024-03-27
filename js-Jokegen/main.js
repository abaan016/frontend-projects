const jokes = document.querySelector('.jokes');
const nxtBtn = document.querySelector('.btn');

const createJokes = () => {
    const setHeader = {
        headers: {
            Accept: "application/json",
        },
    };

    fetch('https://icanhazdadjoke.com/', setHeader)
    .then((res) => res.json())
    .then((data) => (jokes.innerHTML = data.joke))
    .catch((error) => console.log(error));
};

nxtBtn.addEventListener('click', createJokes);

createJokes();