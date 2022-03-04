// const getHistory = window.history;
const getHistory = history;


const getHistoryBtn = () => {
    console.log(getHistory);
    console.log(`Length = ${getHistory.length}`);
};

const backFunc = () => {
    getHistory.back();
};

const forwardFunc = () => {
    getHistory.forward();
};