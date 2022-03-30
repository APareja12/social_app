import { Person } from "@mui/icons-material";
import { Button } from "@mui/material";

const App = () => {
  return <div>
    <Button variant="outlined" size="secondary" startIcon={<Person/>} >Material UI</Button>
  </div>;
};

export default App;