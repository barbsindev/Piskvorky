import React from 'react';
import { ReactNode } from 'react';
import styled, { DefaultTheme, ThemeProvider } from 'styled-components/native';

declare module 'styled-components' {
  export interface Theme {
    colors: Record<string, string>;
    fonts: string[];
    fontSizes: Record<string, string>;
  }
}

interface ThemeProps {
  colors: Record<string, string>;
  fonts: string[];
  fontSizes: Record<string, string>;
  children?: ReactNode | JSX.Element[] | JSX.Element | Element;
}

const theme: DefaultTheme = {
  colors: {
    bg: 'rgba(250, 249, 246, 0.8)',
    fg: '#27bdac',
  },
  fonts: [],
  fontSizes: {
    sm: 12,
    m: 14,
    l: 16,
    xl: 22,
  },
};

const Theme: React.FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
