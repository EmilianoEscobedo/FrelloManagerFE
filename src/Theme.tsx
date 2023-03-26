import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
interface ColorShades {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}

interface ColorPalette {
    [key: string]: ColorShades;
  }
// color design tokens

export const tokens = (mode:string) => ({
    ...(mode === "dark")
    ? 
    {'grey': {
        100: '#B8B8B8',
        200: '#A3A3A3',
        300: '#8F8F8F',
        400: '#7A7A7A',
        500: '#666666',
        600: '#4A4A4A',
        700: '#2E2E2E',
        800: '#121212',
        900: '#000000'
      },
      'primary': {
        100: '#465F9E',
        200: '#3A4E82',
        300: '#2D3D65',
        400: '#f2f0f0',
        500: '#141B2D',
        600: '#030406',
        700: '#000000',
        800: '#000000',
        900: '#000000'
      },
      'greenAccent': {
        100: '#CCF1E7',
        200: '#ACE8D9',
        300: '#8CE0CA',
        400: '#6CD7BB',
        500: '#4CCEAC',
        600: '#31B190',
        700: '#24856C',
        800: '#185948',
        900: '#0C2D25'
      },
      'redAccent': {
        100: '#F6D3D2',
        200: '#EFB2B0',
        300: '#E9918E',
        400: '#E2706C',
        500: '#DB4F4A',
        600: '#C62D27',
        700: '#97221E',
        800: '#681815',
        900: '#390D0B'
      },
      'blueAccent': {
        100: '#FFFFFF',
        200: '#DEE0FE',
        300: '#B7BBFD',
        400: '#8F95FB',
        500: '#6870FA',
        600: '#323DF8',
        700: '#0814EA',
        800: '#060FB4',
        900: '#040B7D'
      }}

    : 

    {'grey': {
        100: '#000000',
        200: '#121212',
        300: '#2E2E2E',
        400: '#4A4A4A',
        500: '#666666',
        600: '#7A7A7A',
        700: '#8F8F8F',
        800: '#A3A3A3',
        900: '#B8B8B8'
      },
      'primary': {
        100: '#000000',
        200: '#000000',
        300: '#000000',
        400: '#030406',
        500: '#141B2D',
        600: '#212C49',
        700: '#2D3D65',
        800: '#3A4E82',
        900: '#465F9E'
      },
      'greenAccent': {
        100: '#0C2D25',
        200: '#185948',
        300: '#24856C',
        400: '#31B190',
        500: '#4CCEAC',
        600: '#6CD7BB',
        700: '#8CE0CA',
        800: '#ACE8D9',
        900: '#CCF1E7'
      },
      'redAccent': {
        100: '#390D0B',
        200: '#681815',
        300: '#97221E',
        400: '#C62D27',
        500: '#DB4F4A',
        600: '#E2706C',
        700: '#E9918E',
        800: '#EFB2B0',
        900: '#F6D3D2'
      },
      'blueAccent': {
        100: '#040B7D',
        200: '#060FB4',
        300: '#0814EA',
        400: '#323DF8',
        500: '#6870FA',
        600: '#8F95FB',
        700: '#B7BBFD',
        800: '#DEE0FE',
        900: '#FFFFFF'
      }}
    });

// MUI theme settings
export const themeSettings = (mode:'dark' | 'light') => { 
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' ? 
            {primary: {
            main: colors.primary[500]},
            secondary:{ 
                main: colors.greenAccent[500]},
            neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100]},
            background: {
                default: colors.primary[500]}} 
                : 
            {primary: {
            main: colors.primary[500]},
            secondary:{ 
                main: colors.greenAccent[500]},
            neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100]},
            background: {
                default: "#fcfcfc"}}
            )
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 40},
            h2: { fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32},
            h3: {fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24},
            h4: {fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20},
            h5: {fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16},
            h6: {fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14},
        }
    }
};

// Context color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {
    
    }
});

export const useMode = () => {
    const [mode, setMode] = useState<'dark' | 'light'>('dark');

    const colorMode = useMemo( 
        () => ({
            toggleColorMode: () =>
            setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }),[]
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    
    return {theme, colorMode};
};