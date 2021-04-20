export const debounce = (func, delay) => {
    let inDebounce;
    return function () {
        clearTimeout(inDebounce);
        inDebounce = setTimeout(() => func(...arguments), delay)
    }
}