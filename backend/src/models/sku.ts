import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/db";

export class SKU extends Model {
  public title!: string;
  public genus!: string;
  public cultivar!: string;
  public color!: string;
  public size!: string;
  public maturity!: number;
  public grower!: string;
  public source!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}


SKU.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    genus: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    cultivar: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    color: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    size: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    maturity: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    grower: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    source: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "skus",
    sequelize: database, // this bit is important
  }
);