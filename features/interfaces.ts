interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary() {
    return `Name: ${this.name}, Year: ${this.year}, Broken? ${this.broken}`;
  },
};

const beverage = {
  color: "brown",
  cabonated: true,
  sugar: 10,
  summary() {
    return `My ${this.color} drink has ${this.sugar} grams of sugar.`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

printSummary(oldCivic);
printSummary(beverage);
