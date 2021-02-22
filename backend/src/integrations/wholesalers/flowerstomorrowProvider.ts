import axios from "axios";
import { SKU } from "../../models/sku";

const flowersTomorrowProvider = (): void => {
    axios.get('http://localhost:8004/stock').then(response => {
        const skus: any[] = [];
        response.data.forEach((unit: any) => {
            unit.skus.forEach((sku: any) => {
                skus.push({ ...sku, genus: unit.genus })
            })
        })

        skus.forEach(async (sku: any) => {
            await SKU.create({
                 title: sku.title,
                 genus: sku.genus,
                 cultivar: sku.cultivar,
                 color: sku.colour,
                 size: sku.size,
                 maturity: sku.maturity,
                 grower: sku.grower,
                 source: 'flowerstomorrow'
            });
        })
    })
}

export default flowersTomorrowProvider;