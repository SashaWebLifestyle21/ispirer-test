export const convertDate = (unixDate: number) => {
    const date = new Date(unixDate * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    // const seconds = "0" + date.getSeconds();
    return  hours + ':' + minutes.substr(-2)
}