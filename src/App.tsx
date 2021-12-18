import { FC, useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { addBook, loadBooks, removeBook } from './redux/action-creators';

const App: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addBook({
        item_id: Date.now().toString(),
        title: 'Zains Book Title',
        category: Date.now().toString(),
      })
    );
    dispatch(loadBooks());

  }, []);

  return (
    <div className="App">
      <input type="text" name="book" />
      <input type="text" name="author" />
      <button type="button">Add</button>
    </div>
  );
};

export default App;
