const updateOrder = (state, recordId, quantity) => {

};

const updateRecordsList = (state, action) => {
  
  if (state === undefined) {
    return {
      records: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case 'RECORD_ADDED_TO_LIST':
      return updateOrder(state, action.payload, 1);

      case 'RECORD_REMOVED_FROM_LIST':
      return updateOrder(state, action.payload, -1);

      default:
      return state.recordsList;
  }
};

export default updateRecordsList;