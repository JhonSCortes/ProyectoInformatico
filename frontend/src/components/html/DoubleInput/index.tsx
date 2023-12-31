import React, { useState, useEffect } from 'react';
import './DoubleInputComponent.css';
import { ComponentInputProps } from '../../../interfaces/components';

const DoubleInputComponent: React.FC<ComponentInputProps> = (props) => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  useEffect(() => {
    if (props.label && props.inputController) {
      props.inputController(props.label, `${firstValue} ${secondValue}`);
    }
  }, [firstValue, secondValue])

  return (
    <>
      <label className='input_label'> {props.label} </label>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '0' }}>
        <input style={{ width: '100%' }} className='double_input_field first' type={props.type} onChange={(e) => setFirstValue(e.target.value)} required />
        <input style={{ width: '100%' }} className='double_input_field second' type={props.type} onChange={(e) => setSecondValue(e.target.value)} required />
      </div>
    </>
  )
}

export default DoubleInputComponent;
