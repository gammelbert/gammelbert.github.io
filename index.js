export default function app() {
  const that = {};

  function greet() {
    console.log('hello');
  }

  that.greet = greet;
  return that;
}
