import * as React from 'react';
import './Hello.css';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

function Hello({name, enthusiasmLevel = 1}: Props){
  if(enthusiasmLevel <= 0){
    throw new Error('You should be more enthusiastic :0) ');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;
