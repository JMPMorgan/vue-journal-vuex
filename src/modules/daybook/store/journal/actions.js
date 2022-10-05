/*export const myAction=async({commit})=>{

}*/

import journalAPI from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalAPI.get("/entries.json");
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

export const updateEntries = async ({ commit }) => {
  console.log(commit);
};

export const createEntries = async ({ commit }) => {
  console.log(commit);
};
