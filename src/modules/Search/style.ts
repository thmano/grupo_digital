import styled from "styled-components";

export const ContainerSearch = styled.div`
  gap: 8px;
  width: 100%;
  display: flex;
   @media (max-width: 500px) {
      flex-direction: column;
}
`;
export const SearchArea = styled.div`
gap:8px;    
width: 25%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 8px;
    border-right: 1px solid #c3c3c354;
    min-width: 300px;
      @media (max-width: 500px) {
      height: fit-content;
      border-right: none;
      border-bottom:  1px solid #c3c3c354;
      width: 95%;
  }
`
export const InputSearch = styled.input`
    background-color: #ffffff;
    border: 2px solid #e4e4e4;
  font-size: 16px;
  color: #c3c3c3;
  border-radius: 4px;
  padding: 8px;
  outline: none;
    -webkit-appearance: none;
      -moz-appearance: textfield;
  margin: 0;
`;
export const ButtonSearch = styled.button`
  color: #fff;
  border: none;
  border-radius: 4px;
  background-color: #4ee89d;
  cursor: pointer;
      padding: 4px;
    font-size: 20px;
`;
export const ImageLogo = styled.img``

export const TextError = styled.div`
  font-size: 12px;
  color:red;
`