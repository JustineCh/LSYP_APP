const initialState = {
  loggedInUser: null,
  users: [],
  currentUserTasks: [],
  newestTasks: [],
  newestComments: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_LOAD':
      return {
        ...state,
        users: [...state.users, action.payload.users],
      };
    case 'USERS_ADD':
      return {
        ...state,
        users: [...state.users, action.payload.draft],
      };
    case 'LOGGED_IN_USER':
      return {
        ...state,
        loggedInUser: action.payload.currentUser,
      };
    case 'LOAD_CURRENT_USER_TASKS':
      return {
        ...state,
        currentUserTasks: action.payload,
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

export const loggedInUser = currentUser => {
  return {
    type: 'LOGGED_IN_USER',
    payload: { currentUser },
  };
};

export const usersLoad = users => {
  return {
    type: 'USERS_LOAD',
    payload: { users },
  };
};

export const loadCurrentUserTasks = (currentUserTasks) => {

  return {
    type: 'LOAD_CURRENT_USER_TASKS',
    payload: currentUserTasks
  };
};