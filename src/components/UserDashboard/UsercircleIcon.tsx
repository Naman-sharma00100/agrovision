import { memo, SVGProps } from 'react';

const UsercircleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16 28C22.6274 28 28 22.6274 28 16C28 9.3726 22.6274 4.00002 16 4.00002C9.37258 4.00002 4 9.3726 4 16C4 22.6274 9.37258 28 16 28Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.9999 20C18.7613 20 20.9999 17.7614 20.9999 15C20.9999 12.2385 18.7613 9.99997 15.9999 9.99997C13.2385 9.99997 10.9999 12.2385 10.9999 15C10.9999 17.7614 13.2385 20 15.9999 20Z'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.9751 24.925C8.72749 23.443 9.87555 22.1983 11.292 21.3289C12.7085 20.4595 14.3381 19.9992 16.0001 19.9992C17.6621 19.9992 19.2917 20.4595 20.7082 21.3289C22.1246 22.1983 23.2727 23.443 24.0251 24.925'
      stroke='black'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(UsercircleIcon);
export { Memo as UsercircleIcon };
