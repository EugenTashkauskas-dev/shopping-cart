import classnames from 'classnames';

import type { CarouselItemProps } from '../model/CarouselItem.types';

export const CarouselItem = <T,>({
  item,
  renderItem,
}: CarouselItemProps<T>) => {
  return (
    <div
      className={classnames(
        'carousel-item',
        'text-center',
        'relative',
        'min-w-full',
        'xl:min-w-1/3',
        'md:min-w-1/2',
        'snap-start',
        'border',
        'border-gray-300',
        'hover:bg-gray-100',
        'p-2',
        'transition',
        'transition-all',
        'ease-in-out',
      )}
    >
      {renderItem(item)}
    </div>
  );
};
