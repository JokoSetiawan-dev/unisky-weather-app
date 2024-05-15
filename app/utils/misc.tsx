export const kelvinToCelsius = (kelvin:number) => {
    return Math.round(kelvin - 273.15)
}

export const toProperCase = (str: string) => {
    return str.replace(/\w\S*/g, (word) =>
        word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    );
};