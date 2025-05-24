import { IPerimetrable } from "./IPerimetrable";

class Rectangle implements IPerimetrable {
    private base : number;
    private alçada : number;

    constructor(base : number, alçada : number) {
        this.base = base;
        this.alçada = alçada;
    }
    perimetre(): number {
        return this.base*2 + this.alçada*2;
    }
}

class Quadrat extends Rectangle {
    constructor(costat : number) {
        super(costat, costat);
    }
}

class Cercle implements IPerimetrable {
    private radi : number;

    constructor(radi : number) {
        this.radi = radi;
    }

    perimetre(): number {
        return 2*Math.PI*this.radi;
    }
}

let formes : IPerimetrable[] = [];
formes.push(new Cercle(1));
formes.push(new Rectangle(3, 4));
formes.push(new Quadrat(3));

for (let forma of formes) {
    console.log(forma);
}