import { memo, SVGProps } from 'react';

const ChecksIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.2969 7.54688L5.39062 15.4531L1.4375 11.5'
      stroke='#00CEAA'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.5624 7.54688L13.6562 15.4531L11.5538 13.3508'
      stroke='#00CEAA'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ChecksIcon);
export { Memo as ChecksIcon };
