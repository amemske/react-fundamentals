import React from 'react';

// descructuring props for book component
const Book = (props) => {
  const { img, title, make } = props;

  console.log(props);

  const clickHandler = (e) => {
    alert('hellow world');
    console.log('e.target is' + e.target);
    console.log('e is' + e);
  };
  const complexExample = (make) => {
    console.log(make);
  };
  return (
    <article
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='amazon1' />

      <h2 style={{ color: '#097969' }} onClick={() => console.log(title)}>
        {title.toUpperCase()}
      </h2>

      <p>
        <strong>{make}</strong>
      </p>
      <button type='button' onClick={clickHandler}>
        Sample Button
      </button>
      <button type='button' onClick={() => complexExample(make)}>
        complex Button
      </button>
      {/* <p>{children}</p> */}
    </article>
  );
};

export default Book;
