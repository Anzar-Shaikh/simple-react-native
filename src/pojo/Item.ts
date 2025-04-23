class Item {
  id!: number;
  name!: string;
  stock!: number;
  unit!: string;

  constructor(id: number, name: string, unit: string, stock: number) {
    this.id = id;
    this.name = name;
    this.stock = stock;
    this.unit = unit;
  }
}

export default Item;
