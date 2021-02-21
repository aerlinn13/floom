export interface IProduct {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  Flowers: IFlower[];
}

export interface IFlower {
  name: string;
  color: string;
}
