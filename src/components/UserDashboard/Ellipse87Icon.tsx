import { memo, SVGProps } from 'react';

const Ellipse87Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 45 90' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 90C24.8528 90 45 69.8528 45 45C45 20.1472 24.8528 0 0 0' stroke='#FC8E8E' strokeWidth={10} />
  </svg>
);
const Memo = memo(Ellipse87Icon);
export { Memo as Ellipse87Icon };
