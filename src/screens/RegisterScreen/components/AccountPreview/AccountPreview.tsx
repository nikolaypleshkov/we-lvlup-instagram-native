import React from "react";
import { RegistrationInformation } from "../../RegisterScreen";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./AccountPreview.styles";
import { Asset, launchImageLibrary } from "react-native-image-picker";
import { Envelope } from "../../../../models/envelope";
import axios, { AxiosError } from "axios";

interface AccountPreviewProps {
  dataCollection: RegistrationInformation;
  loading: boolean;
  onImageChange: (newImageRef: string) => void;
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
        <TouchableOpacity onPress={onUpload}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.imagePlaceholder} onPress={onUpload}>
          <Text style={styles.imagePlaceholderText}>Upload Image</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const AccountPreview: React.FC<AccountPreviewProps> = (props) => {
  const { dataCollection, onImageChange, onEdit, onComplete, loading } = props;
  const [profileImage, setProfileImage] = React.useState<string>("");

  const uploadImage = async (file: Asset): Promise<Envelope<string> | null> => {
    try {
      const data = new FormData();
      data.append("profileImage", {
        uri: file.uri,
        name: file.fileName,
        type: "image/jpg",
      });

      const response: Envelope<string> = await axios
        .post("http://localhost:8080/api/v1/users/upload/profile", data)
        .then((res) => res.data);
      return response;
    } catch (error: any) {
      console.error("Something went wrong while uploading image: ", error);
      return null;
    }
  };

  const deletePreviousImage = async (
    filePath: string
  ): Promise<Envelope<string> | null> => {
    try {
      const isDeleted = await axios.delete(
        `http://localhost:8080/api/v1/storage/file?filePath=${filePath}`
      );
      return isDeleted.data;
    } catch (error: any) {
      console.error("Something went wrong while uploading image: ", error);
      return null;
    }
  };

  const handleImageUpload = () => {
    launchImageLibrary(
      {
        mediaType: "photo",
        maxWidth: 300,
        maxHeight: 300,
      },
      async (response) => {
        if (response.assets) {
          const uploadedImagePath = await uploadImage(response.assets[0]);
          setProfileImage(response.assets[0].uri || "");

          if (
            dataCollection.profileImage &&
            dataCollection.profileImage.data?.length
          ) {
            const isDeleted = await deletePreviousImage(
              dataCollection.profileImage.data
            );

            if (isDeleted?.data?.length) console.log("old image deleted!");
          }

          onImageChange(uploadedImagePath?.data || "");
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Almost there!</Text>
      <View style={styles.card}>
        <ProfileImageUpload
          profileImage={profileImage}
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
        <TouchableOpacity style={styles.submitButton} onPress={onComplete} disabled={loading}>
          {loading ? <Text style={styles.submitButtonText}>Loading...</Text> : <Text style={styles.submitButtonText}>Complete Registration</Text>}
        </TouchableOpacity>
      </View>
      <TouchableOpacity disabled={loading}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountPreview;
