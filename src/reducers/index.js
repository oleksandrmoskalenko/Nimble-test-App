import updateRecordsList from './records-list';

const reducer = (state, action) => {
  return {
    recordsList: updateRecordsList(state, action),
  };
};

export default reducer;