import classnames from 'classnames';
import type { ProductViewProps } from '../model/types';

export const ProductView = ({
  product,
  hidePrice,
  modalView,
}: ProductViewProps) => (
  <figure
    className={classnames(      
      'flex',
      {
        'flex-col': !modalView
      },      
      'xl:flex-row',
      'xl:items-center'
    )}
  >
    <div className={classnames({'w-full': !modalView }, { 'items-center': modalView }, 'flex w-32 min-w-32')}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className='w-full h-auto'
      />
    </div>
    
    <figcaption>
      <h3 className='p-3 mx-auto text-xl'>{product.name}</h3>
      <p className='mx-auto text-sm'>{product.description}</p>
      {!hidePrice && (
        <p className='mx-auto text-md text-red-400 text-right'>
          ${product.price.toFixed(2)}
        </p>
      )}
    </figcaption>
  </figure>
);
