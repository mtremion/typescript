const lg = console.log

class Meteo{
 constructor(private _ville:string, private _temperature:number)
 {

 }

 toString():string {
    return  `${this._ville} - ${this._temperature}°C`
}
}

let nantesCeMatin = new Meteo('Nantes', 12);

lg(nantesCeMatin.toString())