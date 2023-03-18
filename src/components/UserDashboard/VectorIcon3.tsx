import { memo, SVGProps } from 'react';

const VectorIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M2.5 4C3.4665 4 4.25 3.25381 4.25 2.33333C4.25 1.41286 3.4665 0.666667 2.5 0.666667C1.5335 0.666667 0.75 1.41286 0.75 2.33333C0.75 3.25381 1.5335 4 2.5 4Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon3);
export { Memo as VectorIcon3 };
