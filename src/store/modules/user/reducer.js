const initialState = null;

export default function user(state = initialState, { type, payload }) {
  switch (type) {
    case "user/LOGIN":
      return {
        user: payload,
      };
    case "user/LOGOUT":
      return {
        user: initialState,
      };
    default:
      return state;
  }
}
