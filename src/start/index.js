export default function start() {
  const that = {};

  function init() {
    console.log('init start');
  }

  that.init = init;
  return that;
}
