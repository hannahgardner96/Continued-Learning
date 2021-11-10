const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

// TS initially thinks this is an array but order is important if you want to represent a tuple
const pepsi: [string, boolean, number] = ["brown", true, 40];
// alt to type definition, could use type alias
const sprite: Drink = ["clear", true, 35];
const tea: Drink = ["brown", false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
