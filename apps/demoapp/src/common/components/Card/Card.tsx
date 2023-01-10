import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
type Props = {
  children: React.ReactNode;
};
const StyledCard = styled(Container)(({ theme }) => ({
  width: '60%',
  minWidth: '500px',
  padding: '1rem',
  margin: '2rem auto',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
  borderRadius: '14px',
  textAlign: 'center',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
}));

export function Card({ children }: Props) {
  return <StyledCard>{children}</StyledCard>;
}
export default Card;
