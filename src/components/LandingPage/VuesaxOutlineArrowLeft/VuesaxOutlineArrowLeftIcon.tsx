import { memo, SVGProps } from 'react';

const VuesaxOutlineArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M40 55.12C39.4933 55.12 38.9867 54.9333 38.5867 54.5333L21.2 37.1467C18.3733 34.32 18.3733 29.68 21.2 26.8533L38.5867 9.46667C39.36 8.69333 40.64 8.69333 41.4133 9.46667C42.1867 10.24 42.1867 11.52 41.4133 12.2933L24.0267 29.68C22.7467 30.96 22.7467 33.04 24.0267 34.32L41.4133 51.7067C42.1867 52.48 42.1867 53.76 41.4133 54.5333C41.0133 54.9067 40.5067 55.12 40 55.12Z'
      fill='#111018'
    />
  </svg>
);
const Memo = memo(VuesaxOutlineArrowLeftIcon);
export { Memo as VuesaxOutlineArrowLeftIcon };
