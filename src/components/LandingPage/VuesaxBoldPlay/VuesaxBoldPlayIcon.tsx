import { memo, SVGProps } from 'react';

const VuesaxBoldPlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.49 9.6L5.6 16.77C4.9 17.19 4 16.69 4 15.87V7.87C4 4.38 7.77 2.2 10.8 3.94L15.39 6.58L17.48 7.78C18.17 8.19 18.18 9.19 17.49 9.6Z'
      fill='#1700FF'
    />
    <path
      d='M18.09 15.46L14.04 17.8L10 20.13C8.55 20.96 6.91 20.79 5.72 19.95C5.14 19.55 5.21 18.66 5.82 18.3L18.53 10.68C19.13 10.32 19.92 10.66 20.03 11.35C20.28 12.9 19.64 14.57 18.09 15.46Z'
      fill='#1700FF'
    />
  </svg>
);
const Memo = memo(VuesaxBoldPlayIcon);
export { Memo as VuesaxBoldPlayIcon };
