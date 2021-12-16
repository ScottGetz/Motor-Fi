import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 50,
        zIndex: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
    },
    logo: {
        width: 50,
        height: 50,
    },
    menu: {
        width: 35,
        height: 60,
        resizeMode: "contain",
    },
    modalText: {
        marginTop: 0,
        alignSelf: "center",
    },
    modalContainer: {
        marginTop: 230,
        alignSelf: "center",
        width: "80%",
        backgroundColor: "rgba(130,130,130,0.80)",
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    modalButton: {
        width: 20,
        height: 20,
        alignSelf: "center",
        paddingVertical: 20,
    },
});

export default styles;
