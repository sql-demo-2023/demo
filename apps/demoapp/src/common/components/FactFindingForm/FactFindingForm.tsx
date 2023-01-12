import { useForm, Controller } from 'react-hook-form';

import { Input } from '@material-ui/core';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
// import styles from './FactFindingForm.module.css';
import { Box, styled } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import {
  updateCategory,
  reset,
  selectCategory,
} from '../../../features/category/categorySlice';
import BasicCoverageForm from './BasicCoverageForm';
import RiderCoverageForm from './RiderCoverageForm';
interface IFormInput {
  basic: { category: string; price: number; basicNumber: number };
  rider: [];
}
const StyledBox = styled(Box)(({ theme }) => ({
  padding: '0 20px',
}));
export default function FactFindingForm() {
  const { control, handleSubmit, getValues } = useForm<IFormInput>();
  const [bookCategories, setBookCategories] = useState([]);
  async function loadBookCategoriesHandler() {
    const res = await fetch(`/api/category`);
    // const { categories } = await res.json();
    // console.log(categories.categories);
    const { categories } = await res.json();
    console.log(categories);
    setBookCategories(categories);
    console.log(bookCategories, 'bookCategories');
  }

  useEffect(() => {
    loadBookCategoriesHandler();
    console.log(bookCategories, 'bookCategories');
  }, []);
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);
  const onSubmit = (data: IFormInput) => {
    console.log(data, 'data');
    alert(JSON.stringify(data));
  };

  return (
    <StyledBox sx={{ display: 'flex', flexDirection: 'column' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Basic</label>
          <Controller
            render={({ field: { onChange, value } }) => (
              <BasicCoverageForm value={value} onChange={onChange} />
            )}
            name="basic"
            control={control}
            defaultValue={{
              category: 'GIS',
              price: 20,
              basicNumber: 0,
            }}
          />
        </div>
        <div>
          <label>Rider</label>
          <Controller
            render={({ field: { onChange, value } }) => (
              <RiderCoverageForm value={value} onChange={onChange} />
            )}
            name="rider"
            control={control}
            defaultValue={[]}
          />
        </div>
        <label htmlFor="save">Save Plan</label>
        <input type="submit" id="save" />
      </form>
    </StyledBox>
  );
}
