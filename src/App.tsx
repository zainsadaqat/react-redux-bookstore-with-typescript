import { FC, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, loadBooks, removeBook } from './redux/action-creators';
import { State } from './redux/reducers/index';

let i = 0;
const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    i += 1;
    // dispatch(
    //   addBook({
    //     item_id: Date.now().toString(),
    //     title: `Zains Book Number ${i}`,
    //     category: `Category ${i}`,
    //   })
    // );
    dispatch(loadBooks());
  }, []);
  const books = useSelector((state: State) => state.books);
  console.log('Books: ', books);

  return (
    <div className="App">
      <input type="text" name="book" />
      <input type="text" name="author" />
      <button type="button">Add</button>
    </div>
  );
};

export default App;
