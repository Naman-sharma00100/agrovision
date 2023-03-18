import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4.25 0.5H0.75V10.5H4.25V0.5Z' fill='white' />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
