import { memo, SVGProps } from 'react';

const Ellipse85Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 65 66' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={32.5} cy={33} rx={32.5} ry={33} fill='#FC8E8E' />
  </svg>
);
const Memo = memo(Ellipse85Icon);
export { Memo as Ellipse85Icon };
