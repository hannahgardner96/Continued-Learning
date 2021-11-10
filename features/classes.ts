class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("zoomzoomzoom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "lilac");
car.startDrivingProcess();

const vehicle = new Vehicle("orange");
