import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

interface CartItemProps {
  id: number;
  quantity: number;
}

export const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find((i) => i.id === id);
    
    if (item == null) return null;

    return (
        <li className="border-b border-gray-200 pb-2">
            <div className="flex items-center justify-between gap-2">
                <img src={item.imgUrl} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex flex-col">
                    <span className="font-semibold">{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-sm">
                        {formatCurrency(item.price * quantity)}
                    </span>
                    <button 
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        onClick={() => removeFromCart(id)}
                    >   
                        X
                    </button>
                </div>
            </div>
        </li>
    );
}
