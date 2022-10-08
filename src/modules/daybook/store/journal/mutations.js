/*export const myMuttation=(state)=>{

}*/

export const setEntries = (state, entries) => {
  console.log(state.isLoading);
  state.entries = [...state.entries, ...entries];
  state.isLoading = true;
  console.log(state.isLoading);
};

export const updateEntry = (state, entry) => {
  console.log(state);
  console.log(entry);
  const idx = state.entries.map((e) => e.id).indexOf(entry.id);
  state.entries[idx] = entry;
};

export const addEntry = (state, entry) => {
  console.log(state);
  state.entries.push(entry);
};

export const deleteEntry = (state, id) => {
  const newEntries = state.entries.filter((entry) => entry.id !== id);
  console.log(newEntries);
  state.entries = newEntries;
};
