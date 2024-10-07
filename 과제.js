// ### * 문제 1: 클래스와 객체의 개념 이해
// - JavaScript에서 클래스를 정의하고, 해당 클래스를 사용하여 객체를 생성하는 방법을 설명하세요. 코드 예시를 포함해 주세요.

// A :
//클래스 선언
// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getInform() {
//     console.log("Get Information.");
//   }
// }

// const Alice = new person("Alice", 20);

// Alice.getInform();

// ### 문제 2: 상속의 활용
// - JavaScript에서 상속을 사용하여 클래스를 확장하는 방법을 설명하세요. 부모 클래스와 자식 클래스를 정의하고, 상속을 통해 재사용하는 예시 코드를 작성하세요.

// A : 상속은 부모클래스의 속성과 메서드를 자식클래스가 물려받아 사용하는 것.
// class Animal {
//   eat() {
//     console.log("Eating...");
//   }
// 의
// // Dog 클래스는 Animal 클래스를 상속받음
// class Dog extends Animal {
//   bark() { //bark 메서드 추가 정의
//     console.log("Barking...");
//   }
// }

// const myDog = new Dog();

// myDog.eat();
// myDog.bark();

// ### 문제 3: 다형성의 개념
// - 다형성이란 무엇인가요? JavaScript에서 메서드 오버라이딩을 사용하여 다형성을 구현하는 방법을 설명하고, 관련 예시를 작성하세요.

// A : 다형성은 동일한 인터페이스 또는 부모 클래스를 통해 여러 다른 형태의 객체를 다룰 수 있게 하는 개념,
//     JavaScript에서 다형성을 실행하려면 메서드 오버라이딩을 사용한다.
// class Animal {
//   makeSound() {
//     console.log("Some sound...");
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log("Meow...");
//   }
// }

// class Cow extends Animal {
//   makeSound() {
//     console.log("Moo...");
//   }
// }

// const animals = [new Animal(), new Cat(), new Cow()];

// animals.forEach((animal) => {
//   animal.makeSound();
// });

// ### 문제 4: 추상화와 인터페이스
// - 추상화의 개념과 JavaScript에서 추상화를 구현하는 방법을 설명하세요. 추상 클래스를 만들고 이를 상속받는 클래스의 예시 코드를 작성하세요.
// A : 추상화는 복잡한 시스템에서 핵심적인 개념이나 기능만을 모델링 하여 단순화 하는 방법이며,
//     JavaScrip에서 추상 클래스를 직접 지원하지 않지만, 추상 클래스와 유사한 추상화 개념을 구현할수 있다.
//     New target을 사용하여 추상 클래스를 흉내낼 수 있다.
// class Shape {
//   constructor() {
//     if (new.target === Shape) {
//       throw new TypeError("Cannot construct Shape instance directly");
//     }
//   }

//   getArea() {
//     throw new Error("Must overridge method");
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   getArea() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// const myCircle = new Circle(5);

// console.log("Area:", myCircle.getArea());

// ### 문제 5: 생성자 함수와 객체 생성
// - JavaScript에서 생성자 함수의 역할은 무엇인가요? 생성자를 사용하여 객체를 초기화하는 예시를 작성하세요.

// A : 생성자(Constructor)는 객체가 생성될 때 호출되며, 객체의 초기화를 담당 / JavaScript에서는 해당 메서드를 사용하여 생성자를 정의한다.
// class Student {
//   constructor(name, id) {
//     this.name = name;
//     this.id = id;
//   }

//   study() {
//     console.log(`${this.name} is studying.`);
//   }
// }

// const student = new Student("Alice", 12345);
// student.study();

// ### 문제 6: Getter와 Setter 메서드
// - JavaScript에서 Getter와 Setter 메서드를 사용하여 객체의 속성에 접근하고 수정하는 방법을 설명하세요. 관련 예시를 작성하세요.

// A : JavaScript에서 캡슐화를 구현하기 위해 Getter와 Setter 메서드를 사용할 수 있고,
//     이를 통해 객체 속성에 간접적으로 접근할 수 있으며 직접적인 접근은 제한할 수 있다. (코드의 오염으로 인해)
// class Person {
//   #name;
//   _age;
//   address;

//   constructor(name, age, address) {
//     this.#name = name;
//     this._age = age;
//     this.address = address;
//   }

//   getName() {
//     return this.#name;
//   }

//   setName(name) {
//     this.#name = name;
//   }
// }

// const person = new Person("Jhon", 30, "Seoul");
// console.log(person.getName());

// console.log(person.#name);

// ### 문제 7: 함수형 프로그래밍의 특징
// - 함수형 프로그래밍의 주요 특징과 장점을 설명하세요. 순수 함수, 불변성, 고차 함수의 개념을 포함하여 답변하세요.

// 함수형 프로그래밍(FP : Functional Programing)은 상태 변화와 부수 효과를 최소화하고 순수 함수를 통해 문제를 해결하는 프로그래밍 패러다임
// 함수형 프로그래밍에는 순수 함수, 불변성, 고차 함수가 있다.

// const add = (a, b) => a + b; // 순수 함수 예시

// ### 문제 8: 순수 함수와 부수 효과
// - 순수 함수와 부수 효과의 차이를 설명하세요. 순수 함수의 예시와 부수 효과가 있는 함수의 예시를 작성하세요.

// 순수 함수는 동일한 입력에 대해 동일한 출력을 반환하여 함수 외부의 상태를 변경하지 않지만,
// 부수 효과가 있는 함수는 외부 상태를 변경하거나 외부상태에 의존하여 예측이 어렵고, 디버깅이 복잡해집니다.

// <순수함수>
// function add (a, b) {
// return a + b }

// <부수 효과가 있는 함수>
// let count = 0;
// function increment() {
// count +=1;
// return count;
// }

// ### 문제 9: 고차 함수의 활용
// - JavaScript에서 고차 함수란 무엇인가요? `map`, `filter`, `reduce` 함수의 사용 예시를 각각 작성하세요.

// 고차 함수는 다른 함수를 인자로 받거나 함수를 반환하는 함수이며, 함수형 프로그래밍에서는 함수를 데이터처럼 취급하므로 고차 함수의 활용이 빈번합니다.

// const numbers = [1, 2, 3, 4, 5];

// map : 각 요소를 반환하여 새로운 배열 생성
// const doubled = number.map((n) => n * 2);

// filter : 조건에 맞는 요소만으로 새로운 배열 생성
// const evens = number.filter((n) => n % 2 === 0);

// sum : 배열을 하나의 값으로 축소
// const sum = number.reduse((acc, n) => acc + n, 0);

// ### 문제 10: 불변성 유지
//- 불변성을 유지하는 방법을 설명하고, JavaScript에서 Spread 연산자를 사용하여 객체나 배열의 불변성을 유지하는 예시 코드를 작성하세요.

// 불변성은 데이터가 한 번 생성되면 변경되지 않는 성질을 말하며, 불변 데이터를 사용하면 상태 변화로 인한 오류를 방지하고 코드의 안정성을 높일 수 있습니다.
// 불변성을 유지하는 방법은 객체나 배열을 직접 변경하지 않고 복사본을 생성하여 메모리에 주소를 격리시킨다.

// const originalArray = [1, 2, 3];
// const newArray = [...originalArray, 4];

// console.log(originalArray);
// console.log(newArray);

// const originalObj = { a: 1, b: 2 };
// const newObj = { ...originalObj, b: 3 };

// console.log(originalObj);
// console.log(newObj);

// ### 문제 11: 커링(Currying)
// - 커링의 개념을 설명하고, 커링을 적용한 함수의 예시를 작성하세요.

// 커링은 다중인자를 받는 함수를 단일 인자함수의 체인으로 변환하는 과정이다.
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// const addFive = add(5);
// console.log(addFive(3));

// ### 문제 12: 함수 합성
// - 함수 합성의 개념을 설명하고, 두 개 이상의 함수를 결합하여 새로운 함수를 만드는 예시를 작성하세요.

// 함수 합성은 두개 이상의 함수를 결합해서 새로운 함수를 만드는 과정이다.
// const compose = (f, g) => (x) => f(g(x));

// const square = (x) => x * x;
// const addOne = (x) => x + 1;

// const squareAfterAddOne = compose(square, addOne);

// console.log(squareAfterAddOne(3));

// ### 문제 13: 모나드의 저주
// - 모나드의 저주란 무엇인가요? 모나드를 이해하고 설명하기 어려운 이유를 설명하고, 모나드의 개념을 비유적으로 설명해 보세요.

// 익숙한듯 하면서도 동시에 이해하기 어려운 존재이고 모나드를 충분히 이해한 개발자들조차 명확하게 설명하는데 어려움을 겪는데 이를 모나드의 저주라고 부른다.
// 모나드는 특정 값이나 상태를 감싸고 있으며, 그 안에서의 연산을 안전하게 처리할 수 있도록 돕는 일종의 컨테이너이다.

// ### 문제 14: 재귀 함수의 활용
// - 재귀 함수의 개념을 설명하고, 팩토리얼을 계산하는 재귀 함수의 예시를 작성하세요.

// 재귀 함수는 자기 자신을 호출하여 반복적인 잡업을 수행하는 함수이다.
// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

// ### 문제 15: 객체 지향 프로그래밍과 함수형 프로그래밍 비교
// - 객체 지향 프로그래밍(OOP)과 함수형 프로그래밍(FP)의 차이점을 설명하세요. 두 패러다임의 장단점을 비교하세요.

// 객체 지향 프로그래밍(OOP)의 장점은 코드 재사용성, 모듈성, 유지 보유성 등 이며, 단점은 상태변화에 따른 버그 발생 가능성이 있다.
// 함수형 프로그래밍(FP)는 순수 함수와 불변성을 강조하며 장점은 상태변화와 예측 가능성, 테스트 용이성 등이 있고, 단점은 학습 곡선이 가파르다는 점이다.

// ### 문제 16: 오버라이딩과 오버로딩의 차이
// - 오버라이딩(Overriding)과 오버로딩(Overloading)의 차이점을 설명하고, JavaScript에서 오버라이딩을 구현한 예시를 작성하세요.

// 오버라이딩은 부모클래스에 정의된 메서드를 자식클래스에서 재정의하여 사용한다.
// 오버로딩은 동일한 이름의 메서드나 함수를 여러 개 정의하되, 매개변수의 타입이나 개수를 다르게 설정하는 방식이다.

// class Animal {
//   sleep() {
//     console.log("Animal sleeps.");
//   }
// }

// class Dog extends Animal {
//   sleep() {
//     console.log("Dog sleeps.");
//   }
// }

// const myDog = new Dog();

// myDog.sleep();

// ### 문제 17: 함수형 프로그래밍에서의 상태 관리
// - 함수형 프로그래밍에서 상태 관리는 어떻게 이루어지나요? 상태 변화를 최소화하고 불변성을 유지하는 방법을 설명하세요.

// 함수형 프로그래밍은 상태를 직접 변경하지 않고 새로운 상태를 반환해서 상태를 관리한다.
// 상태변화는 순수 함수 처리가 되면서 이를 통해 코드를 예측하는 유지 보수가 가능하다.

// const state = { count: 0 };

// function increment(state) {
//   return { ...state, count: state.count + 1 };
// }

// const newState = increment(state);

// console.log(newState);

// ### 문제 18: 프로토타입 상속
// - JavaScript에서 프로토타입 상속이란 무엇인가요? 프로토타입을 사용하여 객체 간 상속을 구현하는 방법을 설명하고, 예시 코드를 작성하세요.

// 프로토타입 상속은 자바스크립트의 객체지향 프로그래밍 기법으로 부모(혹은 조상) 객체가 가지고 있는 속성이나 메서드를 자식(혹은 자손) 객체에 상속을 구현한다.
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.eat = function () {
//   console.log(this.name + " is eating.");
// };

// function Dog(name) {
//   Animal.call(this, name);
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function () {
//   console.log(this.name + " is barking.");
// };

// const myDog2 = new Dog("Rex");
// myDog2.eat();
// myDog2.bark();

// ### 문제 19: Todo 리스트 함수형 프로그래밍 예제

// - 함수형 프로그래밍의 개념을 활용하여 간단한 Todo 리스트 애플리케이션을 구현하세요. 항목 추가, 삭제, 완료 처리를 순수 함수로 구현하는 코드를 작성하세요.
const todos = [
  { id: 1, text: "함수형 프로그래밍 공부", completed: false },
  { id: 2, text: "자바스크립트 복습", completed: true },
  { id: 3, text: "프로젝트 아이디어 구상", completed: false },
];

const addTodo = (todos, newTodo) => [...todos, newTodo];

const removeTodo = (todos, id) => todos.filter((todo) => todo.id !== id);

const toggleTodo = (todos, id) =>
  todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );

const incompleteTodos = todos.filter((todo) => !todo.completed);

let updatedTodos = addTodo(todos, {
  id: 4,
  text: "테스트 코드 작성",
  completed: false,
});

updatedTodos = toggleTodo(updatedTodos, 1);
updatedTodos = removeTodo(updatedTodos, 2);

console.log(updatedTodos);
