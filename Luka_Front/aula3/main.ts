interface Carro {
    marca: string,
    modelo: string,
    ano?: number

}
const McQueen: Carro = {
    marca: "Ford",
    modelo: "GT",
    ano: 2002
};

const Beater: Carro = {
    marca: "Toyota",
    modelo: "Corolla"
};


interface Payment {
    valor: number,
    metodo: PaymentMethod,
    detalhes: string,
}


type PaymentMethod = "Paypal" | "MbWay" | "Cartão" ;


function PaymentProcess(pagamento: Payment): string { 
    return `Payment of ${pagamento.valor} has been processed using ${pagamento.metodo}.`; // Here, you could process the payment and return a message
}

// Example usage:
const pagamento1: Payment = {
    valor: 100,
    metodo: "Paypal",
    detalhes: "Payment for online service"
};

console.log(PaymentProcess(pagamento1));