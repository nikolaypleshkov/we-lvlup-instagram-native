import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

import { styles } from "./ProfileHeader.styles";
import { useAppSelector } from "../../../../app/hooks";
import DraggableBottomPanel from "../../../../components/DraggableBottomPanel";

const ProfileHeader = () => {
  const userSelected = useAppSelector((selector) => selector.auth);
  const [isPanelVisible, setPanelVisible] = React.useState(false);

  const toggleDropdown = () => {
    setPanelVisible((prevState) => !prevState);
  };
  
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={toggleDropdown}
        >
          <IoniconsIcon size={15} name="lock-closed-outline" color="#000" />
          <Text style={styles.dropdownButtonText}>
            {userSelected.user?.username}
          </Text>
          <Icon name="down" size={10} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.gap} />
      <TouchableOpacity style={styles.dropdownButton}>
        <FeatherIcon name="plus-square" size={22} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.dropdownButton}>
        <FeatherIcon name="menu" size={22} color="#000" />
      </TouchableOpacity>
      {isPanelVisible && (
        <DraggableBottomPanel>
          <Text>Your Panel Content Here</Text>
        </DraggableBottomPanel>
      )}
    </View>
  );
};

export default ProfileHeader;
