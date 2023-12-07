import { memo, SVGProps } from 'react';

const VuesaxLinearCodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.1675 6.75C5.9025 7.1175 6.5325 7.6725 6.99 8.3625C7.2525 8.7525 7.2525 9.255 6.99 9.645C6.5325 10.3275 5.9025 10.8825 5.1675 11.25'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9.75 11.25H12.75' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VuesaxLinearCodeIcon);
export { Memo as VuesaxLinearCodeIcon };
