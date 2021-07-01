export const successNotificationConfig = {
  title: "Thank you!",
  message: "Your comment saved successfully",
  type: "success",
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated animate__fadeIn"],
  animationOut: ["animate__animated animate__fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: false
  }
}
export const missingParameterConfig = {
  title: "Missing!!",
  message: "Please fill out required fields",
  type: "danger",
  insert: "bottom",
  container: "bottom-right",
  animationIn: ["animate__animated animate__fadeIn"],
  animationOut: ["animate__animated animate__fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: false
  }
}
