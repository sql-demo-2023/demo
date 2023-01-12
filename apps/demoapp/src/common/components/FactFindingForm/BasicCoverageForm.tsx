import { Input } from '@material-ui/core';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import {
  updateCategory,
  reset,
  selectCategory,
} from '../../../features/category/categorySlice';
import { useEffect, useState } from 'react';
// import styles from './FactFindingForm.module.css';
import { BasicValueType } from './FactFindingForm';
import { useFormContext } from 'react-hook-form';
export type BasicCoverageFormProps = {
  value: BasicValueType;
  onChange: (...event: any[]) => void;
  bookCategories: any[];
};

const BasicCoverageForm: React.FC<BasicCoverageFormProps> = ({
  onChange,
  value,
  bookCategories,
}) => {
  const { register, resetField } = useFormContext();
  const [bookPrice, setBookPrice] = useState([]);
  const category = useAppSelector(selectCategory);
  useEffect(() => {
    const currentBookCategoryInfo = bookCategories.filter(
      (b) => b.name === category
    )[0];
    if (currentBookCategoryInfo) {
      setBookPrice(
        bookCategories[currentBookCategoryInfo.categoryId - 1].price
      );
    }
  }, [category, bookCategories]);
  // useEffect(() => {
  //   if (value.category && value.price && value.basicNumber) {
  //     value.isFullFilled = true;
  //   } else {
  //     value.isFullFilled = false;
  //   }
  // }, [value.category, value.price, value.basicNumber]);
  const dispatch = useAppDispatch();
  const handleCategoryChange = (event) => {
    dispatch(updateCategory(event.target.value));
    onChange({ ...value, category: event.target.value as string });
    resetField('price');
  };
  const handlePriceChange = (event: SelectChangeEvent) => {
    onChange({ ...value, price: event.target.value });
  };
  const handleBasicNumberChange = (event) => {
    onChange({ ...value, basicNumber: event.target.value as number });
  };

  return (
    <>
      <div>
        <label>Category</label>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value.category}
          label="Category"
          onChange={handleCategoryChange}
        >
          <MenuItem value={'CS'}>CS</MenuItem>
          <MenuItem value={'GIS'}>GIS</MenuItem>
          <MenuItem value={'RS'}>RS</MenuItem>
        </Select>
      </div>
      <div>
        <label>Price</label>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value.price && value.price.toString()}
          label="Price"
          onChange={handlePriceChange}
          {...register('basic.price', { required: true })}
        >
          {bookPrice.length > 0 &&
            bookPrice.map((b) => (
              <MenuItem value={b} key={b}>
                {b}
              </MenuItem>
            ))}
          {/* <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem> */}
        </Select>
        <div>
          <label>BasicNumber</label>
          <Input
            value={value.basicNumber}
            onChange={handleBasicNumberChange}
            {...register('basic.basicNumber', { required: true })}
          />
        </div>
        <div>
          <br />
          <span>Current Category Name is {value.category}</span>
          <br />
          <span>Current Price is {value.price}</span>
          <br />
          <span>
            Current Total Basic Price is {value.price * value.basicNumber}
          </span>
          <br />
          <span>Current isFullFilled is {value.isFullFilled}</span>
        </div>
      </div>
    </>
  );
};
export default BasicCoverageForm;
