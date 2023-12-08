import { memo, SVGProps } from 'react';

const Vector9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 303 343' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.686717 62.3789C3.72555 140.216 5.74519 182.621 12.3206 246.624C17.883 271.099 23.7669 281.226 42.8597 288.134C118.897 309.838 172.236 327.216 234.092 342.024C259.277 341.42 268.255 334.859 276.265 320.177C289.953 268.391 292.512 211.689 302.442 139.573C303.773 111.761 298.267 100.465 276.265 88.5957C195.658 54.7465 78.4886 8.48892 78.4886 8.48892C78.4886 8.48892 56.0918 -2.28758 42.8597 0.478247C27.3842 5.33123 20.6517 10.7047 12.3206 21.5973C2.70942 34.4498 0.192102 43.3867 0.686717 62.3789Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(Vector9Icon);
export { Memo as Vector9Icon };