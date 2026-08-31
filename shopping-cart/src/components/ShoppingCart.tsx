import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";


export const ShoppingCart = () => {
  const { isOpen, closeCart, cartItems, cartQuantity } = useShoppingCart();

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close shopping cart"
          className="fixed inset-0 z-40 bg-black/30"
          onClick={closeCart}
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full text-black max-w-sm bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart drawer"
      >
        <div className="flex h-full flex-col p-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Your cart</h2>
            <button
              type="button"
              className="rounded-full border border-gray-200 px-2 py-1 text-sm"
              onClick={closeCart}
            >
              ✕
            </button>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-3 overflow-y-auto">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </ul>
          )}

          <div className="mt-auto border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>Total</span>
              <span>{formatCurrency(cartItems.reduce((total, item) => {
                const storeItem = storeItems.find((i) => i.id === item.id);
                return total + (storeItem ? storeItem.price * item.quantity : 0);
              }, 0))}</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
