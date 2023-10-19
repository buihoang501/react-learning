import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Users from './components/Users';
import Posts from './components/Posts';
function App() {
  return (
    <Fragment>
      <Counter />
      <Auth />
      <Users />
      <Posts />
    </Fragment>
  );
}

export default App;
