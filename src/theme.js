
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      100: "#03060B",
      200: "#FFFFFF",
   
    },
    secondary: {
      100: "#FDE2E4",
      200: "#FAD2E1",
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
});

export default theme;
