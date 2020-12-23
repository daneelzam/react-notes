import React from 'react';

function Note({ note }) {
  return (
        <li>
            {note && note.title}
            {note && note.body}
        </li>
  );
}

export default Note;
