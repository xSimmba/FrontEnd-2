class Veiculo {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    description(): string{
        return `Este ${this.marca} ${this.modelo} do ano ${this.ano}`
    }
    
}

class Carro extends Veiculo {

    doors: number;

    constructor(marca: string, modelo: string, ano: number, doors: number) {

        super(marca, modelo, ano);
        this.doors = doors;

    }
    description(): string{
        return `${super.description()} tem ${this.doors} portas`;
    }
}


const myCar = new Carro('Toyota', 'Corolla', 2023, 4);

console.log(myCar.description());