import { Person } from "@mui/icons-material";
import { Button, Container, Input, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from './styles/Styles';
import MyButton from './styles/MyButton';
import { RoundedButton } from './styles/MyButton';



const App = () => {
  return <div>
    <ThemeProvider theme={theme}>
    <Button variant="outlined" size="secondary" startIcon={<Person/>}
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      bgcolor: 'background.paper',
      overflow: 'hidden',
      borderRadius: '12px',
      boxShadow: 5,
      fontWeight: 'bold',
    }} 
    >Hold On</Button>
     <Container
        sx={{
          maxWidth: "400px",
        }}
      >
        <Paper
          sx={{
            marginTop: "2rem",
            padding: "1rem",
          }}
        >
          <Input fullWidth placeholder="First Name" />
          <Input fullWidth placeholder="Last Name" />
          <Input fullWidth placeholder="Email" />
          <Input fullWidth placeholder="Website" />
          <MyButton
            sx={{
              marginTop: "2px",
            }}
            variant="contained"
          >
            Submit
          </MyButton>
          <RoundedButton
            color="secondary"
            sx={{
              marginTop: "2px",
            }}
            variant="contained"
          >
            Cancel
          </RoundedButton>
        </Paper>
      </Container>
      </ThemeProvider>
  </div>;
};

export default App;