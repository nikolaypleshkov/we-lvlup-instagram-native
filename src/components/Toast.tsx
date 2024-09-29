import React from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { hideToast, ToastType } from "../features/toast/toastSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Toast: React.FC = () => {
  const dispatch = useAppDispatch();
  const toast = useAppSelector((state) => state.toast);

  const translateY = new Animated.Value(-100);

  React.useEffect(() => {
    if (toast.type) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        hideToastHandler();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [toast]);

  const hideToastHandler = () => {
    Animated.timing(translateY, {
      toValue: -100,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      dispatch(hideToast());
    });
  };

  if (!toast.type) return null;

  const getIconName = () => {
    switch (toast.type) {
      case "success":
        return "checkcircleo";
      case "error":
        return "exclamationcircleo";
      case "warning":
        return "warning";
      case "info":
        return "infocirlceo";
      default:
        return "infocirlceo";
    }
  };

  const getBorderColor = () => {
    switch (toast.type) {
      case "success":
        return "#4CAF50";
      case "error":
        return "#f44336";
      case "warning":
        return "#f4bb36";
      case "info":
        return "#2196F3";
      default:
        return "#2196F3";
    }
  };

  return (
    <Animated.View
      style={[
        styles.toastContainer,
        { transform: [{ translateY }] },
        { borderLeftColor: getBorderColor() },
      ]}
    >
      <Icon
        name={getIconName()}
        size={24}
        color={getBorderColor()}
        style={styles.icon}
      />
      <Text style={styles.message}>{toast.message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 70,
    left: 20,
    right: 20,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "center",
    borderLeftWidth: 6,
  },
  icon: {
    marginHorizontal: 10,
  },
  message: {
    color: "#333",
    fontSize: 16,
    flex: 1,
  },
});

export default Toast;
