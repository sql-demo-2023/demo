import { Input } from '@material-ui/core';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import {
  updateCategory,
  reset,
  selectCategory,
} from '../../../features/category/categorySlice';
// import styles from './FactFindingForm.module.css';

interface Props {
  value: [];
  onChange: (...event: any[]) => void;
}
const RiderCoverageForm: React.FC<Props> = ({ onChange, value }) => {
  const handleCategoryChange = (event) => {
    onChange({ ...value, category: event.target.value as string });
  };
  const handlePriceChange = (event: SelectChangeEvent) => {
    onChange({ ...value, price: event.target.value });
  };
  const handleBasicNumberChange = (event) => {
    console.log(value, 'v');
    onChange({ ...value, basicNumber: event.target.value as number });
  };

  return (
    <>
      {/* <div>
        <label>Rider</label>
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
          value={value.price.toString()}
          label="Price"
          onChange={handlePriceChange}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
        <div>
          <label>BasicNumber</label>
          <Input value={value.basicNumber} onChange={handleBasicNumberChange} />
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
        </div>
      </div> */}
    </>
  );
};
export default RiderCoverageForm;
