const quiz = {
  id: 1,
  quizname: 'React Quiz',
  questions: [
    {
      id: 0,
      question: 'What is React primarily used for?',
      rightAnswer: 'Building user interfaces',
      answers: [
        'Server-side rendering',
        'Building user interfaces',
        'Database management',
        'Operating system development'
      ]
    },
    {
      id: 0,
      question: 'What is the syntax extension used in React to write HTML-like code in JavaScript?',
      rightAnswer: 'JSX',
      answers: [
        'XML',
        'JSX',
        'JSON',
        'HTML5'
      ]
    },
    {
      id: 0,
      question: 'Which method is used to create a new React component?',
      rightAnswer: 'React.createElement()',
      answers: [
        'React.component()',
        'React.createElement()',
        'React.newComponent()',
        'React.createComponent()'
      ]
    },
    {
      id: 0,
      question: 'What is the purpose of state in React?',
      rightAnswer: 'To manage dynamic data',
      answers: [
        'To define static content',
        'To manage dynamic data',
        'To handle routing',
        'To style components'
      ]
    },
    {
      id: 0,
      question: 'Which hook is used to add state to a functional component in React?',
      rightAnswer: 'useState',
      answers: [
        'useEffect',
        'useState',
        'useContext',
        'useReducer'
      ]
    },
    {
      id: 0,
      question: 'What is the virtual DOM in React?',
      rightAnswer: 'A copy of the actual DOM kept in memory',
      answers: [
        'A copy of the actual DOM kept in memory',
        'A new type of DOM introduced by React',
        'The browser\'s DOM API',
        'A database for storing UI components'
      ]
    },
    {
      id: 0,
      question: 'How do you pass data from a parent component to a child component in React?',
      rightAnswer: 'Using props',
      answers: [
        'Using states',
        'Using props',
        'Using hooks',
        'Using context'
      ]
    },
    {
      id: 0,
      question: 'What is the purpose of the useEffect hook in React?',
      rightAnswer: 'To perform side effects in function components',
      answers: [
        'To manage local state',
        'To perform side effects in function components',
        'To create context',
        'To fetch data from the server'
      ]
    },
    {
      id: 0,
      question: 'Which of the following is a lifecycle method in React class components?',
      rightAnswer: 'componentWillMount',
      answers: [
        'componentWillMount',
        'useEffect',
        'renderElement',
        'useState'
      ]
    },
    {
      id: 0,
      question: 'What is the default behavior of forms in React?',
      rightAnswer: 'Forms prevent the default submit action',
      answers: [
        'Forms automatically submit data',
        'Forms do not maintain state',
        'Forms have built-in validation',
        'Forms prevent the default submit action'
      ]
    },
    {
      id: 0,
      question: 'How can you handle events in React?',
      rightAnswer: 'Using event handlers',
      answers: [
        'Inline JavaScript',
        'Using props',
        'Using event handlers',
        'Using lifecycle methods'
      ]
    },
    {
      id: 0,
      question: 'What does the key prop help with in React lists?',
      rightAnswer: 'Identifying elements uniquely',
      answers: [
        'Identifying elements uniquely',
        'Applying styles',
        'Passing data',
        'Handling events'
      ]
    },
    {
      id: 0,
      question: 'Which tool is commonly used to create a new React application?',
      rightAnswer: 'Create React App',
      answers: [
        'Webpack',
        'Babel',
        'Create React App',
        'NPM'
      ]
    },
    {
      id: 0,
      question: 'What does the context API provide in React?',
      rightAnswer: 'A way to manage global state',
      answers: [
        'A way to style components',
        'A way to manage global state',
        'A way to fetch data',
        'A way to define routes'
      ]
    },
    {
      id: 0,
      question: 'What does JSX stand for?',
      rightAnswer: 'JavaScript XML',
      answers: [
        'JavaScript Syntax Extension',
        'JavaScript XML',
        'JavaScript XSS',
        'JavaScript eXtended'
      ]
    },
    {
      id: 0,
      question: 'How do you create a ref in React?',
      rightAnswer: 'React.createRef()',
      answers: [
        'React.createRef()',
        'React.useRef()',
        'React.ref()',
        'React.createElement()'
      ]
    },
    {
      id: 0,
      question: 'What is a higher-order component (HOC) in React?',
      rightAnswer: 'A function that takes a component and returns a new component',
      answers: [
        'A component that manages state',
        'A function that takes a component and returns a new component',
        'A built-in React component',
        'A method for rendering components conditionally'
      ]
    },
    {
      id: 0,
      question: 'What is React Router used for?',
      rightAnswer: 'Routing in a React application',
      answers: [
        'Managing state',
        'Styling components',
        'Routing in a React application',
        'Fetching data'
      ]
    },
    {
      id: 0,
      question: 'What is the significance of the render method in React class components?',
      rightAnswer: 'To render the UI',
      answers: [
        'To fetch data from the server',
        'To update the DOM',
        'To render the UI',
        'To manage state'
      ]
    },
    {
      id: 0,
      question: 'What is the correct syntax for a functional component in React?',
      rightAnswer: 'function Component() {return <div></div>; }',
      answers: [
        'function Component() {return <div></div>; }',
        'class Component extends React.Component {render() {return <div></div>; } }',
        'React.createComponent(Component, <div></div>)',
        'Component() {return <div></div>; }'
      ]
    },
    {
      id: 0,
      question: 'What is the purpose of the prop-types library in React?',
      rightAnswer: 'To enforce type-checking of props',
      answers: [
        'To handle side effects',
        'To enforce type-checking of props',
        'To manage state',
        'To define routes'
      ]
    },
    {
      id: 0,
      question: 'Which hook would you use to manage a form\'s input state in React?',
      rightAnswer: 'useState',
      answers: [
        'useEffect',
        'useRef',
        'useState',
        'useReducer'
      ]
    },
    {
      id: 0,
      question: 'What is the purpose of React\'s strict mode?',
      rightAnswer: 'To highlight potential problems in an application',
      answers: [
        'To enable type checking',
        'To highlight potential problems in an application',
        'To enforce strict coding standards',
        'To enhance performance'
      ]
    },
    {
      id: 0,
      question: 'How can you optimize performance in a React application?',
      rightAnswer: 'Using memoization techniques',
      answers: [
        'Using memoization techniques',
        'Writing inline CSS',
        'Using class components',
        'Avoiding state management'
      ]
    },
    {
      id: 0,
      question: 'What is the purpose of the Fragment component in React?',
      rightAnswer: 'To wrap multiple elements without adding extra nodes to the DOM',
      answers: [
        'To manage state',
        'To wrap multiple elements without adding extra nodes to the DOM',
        'To fetch data',
        'To define routes'
      ]
    }
  ]
};

const quizzes = [quiz];

const prepopulate = (): void => localStorage.setItem('quizzes', JSON.stringify(quizzes));
export default prepopulate;
