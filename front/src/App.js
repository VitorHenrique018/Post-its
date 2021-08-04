import { InsertPosts } from "./Components/InsertPosts";
import { RenderPosts } from "./Components/RenderPosts";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <InsertPosts />
      <RenderPosts />
    </Container>
  );
}

export default App;
