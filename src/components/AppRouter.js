import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import AddBook from './AddBook';
import BooksList from './BooksList';
import EditBook from './EditBook';
import useLocalStorage from '../hooks/useLocalStorage';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import BooksContext from '../context/BooksContext';

const AppRouter = () => {
    const [books, setBooks] = useLocalStorage('book', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <BooksContext.Provider value={{ books, setBooks }}>
                        <Switch>
                            <Route component={BooksList} path="/" exact={true} />
                            <Route component={AddBook} path="/add" />
                            <Route component={EditBook} path="/edit/:id" />
                            <Route component={() => <Redirect to="/" />} />
                        </Switch>
                    </BooksContext.Provider>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;   