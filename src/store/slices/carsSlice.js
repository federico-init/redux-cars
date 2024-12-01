import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
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
        cars: [
          ...state.cars,
          {
            name: action.payload.name,
            cost: action.payload.cost,
            id: nanoid(),
          },
        ],
      };
    },
    deleteCar(state, action) {
      const filteredCars = state.cars.filter((car) => {
        return action.payload !== car.id;
      });
      return {
        ...state,
        cars: filteredCars,
      };
    },
  },
});

export const { changeSearchTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
