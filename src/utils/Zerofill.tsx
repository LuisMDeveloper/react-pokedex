export function zerofill(number: number, fill: number) {
    let longNumber = `${'0'.repeat(fill)}${number}`;
    return longNumber.substring(longNumber.length - fill)
}
