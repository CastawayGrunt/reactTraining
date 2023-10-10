class Item {
    title: string;
    amount: number;
    date: Date;

    constructor(ItemTitle: string, ItemAmount: number, ItemDate: Date) {
        this.title = ItemTitle;
        this.amount = ItemAmount;
        this.date = ItemDate;
    }
}
export default Item;