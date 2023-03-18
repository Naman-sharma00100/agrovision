import { memo, SVGProps } from 'react';

const Ellipse95Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 51 52' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={25.5} cy={26} rx={25.5} ry={26} fill='#FFC48E' />
  </svg>
);
const Memo = memo(Ellipse95Icon);
export { Memo as Ellipse95Icon };
