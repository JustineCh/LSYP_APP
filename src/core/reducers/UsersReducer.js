const initialState = {
  users: [
    {
      id: '1',
      email: 'temai@dwad.dwa',
      password: 'pa55word',
    },
    {
      id: '2',
      email: 'tomek@test.com',
      password: 'pa55word',
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_ADD':
      return {
        ...state,
        users: [...state.users, action.payload.draft],
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