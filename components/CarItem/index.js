import React, { useState } from "react";
import {
    View,
    Image,
    Text,
    ImageBackground,
    Linking,
    Modal,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
    const {
        name,
        tagline,
        taglineCTA,
        image,
        maxPower,
        maxTorque,
        trackSpeed,
        quote,
        url,
    } = props.car;
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}{" "}
                    <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>
            <Modal visible={modalOpen} animationType="fade" transparent={true}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setModalOpen(false);
                        }}
                    >
                        <Image
                            source={require("../../assets/images/x.png")}
                            style={styles.modalButton}
                        />
                    </TouchableOpacity>
                    <View style={styles.modalText}>
                        <Text style={{ fontStyle: "italic" }}>"{quote}"</Text>
                        <Text>Max Power: {maxPower}</Text>
                        <Text>Max Torque: {maxTorque}</Text>
                        <Text>Top Track Speed: {trackSpeed}</Text>
                    </View>
                </View>
            </Modal>
            <View style={styles.buttonsContainer}>
                <StyledButton
                    type="primary"
                    content={"Technical Specs"}
                    onPress={() => {
                        setModalOpen(true);
                    }}
                />
                <StyledButton
                    type="secondary"
                    content={"View Sales Forum"}
                    onPress={() => {
                        Linking.openURL(`${url}`);
                    }}
                />
            </View>
        </View>
    );
};

const stylesModal = StyleSheet.create({
    modalContent: {
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
    },
});

export default CarItem;
