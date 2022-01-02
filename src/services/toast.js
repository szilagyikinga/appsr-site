import { toast } from "react-toastify";
const toastConfig = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  draggable: false,
};

export const formError =
  "Vous avez une ou plusieurs erreurs dans le formulaire";
export const serverError =
  "Une erreur est survenue, merci de réessayer plus tard";
export const formSuccess =
  "Merci pour votre intérêt, nous allons vous contacter rapidement";

export const message = (type, message) => {
  toast[type](message, toastConfig);
};
