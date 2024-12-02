import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    list: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      return {
        ...state,
        searchTerm: action.payload,
      };
    },
    addCar(state, action) {
      return {
        ...state,
        list: [
          ...state.list,
          {
            name: action.payload.name,
            cost: action.payload.cost,
            id: nanoid(),
          },
        ],
      };
    },
    deleteCar(state, action) {
      const filteredCars = state.list.filter((car) => {
        return action.payload !== car.id;
      });
      return {
        ...state,
        list: filteredCars,
      };
    },
  },
});

export const { changeSearchTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
