import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

interface UserAvatarProps {
  imageUri: string;
  size?: number;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ imageUri, size = 50 }) => {
  return (
    <View style={[styles.outerCircle, { width: size + 8, height: size + 8, borderRadius: (size + 8) / 2 }]}>
      <View style={[styles.middleCircle, { width: size + 4, height: size + 4, borderRadius: (size + 4) / 2 }]}>
        <Image
          source={{ uri: imageUri }}
          style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    backgroundColor: '#833ab4', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleCircle: {
    backgroundColor: '#fd1d1d', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#fcb045', 
  },
});

export default UserAvatar;
