const alertFunc = (getData) => {
    alert(getData);
};

const confirmFunc = (text) => {
    // const isTrue = confirm("Are you a programmer?");
    // isTrue ? alertFunc("Mashallah!") : alertFunc("It's ok no problem.");
    confirm (text) ? alertFunc("Mashallah!") : alertFunc("It's ok no problem.");
};