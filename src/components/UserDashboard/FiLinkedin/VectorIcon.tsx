import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M4 0H0V12H4V0Z' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
