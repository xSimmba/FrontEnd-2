type Player = {
    name: string;
    age: number;
    game: string;
}

const Player1: Partial<Player> = {name:"julio"};
const Player2: Readonly<Player> = {name:"Cabro", age:23, game:"Naruto"};
const Player3: Omit<Player, "age"> = { name:"jaime", game:"DonkeyShot"};
const Player4: Pick<Player, "name"> = {name:"julio"};


class ListHandler <T> {
    list: T[] = [];

    add(item: T): void {
        this.list.push(item);
    }
    remove(item: T): void {
        this.list= this.list.filter(existingitem => existingitem !== item);
    }
    getAll(): T[] {
        return this.list
    }
}


// Example usage:
const numberList = new ListHandler<number>();
numberList.add(1);
numberList.add(2);
numberList.add(3);

console.log(numberList.getAll()); // [1, 2, 3]

numberList.remove(2);
console.log(numberList.getAll()); // [1, 3]

const stringList = new ListHandler<string>();
stringList.add("Apple");
stringList.add("Banana");

console.log(stringList.getAll()); // ["Apple", "Banana"]

stringList.remove("Apple");
console.log(stringList.getAll()); // ["Banana"]