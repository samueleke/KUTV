let countDate = new Date("June 15, 2022 00:00:00");

const countDown = () => {
    let countTime = countDate.getTime();
    const now = new Date().getTime();
    let gap = countTime - now;

    if (gap <= 10000) {
        countDate.setFullYear(countDate.getFullYear() + 1);
    }
    countTime = countDate.getTime();
    gap = countTime - now;

    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    // console.log(oneDay);

    const textDay = Math.floor(gap / oneDay);
    //console.log(textDay);
    const textHour = Math.floor((gap % oneDay) / oneHour);
    //console.log(textHour);
    const textMinute = Math.floor((gap % oneHour) / oneMinute);
    //console.log(textMinute);
    const textSecond = Math.floor((gap % oneMinute) / oneSecond);
    // console.log(textSecond);

    $(".count-down-day").text(textDay);
    $(".count-down-hour").text(textHour);
    $(".count-down-minute").text(textMinute);
    $(".count-down-second").text(textSecond);


    //if the time is very low, I will reset the timer with one year

};

setInterval(countDown, 1000);