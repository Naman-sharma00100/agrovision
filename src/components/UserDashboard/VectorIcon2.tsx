import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6 0.666667C7.39239 0.666667 8.72775 1.19345 9.71231 2.13113C10.6969 3.06881 11.25 4.34058 11.25 5.66667V11.5H7.75V5.66667C7.75 5.22464 7.56563 4.80072 7.23744 4.48816C6.90925 4.1756 6.46413 4 6 4C5.53587 4 5.09075 4.1756 4.76256 4.48816C4.43437 4.80072 4.25 5.22464 4.25 5.66667V11.5H0.75V5.66667C0.75 4.34058 1.30312 3.06881 2.28769 2.13113C3.27226 1.19345 4.60761 0.666667 6 0.666667V0.666667Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
