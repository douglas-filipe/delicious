import { GlobalStyle } from "./global";
import { Routes } from "./routes";
import { ChakraProvider } from "@chakra-ui/provider";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <GlobalStyle />
        <Routes />
      </ChakraProvider>
    </>
  );
}

export default App;
