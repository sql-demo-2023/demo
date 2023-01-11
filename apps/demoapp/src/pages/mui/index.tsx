import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, styled } from '@mui/material/styles';
import Card from '../../common/components/Card/Card';
import Stack from '@mui/material/Stack';
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
  borderRadius: theme.shape.borderRadius,
}));
const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  fontSize: theme.typography.fontSize,
}));

export default function Home() {
  return (
    <Container
      maxWidth="md"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <StyledBox theme={customTheme}>
        <Card>MUI v5 + Next.js with TypeScript example</Card>
        <Stack spacing={2} direction="row" justifyContent="center">
          <StyledButton>defaultTheme Button</StyledButton>
          <StyledButton theme={customTheme}>customTheme Button</StyledButton>
        </Stack>
      </StyledBox>
    </Container>
  );
}
