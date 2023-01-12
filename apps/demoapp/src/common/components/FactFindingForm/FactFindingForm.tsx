import { useForm, Controller, FormProvider } from 'react-hook-form';

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
export type BasicValueType = {
  category: string | undefined;
  price: number | undefined;
  basicNumber: number | undefined;
  isFullFilled: boolean;
};
interface IFormInput {
  basic: BasicValueType;
  rider: [];
}
const StyledBox = styled(Box)(({ theme }) => ({
  padding: '0 20px',
}));
export default function FactFindingForm() {
  const methods = useForm<IFormInput>();
  const { control, handleSubmit } = methods;
  const [bookCategories, setBookCategories] = useState([]);
  async function loadBookCategoriesHandler() {
    const res = await fetch(`/api/category`);
    const { categories } = await res.json();
    setBookCategories(categories);
  }

  useEffect(() => {
    loadBookCategoriesHandler();
  }, []);
  const dispatch = useAppDispatch();
  const category = useAppSelector(selectCategory);
  const onSubmit = (data: IFormInput) => {
    console.log(data, 'data');
    alert(JSON.stringify(data));
  };

  return (
    <StyledBox sx={{ display: 'flex', flexDirection: 'column' }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Basic</label>
            <Controller
              render={({ field: { onChange, value } }) => (
                <BasicCoverageForm
                  value={value}
                  onChange={onChange}
                  bookCategories={bookCategories}
                />
              )}
              name="basic"
              control={control}
              defaultValue={{
                category: undefined,
                price: undefined,
                basicNumber: 0,
                isFullFilled: false,
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
      </FormProvider>
      {bookCategories.length > 0 &&
        bookCategories.map((c) => <li key={c.categoryId}>{c.name}</li>)}
    </StyledBox>
  );
}
