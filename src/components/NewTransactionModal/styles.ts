import styled from 'styled-components';
import { darken, transparentize } from 'polished';

const colors = {
  red: '#e52e4d',
  green: '#33cc95'
};

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    color: var(--text-title);

    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;

    padding: 0 1.5rem;

    background: #e7e9ee;
    border-radius: .25rem;
    border: 1px solid #d7d7d7;

    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;

    font-size: 1rem;
    font-weight: 600;

    padding: 0 1.5rem;
    margin-top: 1.5rem;

    border: 0;
    color: white;
    border-radius: .25rem;
    background: var(--green);

    transition: filter .2s;

    &:hover {
      filter: brightness(.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  
  display: grid;
  
  gap: .5rem;
  grid-template-columns:  1fr 1fr;
`;

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border-radius: .25rem;  
  border: 1px solid #d7d7d7;
  background: ${(props) => props.isActive
    ? transparentize(.9, colors[props.activeColor])
    : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color .2s;

  &:hover {
    border-color: ${darken(.1, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;

    font-size: 1rem;
    margin-left: 1rem;
    color: var(--text-title);
  }
`;