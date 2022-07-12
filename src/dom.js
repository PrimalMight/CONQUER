console.log('dom file');


const body = document.querySelector('body');

const stylebody = () => {
    body.style.background = 'peachpuff';
};

const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};


console.log("test from dom.js");
export {stylebody, addTitle};
