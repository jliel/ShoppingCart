import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="card hover:cursor-pointer w-full rounded-2xl max-w-[24rem] bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <figure className="overflow-hidden rounded-t-2xl">
        <img src={imgUrl} alt={name} className="h-52 w-full object-cover" />
      </figure>
      <div className="flex justify-between items-center card-body p-4">
        <h2 className="card-title text-xl font-bold">{name}</h2>
        <p className="text-2xl font-bold text-indigo-900">
          {formatCurrency(price)}
        </p>
      </div>
      <div className="card-actions justify-end p-4">
        {quantity === 0 ? (
          <button 
            className="w-full bg-indigo-600 text-white hover:bg-indigo-800 rounded-md h-10 hover:cursor-pointer"
            onClick={() => increaseCartQuantity(id)}
          >
            + Add to Cart
          </button>
        ) : (
          <div className="w-full flex items-center justify-center gap-2 flex-col">
            <div className="w-full flex items-center justify-center gap-2">
              <button 
                className="w-10 bg-indigo-600 text-white hover:bg-indigo-800 rounded-md h-10 hover:cursor-pointer"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <p className="text-lg font-semibold">
                <span className="text-indigo-900 font-bold text-xl">
                  {quantity}
                </span>{" "}
                in cart
              </p>
              <button 
                className="w-10 bg-indigo-600 text-white hover:bg-indigo-800 rounded-md h-10 hover:cursor-pointer"
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <button 
                className="w-full px-4 bg-red-600 text-white hover:bg-red-800 rounded-md h-10 hover:cursor-pointer"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
