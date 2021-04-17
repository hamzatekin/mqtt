export const formettedDate = () => {
    let a = new Date();
    let minutes = a.getMinutes();
    let seconds = a.getSeconds();
    let hours = a.getHours();
    let ampm = hours >= 12 ? 'p.m' : 'a.m';

    return hours + ':' + minutes + ':' + seconds + ' ' + ampm;
}

// export const formattedNumber = (number) => {
//     if (!number) {
//         return 0;
//     }

//     return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
