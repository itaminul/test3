export class OrderCreateEvent {
  constructor(
    public readonly userId: string,
    public readonly name: string,
    public readonly price: number
  ) {}
  toString() {
    return JSON.stringify({
      userId: this.userId,
      name: this.name,
      price: this.price,
    });
  }
}
