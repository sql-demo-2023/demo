import { useForm, Controller } from 'react-hook-form';

import { Input } from '@material-ui/core';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
// import styles from './FactFindingForm.module.css';
import { Box, styled } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import {
  updateCategory,
  reset,
  selectCategory,
} from '../../../features/category/categorySlice';

interface IFormInput {
  name: string;
  price: string;
}
const StyledBox = styled(Box)(({ theme }) => ({
  padding: '0 20px',
}));
export default function FactFindingForm() {
  const [price, setPrice] = useState('18');
  const { control, handleSubmit } = useForm<IFormInput>();
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);

  const onSubmit = (data: IFormInput) => {
    console.log(data, 'data');
    dispatch(updateCategory(data.name));
    alert(JSON.stringify(data));
  };

  const handleChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value as string);
  };

  return (
    <StyledBox sx={{ display: 'flex', flexDirection: 'column' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <Controller
            render={({ field }) => <Input {...field} />}
            name="name"
            control={control}
            defaultValue=""
          />
        </div>
        <div>
          <label>Age</label>
          <Controller
            name="price"
            render={({ field }) => (
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={price}
                label="Price"
                onChange={handleChange}
              >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            )}
            control={control}
            defaultValue={'20'}
          />
        </div>

        <input type="submit" />
      </form>
      <span>Current Category Name is {category}</span>
    </StyledBox>
  );
}
