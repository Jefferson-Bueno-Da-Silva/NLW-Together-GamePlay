import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
const { colors } = theme
export const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image : {
        width: '100%',
        height: 360,
    },
    content : {
        marginTop: -80,
        paddingHorizontal: 50
    },
    title: {
        color: colors.heading,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 16,
        fontFamily: theme.fonts.title700,
        lineHeight: 40,
    },
    subTitle : {
        color: colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 40,
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
    },
});