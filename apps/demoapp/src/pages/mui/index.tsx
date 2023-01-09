import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, styled } from '@mui/material/styles';
const customTheme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#FAD3E7',
    },
  },
  typography: {
    fontSize: 42,
  },
});
const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  margin: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));
const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  fontSize: theme.typography.fontSize,
}));

export default function Home() {
  return (
    <Container maxWidth="md">
      <StyledBox theme={customTheme}>
        MUI v5 + Next.js with TypeScript example
      </StyledBox>
      <StyledButton>Styled Button</StyledButton>
    </Container>
  );
}
