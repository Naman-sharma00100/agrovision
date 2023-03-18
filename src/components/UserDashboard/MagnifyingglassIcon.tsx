import { memo, SVGProps } from 'react';

const MagnifyingglassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.7812 20.3125C16.4929 20.3125 20.3125 16.4929 20.3125 11.7812C20.3125 7.06957 16.4929 3.25 11.7812 3.25C7.06957 3.25 3.25 7.06957 3.25 11.7812C3.25 16.4929 7.06957 20.3125 11.7812 20.3125Z'
      stroke='black'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.8142 17.8146L22.7501 22.7505'
      stroke='black'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(MagnifyingglassIcon);
export { Memo as MagnifyingglassIcon };
