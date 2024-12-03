import { useDispatch, useSelector } from "react-redux";

import { deleteCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  const cars = useSelector(({ cars: { list, searchTerm } }) => {
    return list.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const name = useSelector((state) => state.form.name);

  const handleCarDelete = (car) => {
    dispatch(deleteCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
        <p>
          {car.name} - €{car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
