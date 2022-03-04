const alertFunc = (getData) => {
    alert(getData);
};

const confirmFunc = () => {
    // const isTrue = confirm("Are you a programmer?");
    // isTrue ? alertFunc("Mashallah!") : alertFunc("It's ok no problem.");
    confirm ("Are you a programmer?") ? alertFunc("Mashallah!") : alertFunc("It's ok no problem.");
};