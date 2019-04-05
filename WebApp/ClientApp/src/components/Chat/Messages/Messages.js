import React from 'react';

const isEven = (value) => value % 2 === 0;

const Messages = ( {props, message, id} ) => (
  <div className={'message ' + (isEven(id) ? 'odd' : 'even')} key={id}>
    { isEven(id) &&
      <div className="avatar">
            <img src="https://i.pinimg.com/474x/73/22/46/732246dc74fc508b41f5b7280320fc1e--corporate-photography-headshot-photography.jpg" alt="avatar" key={id} />
      </div>
    }
    <div className="content">
      {message}
    </div>
  </div>
)

export default Messages