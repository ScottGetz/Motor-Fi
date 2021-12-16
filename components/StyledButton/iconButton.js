import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const IconButton = (props) => {
    const { type, content, onPress } = props;

    const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
    const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

    return (
        <View style={styles.iconContainer}>
            <Pressable style={[styles.iconButton]} onPress={() => onPress()}>
                <Text style={[styles.text, { color: textColor }]}>
                    {content}
                </Text>
            </Pressable>
        </View>
    );
};

export default IconButton;
