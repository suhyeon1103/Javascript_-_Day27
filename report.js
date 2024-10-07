class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makeSound() {
    throw new Error("makeSound() must be impemented");
  }
}

class Mammal extends Animal {
  makeSound() {
    console.log(`${this.name} (포유류: 으르렁`);
  }
}

class Bird extends Animal {
  makeSound() {
    console.log(`${this.name} (조류: 짹짹`);
  }
}

class Fish extends Animal {
  makeSound() {
    console.log(`${this.name} (어류: ...(소리없음)`);
  }
}

class Zoo {
  constructor() {
    this.animals = [];
  }
  addAmimal(animal) {
    this.animals.push(animal);
  }
  allAnimalsMakeSound() {
    this.animals.forEach((animal) => {
      animal.makeSound();
    });
  }
}

const zoo = new Zoo();

const lion = new Mammal("사자", 5);
const eagle = new Bird("독수리", 3);
const shark = new Fish("상어", 8);

zoo.addAnimal(lion);
zoo.addAmimal(eagle);
zoo.addAmimal(shark);

zoo.addAnimalsMakeSound();
