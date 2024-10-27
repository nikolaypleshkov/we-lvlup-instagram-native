import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { User } from "../../../../models/user";

interface FeedCardHeaderProps {
    user: User;
  }
  
  const FeedCardHeader: React.FC<FeedCardHeaderProps> = (props) => {
    const { user } = props;
  
    return (
      <View style={headerStyles.container}>
        <Image
          source={{ uri: user?.profileImage }}
          style={headerStyles.profileImage}
        />
        <Text style={headerStyles.username}>{user.username}</Text>
        <View style={headerStyles.spacer} />
        <TouchableOpacity>
          <Icon name="more-horizontal" size={17} />
        </TouchableOpacity>
      </View>
    );
  };
  
  const headerStyles = StyleSheet.create({
    container: {
      flexDirection: "row",
      gap: 5,
      alignItems: "center",
      width: "100%",
      paddingHorizontal: 10,
    },
    profileImage: {
      width: 30,
      height: 30,
      borderRadius: 50,
    },
    username: {
      fontWeight: "bold",
    },
    spacer: {
      flex: 1,
    },
  });

  export default FeedCardHeader;