import React from 'react';
import { LableFilter, InputFilter } from './Filter.styled';
import { FILTER } from 'redux/contacts/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = evt => {
    dispatch(FILTER(evt.target.value));
  };

  return (
    <LableFilter>
      Find contacts by name
      <InputFilter type="name" value={filter} onChange={handleChange} />
    </LableFilter>
  );
};
