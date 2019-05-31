import './styles.scss';
import docs from './docs';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack', '!!!', '?'], ' ');

  return element;
}

$('body').append(component());

docs.sayHello();
docs.sayBye();

if (module.hot) {
  module.hot.accept('./docs.js', () => console.log('docs changed'));
}
