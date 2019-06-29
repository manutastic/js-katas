export function kata1 (number) {
    return number.toString().split('').sort((a,b)=>{return b-a}).join('');
}
