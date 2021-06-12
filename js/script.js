var button = document.querySelector("button");
var repairList = document.querySelector(".need-repair");

const createVehicle = function (type, numWheels, color) {
  const vehicle = {
    type: type,
    numWheels: numWheels,
    color: color
  };
  return vehicle;
};

const car = createVehicle("car", 4, "red");
const skateboard = createVehicle("skateboard", 4, "blue");
const bike = createVehicle("bike", 2, "green");

//console.log(car, skateboard, bike);

let vehicleArray = [car, skateboard, bike];

/* for (let vehicle of vehicleArray) {
  for (let key in vehicle) {
    console.log(key, vehicle[key]);
  }
}  */

bike.needsRepair = true;
skateboard.needsRepair = true;

//console.log(bike);

button.addEventListener("click", function () {
  repairList.innerHTML = "";

  const vehicleRepairList = vehicleArray.filter(function (vehicle) {
    return vehicle.needsRepair === true;
  });

  for (let vehicle of vehicleRepairList) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `My <span class="vehicle">${vehicle.type}</span> needs some 💜`;
    repairList.append(listItem);
  }
});
