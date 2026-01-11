import { products } from "@entities/product/model/products.mock";
import type { Product } from "@entities/product/model/types";
import { ProductView } from "@entities/product/ui/Product";
import { AddToCartButton } from "@features/AddToCart/ui/AddToCartButton";
import { Carousel } from "@shared/components/Carousel/ui/Carousel";

export const ProductsCarousel = () => {
  return (
    <>
      <h3 className="text-2xl leading-8 font-semibold mb-12 text-slate-700 text-center">
        Carousel
      </h3>
      <Carousel
        items={products}
        getItemKey={(product: Product, index: number) =>
          `${index}_${product.id}`
        }
        renderItem={(product: Product) => (
          <div className="h-full flex flex-col justify-between align-bottom">
            <ProductView product={product} />
            <AddToCartButton productId={product.id} />
          </div>
        )}
      />
    </>
  );
};
