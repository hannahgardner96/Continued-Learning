const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car = carMakers[0];

// Help with "map"
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2030-10-12");
importantDates.push(new Date());

// use arrays when you want to represent a colelction of different records