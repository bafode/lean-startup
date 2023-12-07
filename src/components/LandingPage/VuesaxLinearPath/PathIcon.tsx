import { memo, SVGProps } from 'react';

const PathIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_323_216)'>
      <path
        d='M14.8425 5.4525L12.57 3.18C11.7075 2.3175 10.53 2.3625 9.9525 3.285L8.685 5.2875L12.735 9.3375L14.7375 8.07C15.6 7.5225 15.6525 6.2625 14.8425 5.4525Z'
        stroke='white'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.685 5.2875L5.7375 5.1075C4.095 5.01 3.5175 5.5125 3.3375 7.08L2.6025 13.32C2.445 14.6325 3.3975 15.5775 4.7025 15.42L10.9425 14.685C12.51 14.4975 13.08 13.9275 12.915 12.285L12.7425 9.3375'
        stroke='white'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.4575 14.565L5.73 12.285'
        stroke='white'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_323_216'>
        <rect width={18} height={18} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(PathIcon);
export { Memo as PathIcon };
