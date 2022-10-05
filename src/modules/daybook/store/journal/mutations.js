/*export const myMuttation=(state)=>{

}*/

export const setEntries = (state, entries) => {
  console.log(state.isLoading);
  state.entries = [...state.entries, ...entries];
  state.isLoading = true;
  console.log(state.isLoading);
};

export const updateEntry = (state) => {
  console.log(state);
};

export const addEntry = (state) => {
  console.log(state);
};
