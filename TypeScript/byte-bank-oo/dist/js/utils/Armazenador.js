export class Armazenador {
    constructor() { }
    static salvar(key, value) {
        const valueAsString = JSON.stringify(value);
        localStorage.setItem(key, valueAsString);
    }
    static obter(key, reviver) {
        const value = localStorage.getItem(key);
        if (value === null) {
            return null;
        }
        if (reviver) {
            return JSON.parse(value, reviver);
        }
        return JSON.parse(value);
    }
}
