import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 236 236' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.2}
      d='M236 118C236 183.17 183.17 236 118 236C52.8304 236 0 183.17 0 118C0 52.8304 52.8304 0 118 0C183.17 0 236 52.8304 236 118ZM58.6234 118C58.6234 150.793 85.2072 177.377 118 177.377C150.793 177.377 177.377 150.793 177.377 118C177.377 85.2072 150.793 58.6234 118 58.6234C85.2072 58.6234 58.6234 85.2072 58.6234 118Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
