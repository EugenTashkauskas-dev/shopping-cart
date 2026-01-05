import classnames from 'classnames';
import Arrow from '@assets/arrow.svg?react';

import type { NavButtonProps } from '../model/Carousel.types';

export const NavButton = ({ disabled, onClick, position }: NavButtonProps) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={classnames(
      'hover:green-500',
      'text-black',
      'disabled:text-gray-500',
      'text-center',
      'absolute',
      'w-10',
      'h-full',
      'top-0',
      'z-10',
      'p-0',
      'm-0',
      'transition-all',
      'ease-in-out',
      'duration-300',      
      {
        'left-0': position === 'left',
        'right-0': position === 'right',
      },
    )}
  >
    <Arrow
      className={classnames('h-12 w-10', {
        'rotate-180': position === 'right',
      })}
    />
  </button>
);
