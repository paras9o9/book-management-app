import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


// checking if the book prop is passed or not using the ternary operator.
const BookForm = (props) => {
    const [book, setBook] = useState(() => {
        return {
            bookname: props.book ? props.book.bookname : '',
            author: props.book ? props.book.author : '',
            quantity: props.book ? props.book.quantity : '',
            price: props.book ? props.book.price : '',
            date: props.book ? props.book.date : ''
        };
    });
    const [errorMsg, setErrorMsg] = useState('');
    // ES6 destructuring syntax 
    const { bookname, author, price, quantity } = book;
    // Inside this method, we're first checking if the user has entered all the details using the every array method
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [bookname, author, price, quantity];
        let errorMsg = '';
        // !!!
        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const book = {
                id: uuidv4(),
                bookname,
                author,
                price,
                quantity,
                date: new Date()
            };
            props.handleOnSubmit(book);
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };
    // Inside the handleInputChange method, we've added a switch statement to change the value of the state based on which input field is changed.
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            // we're checking to see if the entered value is an integer without a decimal point.
            case 'quantity':
                if (value === '' || parseInt(value) === +value) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            //  we're checking for a decimal number with only two digits after the decimal point.
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setBook((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
        }
    };
    // console.log(handleInputChange());

    return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                {/* Group 1 */}
                <Form.Group controlId="name">
                    <Form.Label>
                        Book Name
                    </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="bookname"
                        value={bookname}
                        placeholder="Enter name of book"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                {/* Group 2 */}
                <Form.Group controlId="author">
                    <Form.Label>
                        Book Author
                    </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="author"
                        value={author}
                        placeholder="Enter name of author"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                {/* Group 3 */}
                <Form.Group controlId="quantity">
                    <Form.Label>
                        Quantity
                    </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="number"
                        name="quantity"
                        value={quantity}
                        placeholder="Enter available quantity"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                {/* Group 4 */}
                <Form.Group controlId="price">
                    <Form.Label>
                        Book price
                    </Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="price"
                        value={price}
                        placeholder="Enter price of book"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-btn">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default BookForm;
