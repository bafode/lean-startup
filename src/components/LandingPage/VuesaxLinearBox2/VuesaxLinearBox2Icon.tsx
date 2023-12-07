import { memo, SVGProps } from 'react';

const VuesaxLinearBox2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M14.0025 14.0025L15.6675 13.17V11.085M10.665 7.335L9 8.1675L10.665 7.335ZM9 8.1675L7.335 7.335L9 8.1675ZM9 8.1675V10.2525V8.1675ZM15.6675 4.83L14.0025 5.6625L15.6675 4.83ZM15.6675 4.83L14.0025 3.9975L15.6675 4.83ZM15.6675 4.83V6.915V4.83ZM10.665 2.3325L9 1.5L7.335 2.3325H10.665ZM2.3325 4.83L3.9975 3.9975L2.3325 4.83ZM2.3325 4.83L3.9975 5.6625L2.3325 4.83ZM2.3325 4.83V6.915V4.83ZM9 16.5L7.335 15.6675L9 16.5ZM9 16.5L10.665 15.6675L9 16.5ZM9 16.5V14.415V16.5ZM3.9975 14.0025L2.3325 13.17V11.085L3.9975 14.0025Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VuesaxLinearBox2Icon);
export { Memo as VuesaxLinearBox2Icon };
