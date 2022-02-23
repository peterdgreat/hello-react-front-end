import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:3000/api/v1/greetings';

const GREETING_SUCCESS = 'GREETING_SUCCESS';

const initialState = {
};
const setGreetings = (payload) => ({
  type: GREETING_SUCCESS,
  payload,
});

export const getGreetings = () => async (dispatch) => {
  const response = await axios.get(BASE_URL);
  dispatch(setGreetings(response.data));
};

const reducerMessage = (state = initialState, action) => {
  switch (action.type) {
    case GREETING_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default reducerMessage;
