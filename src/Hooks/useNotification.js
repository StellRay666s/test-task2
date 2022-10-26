import { useDispatch } from "react-redux";
import {
  setNotification,
  hiddenNotification,
} from "../Redux/slice/notificSlice";

function useNotification() {
  const dispatch = useDispatch();

  return function notify(message) {
    dispatch(setNotification({ isOpen: true, message: message }));
    setTimeout(
      () =>
        dispatch(
          hiddenNotification({
            isOpen: false,
            message: message,
          })
        ),
      4000
    );
  };
}

export { useNotification };
