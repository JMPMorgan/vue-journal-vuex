/*export const myAction=async({commit})=>{

}*/

import journalAPI from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalAPI.get("/entries.json");
  if (!data) {
    commit("setEntries", []);
    return;
  }
  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }
  console.log(entries);
  commit("setEntries", entries); //Llama a la mutations
};

export const updateEntries = async ({ commit }, entry) => {
  //const data = {};
  const { id, ...data } = entry;
  // const data= ...entry;
  //data=...entry;
  console.log(id);
  console.log(data);
  console.log(commit);
  const { data: newData } = await journalAPI.put(`/entries/${id}.json`, data);
  newData.id = id;
  console.log(newData);
  commit("updateEntry", newData);
};

export const createEntries = async ({ commit }, entry) => {
  console.log(commit);
  const data = entry;
  console.log(data);
  const { data: newData } = await journalAPI.post("/entries.json", data);
  data.id = newData.name;
  console.log(newData);
  console.log(data);
  commit("addEntry", data);
  return data.id;
};

export const deleteEntry = async ({ commit }, id) => {
  await journalAPI.delete(`entries/${id}.json`, id);
  commit("deleteEntry", id);
};
