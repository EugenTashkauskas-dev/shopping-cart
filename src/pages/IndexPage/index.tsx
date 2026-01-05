import { ShowShoppingCartModalButton } from "@features/ShowShoppingCartModal/ui/ShowShoppingCartModalButton";
import { ProductsCarousel } from "@widgets/ProductsCarousel/ui/ProductsCarousel";
import { ShoppingCartModal } from "@widgets/ShoppingCart/ui/ShoppingCartModal";

export const IndexPage = () => (
  <>
    <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700 text-center">
      Shopping Cart Test
    </h2>
    <div className="relative pt-5">
      <ProductsCarousel />
      <ShoppingCartModal />
      <ShowShoppingCartModalButton />
    </div>
  </>
);
