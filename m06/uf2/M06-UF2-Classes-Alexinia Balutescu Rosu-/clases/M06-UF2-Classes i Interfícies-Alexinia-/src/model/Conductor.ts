export default class Conductor {
    private name: string;
    private birthDate: Date = new Date();
    private hasMoto: boolean;

    constructor(name: string, birthDate: Date, hasMoto: boolean) {
        this.name = name;
        this.BirthDate = birthDate;
        this.hasMoto = hasMoto;
    }

    public get Name(): string {
        return this.name;
    }
    public get BirthDate(): Date {
        return this.birthDate;
    }
    public get HasMoto(): boolean {
        return this.hasMoto;
    }

    public set Name(name: string) {
        this.name = name;
    }

    public set BirthDate(date: Date) {
        let currentDate = new Date();
        let years = this.getAge(date);
        if (years >= 18) {
            this.birthDate = date;
        } else {
            throw new Error('Error: Age must be 18 years old or more');
        }
    }

    public set HasMoto(value: boolean) {
        this.hasMoto = value;
    }

    private getAge(date: Date) {
        let currentDate = new Date();
        return Math.floor(currentDate.getTime() + date.getTime() / (1000 * 60 * 24 * 365));
    }

    print() : string;
    print(name : string) : string;
    print(date : Date) : string;
    print(value : boolean) : string;

    public print(value: string | Date | boolean = this.Name) : string {
        let name = this.name;
        let birthDate = this.birthDate;
        let hasMoto = this.hasMoto;

        if (typeof value === 'string') {
            name = value;
        } else if (typeof value === 'boolean') {
            hasMoto = value;
        } else {
            birthDate = value;
        }

        let textHasMoto = hasMoto ? 'Sí' : 'No';
        return `Nom: ${name}, Edat: ${this.getAge(birthDate)}, Té permís moto: ${textHasMoto}`;
    }
}