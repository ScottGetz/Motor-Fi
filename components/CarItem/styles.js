import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: Dimensions.get("window").height,
    },
    titles: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center",
    },
    title: {
        fontSize: 40,
        fontWeight: "500",
    },
    subtitleCTA: {
        textDecorationLine: "underline",
    },
    subtitle: {
        fontSize: 16,
        color: "#5c5e62",
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
    },

    buttonsContainer: {
        position: "absolute",
        bottom: 50,
        width: "100%",
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
