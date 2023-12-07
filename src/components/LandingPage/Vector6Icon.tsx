import { memo, SVGProps } from 'react';

const Vector6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 379 378' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M45.5114 0C14.1794 7.93582 5.4727 16.4044 0 36.0747L18.0476 378H351.536C372.274 366.931 378.637 350.44 379 299.577C368.705 197.51 356.141 139.329 337.412 36.0747C327.968 21.7603 325.915 12.2025 288.762 10.9793L45.5114 0Z'
      fill='#1700FF'
    />
  </svg>
);
const Memo = memo(Vector6Icon);
export { Memo as Vector6Icon };
