import { memo, SVGProps } from 'react';

const Vector8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 344 378' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M35.8197 61.8502C28.8797 139.437 25.46 181.752 23.7966 246.071C26.1834 271.056 30.724 281.852 48.7766 291.145C121.414 322.395 172.093 346.451 231.548 369.048C256.602 371.669 266.346 366.31 276.168 352.773C296.365 303.162 306.155 247.253 325.225 176.999C330.102 149.586 326.087 137.679 305.783 123.093C230.166 79.2136 119.874 18.352 119.874 18.352C119.874 18.352 99.0395 4.79991 85.5624 5.85088C69.5933 8.68499 62.229 13.1534 52.5733 22.8912C41.3974 34.409 37.7579 42.9507 35.8197 61.8502Z'
      fill='#1700FF'
    />
  </svg>
);
const Memo = memo(Vector8Icon);
export { Memo as Vector8Icon };