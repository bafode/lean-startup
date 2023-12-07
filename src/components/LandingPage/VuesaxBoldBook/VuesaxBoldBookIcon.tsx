import { memo, SVGProps } from 'react';

const VuesaxBoldBookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22 4.85V16.74C22 17.71 21.21 18.6 20.24 18.72L19.93 18.76C18.29 18.98 15.98 19.66 14.12 20.44C13.47 20.71 12.75 20.22 12.75 19.51V5.6C12.75 5.23 12.96 4.89 13.29 4.71C15.12 3.72 17.89 2.84 19.77 2.68H19.83C21.03 2.68 22 3.65 22 4.85Z'
      fill='white'
    />
    <path
      d='M10.71 4.71C8.88 3.72 6.11 2.84 4.23 2.68H4.16C2.96 2.68 1.99 3.65 1.99 4.85V16.74C1.99 17.71 2.78 18.6 3.75 18.72L4.06 18.76C5.7 18.98 8.01 19.66 9.87 20.44C10.52 20.71 11.24 20.22 11.24 19.51V5.6C11.24 5.22 11.04 4.89 10.71 4.71ZM5 7.74H7.25C7.66 7.74 8 8.08 8 8.49C8 8.91 7.66 9.24 7.25 9.24H5C4.59 9.24 4.25 8.91 4.25 8.49C4.25 8.08 4.59 7.74 5 7.74ZM8 12.24H5C4.59 12.24 4.25 11.91 4.25 11.49C4.25 11.08 4.59 10.74 5 10.74H8C8.41 10.74 8.75 11.08 8.75 11.49C8.75 11.91 8.41 12.24 8 12.24Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VuesaxBoldBookIcon);
export { Memo as VuesaxBoldBookIcon };
