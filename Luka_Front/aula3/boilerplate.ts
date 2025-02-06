// Loja online

type User = {
    name: string;
    transactions: Array<string>;
    points: number;
}

type Product = {
    id: number;
    name: string;
    price: number;
}

type Cart = {
    items: Product[];
    total: number;
}

const user: User = {
    name: "UserName",
    transactions: [],
    points: 0,
  };
  
  const product: Product = {
    id: 0,
    name: "",
    price: 0,
  };
  
  const cart: Cart = {
    items: [],
    total: 0,
  };