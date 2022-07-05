//
class Products {
  constructor(id,brand, pic, name, amount, price, discount, desc, total) {
    (this.id = id),
      (this.pic = pic),
      this.brand = brand;
      (this.name = name),
      (this.amount = amount),
      (this.price = price),
      (this.discount = discount),
      (this.desc = desc);
    this.total = total;
  }
  getTotal() {
    return ((parseInt(this.price)*parseInt(this.amount)) * (100 - parseInt(this.discount))) /100;
  }
}
 