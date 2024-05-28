export class Armazenador {

    private constructor(){}


    public static salvar(key: string, value: any): void {

        const valueAsString = JSON.stringify(value);
        localStorage.setItem(key, valueAsString);
    }

    public static obter(key: string, reviver?: (this: any, key: string, value: any) => any) {

        const value = localStorage.getItem(key);

        if(value === null){
            return null;
        }

        if (reviver){
            return JSON.parse(value, reviver);
        }

        return JSON.parse(value);
    }


}