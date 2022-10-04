export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cupiditate
        facilis deserunt quo, maiores similique, doloribus porro ut quod
        asperiores sed, commodi aspernatur. Delectus placeat sunt vero cum
        temporibus modi?`,
      picture: null,
    },
    {
      id: new Date().getTime() + 10,
      date: new Date().toDateString(),
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cupiditate
          facilis deserunt quo, maiores similique, doloribus porro ut quod
          asperiores sed, commodi aspernatur. Delectus placeat sunt vero cum
          temporibus modi?`,
      picture: null,
    },
    {
      id: new Date().getTime() + 20,
      date: new Date().toDateString(),
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cupiditate
            facilis deserunt quo, maiores similique, doloribus porro ut quod
            asperiores sed, commodi aspernatur. Delectus placeat sunt vero cum
            temporibus modi?`,
      picture: null,
    },
    {
      id: new Date().getTime() + 30,
      date: new Date().toDateString(),
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cupiditate
          facilis deserunt quo, maiores similique, doloribus porro ut quod
          asperiores sed, commodi aspernatur. Delectus placeat sunt vero cum
          temporibus modi?`,
      picture: null,
    },
  ],
});
