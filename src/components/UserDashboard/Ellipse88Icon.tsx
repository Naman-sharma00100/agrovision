import { memo, SVGProps } from 'react';

const Ellipse88Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={50} cy={50} r={50} stroke='#F6F6F6' strokeWidth={10} />
  </svg>
);
const Memo = memo(Ellipse88Icon);
export { Memo as Ellipse88Icon };
