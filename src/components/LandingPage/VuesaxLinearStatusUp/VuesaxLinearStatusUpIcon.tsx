import { memo, SVGProps } from 'react';

const VuesaxLinearStatusUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M5.16 13.6125V12.06' stroke='white' strokeWidth={1.5} strokeLinecap='round' />
    <path d='M9 13.6125V10.5075' stroke='white' strokeWidth={1.5} strokeLinecap='round' />
    <path d='M12.84 13.6125V8.9475' stroke='white' strokeWidth={1.5} strokeLinecap='round' />
    <path
      d='M12.84 4.3875L12.495 4.7925C10.5825 7.0275 8.0175 8.61 5.16 9.3225'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
    <path
      d='M10.6425 4.3875H12.84V6.5775'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VuesaxLinearStatusUpIcon);
export { Memo as VuesaxLinearStatusUpIcon };
