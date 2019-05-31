export default function docs() {
  const that = {};

  function sayHello() {
    console.log('hi!');
  }

  function sayBye() {
    console.log('bye');
  }

  that.sayHello = sayHello;
  that.sayBye = sayBye;

  return that;
}
