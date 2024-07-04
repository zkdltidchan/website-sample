import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const extendColors = {
    brand: {
        50: '#e3f2f9',
        100: '#c5e4f3',
        200: '#a2d4ec',
        300: '#7ac1e4',
        400: '#47a9da',
        500: '#0088cc', // 主色调
        600: '#007ab8',
        700: '#006ba1',
        800: '#005885',
        900: '#003f5e',
    },
};



// Call `extendTheme` and pass your custom values
const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const CustomButton = {
    baseStyle: {
        fontWeight: 'bold',
    },
    variants: {
        solid: (props) => ({
            bg: props.colorMode === 'dark' ? 'primary.300' : 'primary.500',
            _hover: {
                bg: props.colorMode === 'dark' ? 'primary.400' : 'primary.600',
            },
        }),
        outline: (props) => ({
            borderColor: props.colorMode === 'dark' ? 'primary.300' : 'primary.500',
            color: props.colorMode === 'dark' ? 'primary.300' : 'primary.500',
            _hover: {
                bg: props.colorMode === 'dark' ? 'primary.400' : 'primary.600',
            },
        }),
    },
};

const theme = extendTheme(
    {
        colors: {
            ...extendColors,
            primary: extendColors.brand,
        },
        config: {
            initialColorMode: 'light',
            useSystemColorMode: false,
        },
        components: {
            // Button: CustomButton,
        },
    },
    withDefaultColorScheme({
        colorScheme: 'gray',
        components: ['Button', 'Badge'],
    }),
)


export default theme