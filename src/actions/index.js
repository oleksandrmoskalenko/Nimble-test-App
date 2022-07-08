const recordAddedToList = (recordId) => {
  return {
    type: 'RECORD_ADDED_TO_LIST',
    payload: recordId
  };
};

const recordRemovedFromList = (recordId) => {
  return {
    type: 'RECORD_ADDED_TO_LIST',
    payload: recordId
  };
};

export {
  recordAddedToList,
  recordRemovedFromList
}