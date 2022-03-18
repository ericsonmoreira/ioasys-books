import { InputBase, InputBaseProps, Typography } from '@mui/material';
import { Box } from '@mui/system';

interface CustonTextFieldProps extends InputBaseProps {
  label: string;
}

const CustonTextField: React.FC<CustonTextFieldProps> = (props) => {
  const { label, children, ...rest } = props;

  return (
    <Box
      sx={{
        background: 'rgba(0, 0, 0, 0.32)',
        padding: '8px 16px',
        borderRadius: '4px',
      }}
    >
      <Typography color="#fff">{label}</Typography>
      <InputBase sx={{ flex: 1, color: '#fff' }} {...rest} />
      {children}
    </Box>
  );
};

export default CustonTextField;
