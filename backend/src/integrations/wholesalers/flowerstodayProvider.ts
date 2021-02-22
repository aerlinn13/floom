import axios from 'axios';
import { SKU } from "../../models/sku";

const flowersTodayProvider = (): void => {
    axios.get('http://localhost:8003/supply').then(response => {
        response.data.forEach(async (sku: any) => {
            await SKU.create({
                 title: sku.title,
                 genus: sku.defs.genus,
                 cultivar: sku.defs.cultivar,
                 color: sku.defs.colour,
                 size: sku.size,
                 maturity: sku.maturity,
                 grower: sku.defs.grower,
                 source: 'flowerstoday'
            });
        })
    })
}

export default flowersTodayProvider;