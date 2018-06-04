export const reducer = (state = {}, action) => {
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
  let officials = [];
  offices.map(office => {
    return office.officialIndices.map(officialIndex => {
      let myofficial = {
        ...data.officials[officialIndex],
        officeName: office.name
      };
      officials.push(myofficial);
    });
  });
  return officials.slice(2);
};
