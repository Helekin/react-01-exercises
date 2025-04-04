export interface IMenuItem {
  id: number;
  name: string;
  price: number;
}

export interface OrdenItem extends IMenuItem {
  quantity: number;
}
