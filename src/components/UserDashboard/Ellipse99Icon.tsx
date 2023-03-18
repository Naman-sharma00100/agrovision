import { memo, SVGProps } from 'react';

const Ellipse99Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={11.5} cy={11.5} r={11.5} fill='#DB2828' />
  </svg>
);
const Memo = memo(Ellipse99Icon);
export { Memo as Ellipse99Icon };
