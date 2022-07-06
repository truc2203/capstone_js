//
class Products {
  constructor(id,brand, pic, name, amount, price, discount, desc, total) {
    (this.id = id),
      (this.pic = pic),
      this.brand = brand;
      (this.name = name),
      (this.amount = parseInt(amount)),
      (this.price = parseInt(price)),
      (this.discount = parseInt(discount)),
      (this.desc = desc);
  }
  getTotal() {
    return ((this.price*this.amount) * (100 -this.discount)) /100;
  }
}
 