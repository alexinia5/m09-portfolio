export let darkColor : string = '#000';
export let darkText : string = '#fff';
export let lightColor : string = '#fff';
export let lightText : string = '#000';


export function TogleTheme(element : HTMLElement | null) {
    if (element) {
        if (element.style.backgroundColor != darkColor) {
            element.style.backgroundColor = darkColor;
            element.style.color = darkText;
        } else {
            element.style.backgroundColor = lightColor;
            element.style.color = lightText;
        }
    }
}

export function setDarkColor (value : string) {
    darkColor = value;
}