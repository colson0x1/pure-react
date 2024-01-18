const Person = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { class: 'title' }, 'React IS rendered'),
    React.createElement(
      Person,
      { name: 'Colson', occupation: 'Software Engineer' },
      null,
    ),
    React.createElement(
      Person,
      { name: 'Shishir', occupation: 'Software Engineer' },
      null,
    ),
    React.createElement(
      Person,
      { name: 'Samriddha', occupation: 'Trader' },
      null,
    ),
  ]);
};
