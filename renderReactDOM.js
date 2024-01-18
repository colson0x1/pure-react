// ReactDOM.render(React.createElement(App), document.getElementById('root'));

/* @ React v18 */
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// v18: No more access to JSX in render()
root.render(React.createElement(App));
