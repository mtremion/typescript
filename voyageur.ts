class Sejour
{
    private _nom:string
    private _prix:number

    constructor(sonNom:string,sonPrix:number)
    {
        this._nom = sonNom
        this._prix = sonPrix
    }

    setNom(sonNom:string)
    {
        this._nom = sonNom
    }

    getNom():string
    {
        return this._nom
    }

    setPrix(sonPrix:number)
    {
        this._prix = sonPrix
    }

    getPrix():number
    {
        return this._prix
    }
}

let paris = new Sejour('Paris',100)
let londres = new Sejour('Londres',200)
let madrid = new Sejour('Madrid',200)
let montreal = new Sejour('Montréal',600)

const tabSejour:Sejour[] = [paris,londres,madrid,montreal]


class SejourService
{
    private _sejours:Sejour[]

    constructor(desSejours:Sejour[])
    {
        this._sejours = desSejours
    }

    rechercheSejourParNom()
    {
        return new Promise((resolve,reject): => 
        {
            setTimeout(() => 
            {
                const tripResearch = Array.from(this.trips).find(element=>tripName===element.name)
                if(tripResearch)
                {
                    resolve(tripResearch)
                }
                else
                {
                    reject('Pas de trip enregistré dans la ville de : '+tripName)
                }
            },2000)
        }
        )
    }
}

