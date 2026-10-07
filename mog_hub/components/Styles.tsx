import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    

    logo: {
        width: 350,
        height: 350,
        paddingTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

    mainTxt: {
        paddingTop: 50,
        color: 'green',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },

    slogan: {
        color: 'orange',
        fontSize: 30,
        textAlign: 'center'
    },

    inputFlex: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'space-evenly',
    },

    enterTxt: {
        fontWeight: 'bold',
    },

    userInputTxt: {
        borderBottomWidth: 1
    },

    radioContainer: {
        flex: 0,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },

    radioGroup: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 15,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3
    },

    radioButton: {
        flexDirection: 'column',
        alignContent: 'center',
    },

    radioLabel: {
        marginLeft: 5,
        fontSize: 15,
        color: 'black'
    },

    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#7ad1f3'
    },

    petContainer: {
        flex: 5
    },

    petTxt: {
        fontSize: 15,
        marginVertical: 5,
        borderBlockColor: 'black',
        borderBottomWidth: 1
    },


    /* =========================
       BOOKING PAGE
       ========================= */

    bookingPage: {
        flex: 1,
        backgroundColor: 'white',
    },

    bookingHeader: {
        backgroundColor: 'orange',
        borderBottomWidth: 3,
        borderBottomColor: '#e67e22',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    bookingHeaderText: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
    },

    bookingSection: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },

    bookingImage: {
        width: '100%',
        height: 180,
        marginBottom: 15,
    },

    bookingStepTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 8,
    },

    bookingStepText: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        lineHeight: 21,
        paddingHorizontal: 10,
    },

    bookingSafeArea: {
        flex: 1,
        backgroundColor: '#ffffff',
    },    

});

export default styles;