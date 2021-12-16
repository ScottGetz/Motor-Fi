import React, { useState } from "react";
import { View, Image, Text, Modal, TouchableOpacity } from "react-native";
import IconButton from "../StyledButton/iconButton";
import styles from "./styles";

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <View style={styles.container}>
            <IconButton
                type={"primary"}
                content={"Motor-Fi"}
                onPress={() => {
                    setModalOpen(true);
                }}
            ></IconButton>
            <View>
                <Modal
                    visible={modalOpen}
                    animationType="fade"
                    transparent={true}
                >
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
                        <View>
                            <Text style={styles.modalText}>
                                Welcome to Motor-Fi. Browse our gallery of some
                                of the most iconic cars in automotive history!
                            </Text>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
};

export default Header;
