export const state = () => ({
  fooddata: []
});

// responsible for updating the state of the app
export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data;
  }
};

// actions cannot change the state.
// actions can commit mutations which can change the state.
// suitable for async stuffs.
export const actions = {
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) return;
    try {
      await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          console.log(data);
          commit("updateFoodData", data);
        });
    } catch (error) {
      console.log(error);
    }
  }
};
