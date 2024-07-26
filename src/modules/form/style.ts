import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`

 0% {  right: -100%; }
 100% {right: 0%; opacity: 1}
`;

export const ContainerForm = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: #000000b5;
  display: flex;
  justify-content: flex-end;
  animation-name: ${breatheAnimation};
  animation-duration: 0.8s;
  animation-direction: normal;
`;
export const AreaSuccess = styled.div`
  background-color: #fff;
  width: 30%;
  height: 100vh;
  padding: 8px;
  color: #c3c3c3;
  min-width: 300px;
      display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
 
`

export const AreaForm = styled.div`
  background-color: #fff;
  width: 30%;
  height: 100vh;
  padding: 8px;
  color: #c3c3c3;
  min-width: 300px;
  overflow-y: auto;
`;

export const TitleEdit = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #000;
`;
export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  gap: 4px;
  flex-direction: column;
`;

export const AreaInput = styled.div`
  display: flex;

  flex-direction: column;
  min-width: 220px;
`;

export const InputEdit = styled.input`
  background-color: #ffffff;
  border: 2px solid #e4e4e4;
  font-size: 16px;
  color: #c3c3c3;
  border-radius: 4px;
  padding: 8px;
  outline: none;
`;

export const ButtonSalvar = styled.button`
    width: 100%;
    padding: 8px;
    font-size: 16px;
    background-color: #4ee89d;
    color: #fff;
    border: none; 
    border-radius: 4px;
        margin-top: 28px;
        margin-bottom: 20px;
        cursor: pointer;
`

export const ImageFormSuccess = styled.img` 
`