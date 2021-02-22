import flowersTodayProvider from './flowerstodayProvider';
import flowersTomorrowProvider from './flowerstomorrowProvider';

const wholesalerService = () => {
    flowersTodayProvider();
    flowersTomorrowProvider();
}

export default wholesalerService;