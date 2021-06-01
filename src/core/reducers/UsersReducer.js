const initialState = {
  users: [
    {
      id: '1',
      userName: 'Robert',
      email: 'robert@test.com',
      password: 'pa55word',
    },
    {
      id: '2',
      userName: 'Tomek',
      email: 'tomek@test.com',
      password: 'pa55word',
    },
  ],
  loggedInUserId: undefined,
  //   users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_ADD':
      return {
        ...state,
        users: [...state.users, action.payload.draft],
      };
    case 'LOGGED_IN_USER':
      return {
        ...state,
        loggedInUserId: action.payload.id,
      };

    default:
      return state;
  }
};
export default reducer;

/* Actions */

export const usersAdd = draft => {
  return {
    type: 'USERS_ADD',
    payload: { draft },
  };
};

export const loggedInUserId = id => {
  return {
    type: 'LOGGED_IN_USER',
    payload: { id },
  };
};
