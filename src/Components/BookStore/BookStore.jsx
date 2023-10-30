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
    }
    ,
    {
      id: 2,
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
      price: 11.99,
      description: 'The second book in the Harry Potter series.',
      imageUrl: 'https://i.pinimg.com/474x/cd/74/53/cd745305f88a4139e204f57d11779bd4.jpg'
    },
    {
        id: 3,
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J.K. Rowling',
        price: 12.99,
        description: 'The third book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/7a/6b/ac/7a6bac2635c0c6fbaa371686ad2b045d.jpg'
      },
      {
        id: 4,
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        price: 13.99,
        description: 'The fourth book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/63/e8/55/63e855ededb7bac4cb1accd8a467990e.jpg'
      },
      {
        id: 5,
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J.K. Rowling',
        price: 14.99,
        description: 'The fifth book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/8c/9b/a8/8c9ba8c6475ad1d3e5b2e7f36341afcc.jpg'
      },
      {
        id: 6,
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J.K. Rowling',
        price: 15.99,
        description: 'The sixth book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/d5/93/3d/d5933d3947dfce07f13ac63a1f6f3509.jpg'
      },
      {
        id: 7,
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J.K. Rowling',
        price: 16.99,
        description: 'The seventh and final book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/0a/79/dd/0a79dd7d98d41d8142fb2a91a62cce4a.jpg'
      },
      {
        id: 8,
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J.K. Rowling',
        price: 15.99,
        description: 'The sixth book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/7e/21/a7/7e21a7972917e3993d7b17763da314c1.jpg'
      },
      {
        id: 9,
        title: 'Harry Potter and the Deathly Hallows',
        author: 'J.K. Rowling',
        price: 16.99,
        description: 'The seventh and final book in the Harry Potter series.',
        imageUrl: 'https://i.pinimg.com/474x/8c/06/a0/8c06a0f8f1c3a8fcc94c4ba97601e580.jpg'
      }
      
      
    // Agrega más libros aquí
  ]);

  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const addToCart = (book) => {
    const updatedCart = [...cartItems];
    const existingBook = updatedCart.find((item) => item.id === book.id);

    if (existingBook) {
      existingBook.quantity += 1;
    } else {
      book.quantity = 1;
      updatedCart.push(book);
    }

    setCartItems(updatedCart);
  };

  const removeFromCart = (book) => {
    const updatedCart = [...cartItems];
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
  };

  const handleSearch = () => {
    // Filtra los libros que coinciden con el término de búsqueda
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
          placeholder="Busca tu libro preferido"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch();
          }}
        />
        <button type="button" onClick={handleSearch}>
          Buscar
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
        ¡Bienvenido a la tienda de libros de Harry Potter! Descubre la magia de Hogwarts a través de nuestros libros <br /> y productos mágicos. ¡Encuentra tus tesoros en Tu Tienda Mágica!
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
                <button className='Agregar' onClick={() => addToCart(book)}>
                  <img src="https://cdn-icons-png.flaticon.com/128/3523/3523887.png" alt="Carrito" />
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
                <button className='Agregar' onClick={() => addToCart(book)}>
                  <img src="https://cdn-icons-png.flaticon.com/128/3523/3523887.png" alt="Carrito" />
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
