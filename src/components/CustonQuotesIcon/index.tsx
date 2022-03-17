import { SvgIcon, SvgIconProps } from '@mui/material';

const CustonQuotesIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.5"
        d="M17.576 10.712C17.576 8.632 16.172 7.228 14.092 7.228C13.572 7.228 13.156 7.436 13.052 7.488C13.156 5.252 15.028 3.224 17.108 2.86V0C14.04 0.312002 9.62 2.912 9.62 9.412C9.62 12.272 11.388 14.144 13.78 14.144C15.964 14.144 17.576 12.584 17.576 10.712ZM7.956 10.712C7.956 8.632 6.5 7.228 4.472 7.228C3.952 7.228 3.484 7.436 3.38 7.488C3.484 5.252 5.356 3.224 7.488 2.86V0C4.368 0.312002 0 2.912 0 9.412C0 12.272 1.716 14.144 4.16 14.144C6.344 14.144 7.956 12.584 7.956 10.712Z"
        fill="#333333"
      />
    </SvgIcon>
  );
};

export default CustonQuotesIcon;
