import { memo, SVGProps } from 'react';

const Ellipse100Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={32} cy={32} r={32} fill='#7A4CFC' />
  </svg>
);
const Memo = memo(Ellipse100Icon);
export { Memo as Ellipse100Icon };
