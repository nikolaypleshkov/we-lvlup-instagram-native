import React from "react";
import { RegistrationInformation } from "../../RegisterScreen";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./AccountPreview.styles";
import { launchImageLibrary } from "react-native-image-picker";

interface AccountPreviewProps {
  dataCollection: RegistrationInformation;
  onEdit: (step: string) => void;
  onComplete: () => void;
}

const ProfileImageUpload = ({
  profileImage,
  onUpload,
  onDiscard,
}: {
  profileImage: string | null;
  onUpload: () => void;
  onDiscard: () => void;
}) => {
  return (
    <View style={styles.imageContainer}>
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      ) : (
        <TouchableOpacity style={styles.imagePlaceholder} onPress={onUpload}>
          <Text style={styles.imagePlaceholderText}>Upload Image</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const AccountPreview: React.FC<AccountPreviewProps> = (props) => {
  const { dataCollection, onEdit, onComplete } = props;

  const handleImageUpload = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        maxWidth: 300,
        maxHeight: 300,
      },
      (response) => {}
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Almost there!</Text>
      <View style={styles.card}>
        <ProfileImageUpload
          profileImage={dataCollection.profileImage?.data || null}
          onUpload={handleImageUpload}
          onDiscard={() => {}}
        />

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Username</Text>
            <Text style={styles.detailValue}>
              {dataCollection.username.data}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Full Name</Text>
            <Text style={styles.detailValue}>
              {dataCollection.additionalData.data.fullname || "Not Set"}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Email or Phone</Text>
            <Text style={styles.detailValue}>
              {dataCollection.additionalData.data.emailOrPhone}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.submitButton} onPress={onComplete}>
          <Text style={styles.submitButtonText}>Complete Registration</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountPreview;
