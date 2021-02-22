import { SKU } from "../../models/sku";
import flowersTodayProvider from './flowerstodayProvider';
import flowersTomorrowProvider from './flowerstomorrowProvider';

const wholesalerService = () => {
    SKU.destroy();
    flowersTodayProvider();
    flowersTomorrowProvider();
}

export default wholesalerService;