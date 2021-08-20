import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

const DayPickerComponent = ({ handleSetData, placeholder }) => {
  const moment = require('moment');
  const [startDate, setStartDate] = useState('');
  return (
    <DayPickerStyler>
      <DatePicker
        selected={startDate}
        onChange={date => {
          setStartDate(date);
          handleSetData('end_date', moment(date).format('L'));
        }}
        dateFormat="yyyy/MM/dd"
        minDate={new Date()}
        placeholderText={placeholder}
      />
    </DayPickerStyler>
  );
};

const DayPickerStyler = styled.div`
  input {
    width: 400px;
    height: 30px;
    margin: 10px 0 30px 0;
    border: 1px solid #e5e5e5;
    text-align: center;
    border-radius: 5px;
    color: #808081;

    &:focus {
      outline: none;
    }
  }
`;

export default DayPickerComponent;
