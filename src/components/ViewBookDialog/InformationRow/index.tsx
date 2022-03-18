import { Box, Typography } from '@mui/material';

interface InformationRowProps {
  value: string | number | undefined;
  label: string;
}

const InformationRow: React.FC<InformationRowProps> = ({ value, label }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="body2">{label}</Typography>
      <Typography variant="body2" color="text.secondary">
        {value}
      </Typography>
    </Box>
  );
};
export default InformationRow;
