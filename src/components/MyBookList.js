import { Container, Row, Spinner, Col } from 'react-bootstrap';
import MySingleBook from './MySingleBook';
import React, { useState } from 'react';
import "../style/MyBookList.css"

const MyBookList = ({ filterBooks, loading, error }) => {

    const [selected, setSelected] = useState('');

    console.log(selected)
    return (
        <>
            <Container id='container'>
                {error && <h1 className='text-danger'>{error}</h1>}
                {loading && !error && <Spinner color="#36d7b7" />}
                {!loading && !error &&
                    <div>
                        <h4 className='text-center mb-5'>Ultimi arrivi!</h4>
                        <Container>
                            <Row xs={1} sm={2} md={3} lg={4} className='gap-1'>
                                {filterBooks && filterBooks.map((book) => (
                                    <MySingleBook
                                        selected={selected===book.asin}
                                        setSelected={setSelected}
                                        key={book.asin}
                                        title={book.title}
                                        img={book.img}
                                        author={book.author}
                                        price={book.price}
                                        asin={book.asin}
                                        category={book.category}
                                    />
                                ))}
                            </Row>
                        </Container>
                    </div>
                }
            </Container>
        </>
    )
}

export default MyBookList;