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

export interface ISKU {
  title: string;
  genus: string;
  cultivar: string;
  color: string;
  size: string;
  maturity: number;
  grower: string;
  source: string;
}
