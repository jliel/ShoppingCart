import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json';

export const Store = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {storeItems.map((item) => (
                <StoreItem key={item.id} {...item} />
            ))}
        </div>
    );
}