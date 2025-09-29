import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Paper,
  styled,
} from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="bg-white min-h-screen">
    //   <h1 className="text-black">ToDoアプリ</h1>
    //   <form>
    //     <input type="text" name="task"></input>
    //     <button type="submit">登録</button>
    //   </form>
    // </main>
    <Container>
      <Paper elevation={5} sx={{ p: 5 }}>
        <h1>Welcome to Material UI!</h1>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        <hr />
        <Button variant="contained" color="primary">
          ボタン
        </Button>
      </Paper>
    </Container>
  );
}
