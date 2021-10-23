import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  margin-top: -10rem;

  div {
    color: var(--text-title);
    background: var(--shape);
    
    padding: 1.5rem 2rem;
    border-radius: .25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;

      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.hightlight {
      color: white;
      
      &.red {
        background: var(--red);
      }

      &.green {
        background: var(--green);
      }
    }
  }
`;