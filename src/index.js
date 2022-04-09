// main JS file that initiates this App/page JS modules
import { createLoadingComponent } from './components/loading/loading.js';
import { addEventToFilter } from './components/filter/filter.js';
import { createShoppingBagComponent } from './components/shoppingBag/shoppingBag.js';
import { getItensToShopping } from './components/shoppingItem/shoppingItem.js';

addEventToFilter();
createShoppingBagComponent();
createLoadingComponent();
getItensToShopping();
