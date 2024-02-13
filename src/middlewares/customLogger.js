export const customLogger = (store) => (next) => (action) => {
  console.log("Store>>", store.getState());
  console.log("Action>>", action);

  next(action);
};
