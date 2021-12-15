import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";

const Header = () => {
    return (
        <View style={styles.container}>
            {/* <Image
                style={styles.logo}
                source={require("../../assets/images/stacklogo.png")}
            /> */}
            <Image
                style={styles.menu}
                source={require("../../assets/images/menu.png")}
            />
            <View>
                <Text style={({ alignSelf: "flex-end" }, { fontSize: 25 })}>
                    MotorFi
                </Text>
            </View>
        </View>
    );
};

export default Header;
