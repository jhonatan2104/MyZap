import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: "#F4F5F3"
    },
    cicle: {
        width: 500,
        height: 500,
        borderRadius: 250,
        backgroundColor: "#FFF",
        position: 'absolute',
        left: -120,
        top: -20,
    },
    header: {
      fontWeight: '800',
      fontSize: 25,
      color: "#514E5A",
      marginTop: 5
    },
    input: {
        marginTop: 5,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#BAB7C3',
        borderRadius: 30,
        paddingHorizontal: 20,
        color: "#514e5a",
        fontWeight: '600'
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#25B7D3',
        alignItems: 'center',
        justifyContent: 'center'
    }
})