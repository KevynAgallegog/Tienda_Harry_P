import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic } from '@fortawesome/free-solid-svg-icons';
import './BookStore.css';
import Cart from '../Carrito/Carrito';

function BookStore() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J.K. Rowling',
      price: 10.99,
      description: 'The first book in the Harry Potter series.',
      imageUrl: 'https://i.pinimg.com/474x/16/fc/ef/16fcefb7a6af4c45e13020ab4ebfe344.jpg',
      stock: 15
    },
    {
      id: 2,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      price: 11.99,
      description: 'The second book in the Harry Potter series.',
      imageUrl: 'https://i.pinimg.com/474x/cd/74/53/cd745305f88a4139e204f57d11779bd4.jpg',
      stock: 10
    },
    {
        id: 3,
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K. Rowling',
        price: 12.99,
        description: 'The third book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/7a/6b/ac/7a6bac2635c0c6fbaa371686ad2b045d.jpg',
        stock: 9
      },
      {
        id: 4,
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        price: 13.99,
        description: 'The fourth book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/63/e8/55/63e855ededb7bac4cb1accd8a467990e.jpg',
        stock: 10
      },
      {
        id: 5,
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
        price: 14.99,
        description: 'The fifth book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/8c/9b/a8/8c9ba8c6475ad1d3e5b2e7f36341afcc.jpg',
        stock: 8
      },
      {
        id: 6,
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J.K. Rowling',
        price: 15.99,
        description: 'The sixth book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/d5/93/3d/d5933d3947dfce07f13ac63a1f6f3509.jpg',
        stock: 11
      },
      {
        id: 7,
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J.K. Rowling',
        price: 16.99,
        description: 'The seventh and final book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/0a/79/dd/0a79dd7d98d41d8142fb2a91a62cce4a.jpg',
        stock: 7
      },
      {
        id: 8,
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J.K. Rowling',
        price: 15.99,
        description: 'The sixth book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/7e/21/a7/7e21a7972917e3993d7b17763da314c1.jpg',
        stock: 9
      },
      {
        id: 9,
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J.K. Rowling',
        price: 16.99,
        description: 'The seventh and final book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/8c/06/a0/8c06a0f8f1c3a8fcc94c4ba97601e580.jpg',
        stock: 8
      }

    
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const addToCart = (book) => {
    const updatedCart = [...cartItems];
    const updatedBooks = books.map((b) => {
      if (b.id === book.id && b.stock > 0) {
        b.stock -= 1;
      }
      return b;
    });

    const existingBook = updatedCart.find((item) => item.id === book.id);

    if (existingBook) {
      existingBook.quantity += 1;
    } else {
      book.quantity = 1;
      updatedCart.push(book);
    }

    setCartItems(updatedCart);
    setBooks(updatedBooks);
  };

  const removeFromCart = (book) => {
    const updatedCart = [...cartItems];
    const updatedBooks = books.map((b) => {
      if (b.id === book.id) {
        b.stock += 1;
      }
      return b;
    });

    const existingBook = updatedCart.find((item) => item.id === book.id);

    if (existingBook) {
      if (existingBook.quantity > 1) {
        existingBook.quantity -= 1;
      } else {
        const index = updatedCart.findIndex((item) => item.id === book.id);
        updatedCart.splice(index, 1);
      }
    }

    setCartItems(updatedCart);
    setBooks(updatedBooks);
  };

  const handleSearch = () => {
    
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredBooks);
  };

  return (
    <div>
      <h1 id="titulo">
        <FontAwesomeIcon icon={faMagic} className="icon" /> Harry Potter Book Store
      </h1>

      <div className="search-container">
        <input
          type="search"
          placeholder="
          Look for your favorite  Book"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch();
          }}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className='Carrrito'>
        <button className='Carro'>
          <img
            src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            alt="Carrito"
          />
        </button>
        <span>{cartItems.length}</span>
      </div>
      <br /> <br />
      <p className='typewriter-text'>
      ¡Welcome to the Harry Potter book store! Discover the magic of Hogwarts through our books <br /> 
        and magical products. Find your treasures in Your Magic Store!
      </p>

      <ul className='book-grid'>
        {searchTerm
          ? searchResults.map((book) => (
              <li key={book.id} className='book-card'>
                <h2>{book.title}</h2>
                <img src={book.imageUrl} alt={book.title} />
                <p>Author: {book.author}</p>
                <p>Price: ${book.price}</p>
                <p>{book.description}</p>
                <p>Stock: {book.stock}</p>
                <button className='Agregar' onClick={() => addToCart(book)} disabled={book.stock === 0}>
                  {book.stock === 0 ? 'Agotado' : 'Agregar al carrito'}
                </button>
              </li>
            ))
          : books.map((book) => (
              <li key={book.id} className='book-card'>
                <h2>{book.title}</h2>
                <img src={book.imageUrl} alt={book.title} />
                <p>Author: {book.author}</p>
                <p>Price: ${book.price}</p>
                <p>{book.description}</p>
                <p>Stock: {book.stock}</p>
                <button className='Agregar' onClick={() => addToCart(book)} disabled={book.stock === 0}>
                  {book.stock === 0 ? 'Agotado' : 'Add to cart'}
                </button>
              </li>
            ))
        }
      </ul>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} addToCart={addToCart} />
    </div>
  );
}

export default BookStore;



