import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Containerfilter, LabelFilter, InputFiler } from '../ui/Filter.styled';

const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <Containerfilter>
      <LabelFilter htmlFor={filterInputId}>Find contacts by name </LabelFilter>
      <InputFiler
        type="text"
        name="filter"
        placeholder="Enter a name for the search query"
        id={filterInputId}
        title="Filter is case insensitive"
        value={value}
        onChange={onChange}
      />
    </Containerfilter>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Filter;
