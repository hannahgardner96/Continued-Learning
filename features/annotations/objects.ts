const profile = {
  name: "Hannah",
  age: 25,
  coords: {
    lat: -97,
    lng: 32,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
