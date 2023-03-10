import styled from 'styled-components';

export const TabNav = styled.nav`
`;

export const TabHr = styled.hr`
  border: 1px solid #e2e6ee;
  margin-bottom: 2vh;
  margin-top: -2px;
`;

export const TabButton = styled.button`
  border: none;
  background-color: white;
  font-size: 1rem;
  padding: 1rem;
  color: #667085;
  cursor: pointer;
  &.isActive{
    color: #4285f4;
    border-bottom: 2px solid #4285f4;
  }
`;

export const TabSelector = styled.div`
  color: #667085;
  font-size: 1.2rem;
`;

export const TabWarning = styled.div`
  color: #667085;
  font-size: 0.85rem;
  display: flex;
  span{
    color: red;
  }
`;

export const Input = styled.input`
  padding: 5px 30px 5px 7px;
  color: #667085;
  width: 100%;
  border: none;
  border-radius: 6px;
  outline: none;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #d6d9dc;
  border-radius: 6px;
  padding-right: 10px;
  margin: 1vh 0;
`;
export const AnswerInput = styled.input`
  padding: 5px 30px 5px 7px;
  color: #667085;
  width: 100%;
  border: none;
  border-radius: 6px;
  outline: none;
`;

export const PlusInput = styled.div`
  display: flex;
  justify-content: center;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 800;
    background-color: #d6d9dc;
    color: #667085;
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
`;