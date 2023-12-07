import { memo, SVGProps } from 'react';

const Vector5Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1200 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0C960 0 1200 0 1200 0' stroke='white' strokeLinecap='round' />
  </svg>
);
const Memo = memo(Vector5Icon);
export { Memo as Vector5Icon };
