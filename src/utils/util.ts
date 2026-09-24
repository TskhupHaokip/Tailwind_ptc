export const Capitalize = (text:string) => {
    return text[0].toUpperCase() + text.slice(1);

}

export const Title = (text:string) => {

    return text
        .split(" ")
        .map(Capitalize)
        .join(" ");

}




