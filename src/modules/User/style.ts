import styled from "styled-components";

export const ContainerUser = styled.div`
  width: 95%;
  padding: 12px;
`;
export const AreaEmpresa = styled.div`
  gap: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
`;
export const SubTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
`;
export const TextEmpresa = styled.div`
  font-size: 16px;
`;
export const ContainerSocios = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const AreaSocio = styled.div`
  gap: 8px;
  width: 250px;
  display: flex;
  background-color: #7a49c8;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  height: 80px;
  flex-direction: column;
`;
export const TextSocio = styled.div`
  font-size: 14px;
`;

export const ButtonOpenForm = styled.button`
  color: #fff;
  width: 130px;
  padding: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  background-color: #4ee89d;
`;

export const ButtonCloseForm = styled.button`
  width: 30px;
  height: 30px;
  color: #fff;
  background-color: red;
  position: absolute;
  border: none;
  border-radius: 4px;
  z-index: 2;
  right: 5px;
  top: 5px;
  font-size: 25px;
  cursor: pointer;
`;
