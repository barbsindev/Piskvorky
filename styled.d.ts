// import original module declarations
import 'styled-components/native';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string, string>;
    fonts: string[];
    fontSizes: Record<string, string | number>;
  }
}
