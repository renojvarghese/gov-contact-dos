import { createStore } from 'redux';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'NEW_STATE':
      return createOfficerArray(action.data);
    default:
      return state;
  }
};

const createOfficerArray = data => {
  let offices = data.offices;
  if (!offices) return {};
  return offices.map(office => {
    return offices.officialIndices.map(official => {
      return {
        official,
        officeName: office.name
      };
    });
  });
};

export const store = createStore(reducer);
