import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { ISearchBox } from './typings';

function SearchBox(props: ISearchBox) {
  const { onUserSearch = () => {} } = props;

  const [userInput, setUserInput] = useState('');

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e?.target?.value);
  };

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUserSearch(userInput);
  };

  return (
    <form onSubmit={onSearchSubmit} noValidate autoComplete="off">
      <TextField
        fullWidth={true}
        id="outlined-basic"
        label="Search Videos"
        variant="outlined"
        onChange={onSearch}
      />
    </form>
  );
}

export { SearchBox };
export default SearchBox;
