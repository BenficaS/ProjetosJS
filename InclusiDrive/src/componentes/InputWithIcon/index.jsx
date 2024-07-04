import { MdLocationOn } from 'react-icons/md';
import styled from 'styled-components';
import { InputComponent2 } from '../InputComponent2';

const InputWithIcon = styled.div`
    display: flex;
    align-items: center;
`;

export function InputComponentWithIcon({ placeHolderText }) {
    return (
      <InputWithIcon>
        <MdLocationOn />
        <InputComponent2 placeHolderText={placeHolderText} />
      </InputWithIcon>
    );
  }