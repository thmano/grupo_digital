// import { useEffect } from 'react'
import { useEffect, useState } from "react";
import "./style.ts";
import {
  AreaEmpresa,
  AreaSocio,
  ButtonCloseForm,
  ButtonOpenForm,
  ContainerSocios,
  ContainerUser,
  SubTitle,
  TextEmpresa,
  TextSocio,
  Title,
} from "./style.ts";
import { Form } from "../form/index.jsx";

export function User({ ...item }) {
  useEffect(() => {}, []);
  const user = item.item.data;
  const endereço = `${user?.logradouro} ${user?.numero}, ${user?.bairro}, ${user?.municipio} - ${user?.uf}`;
  const data = new Date(`${user.data_inicio_atividade}`).toLocaleDateString(
    "pt-BR",
    { timeZone: "UTC" }
  );
  const [openForm, setOpenForm] = useState(false)
  return (
    <>
      <ContainerUser>
        <Title>Dados da empresa:</Title>
        <AreaEmpresa>
          <SubTitle>Sobre a empresa</SubTitle>
          <TextEmpresa>
            Nome:{user?.nome_fantasia || " não informado"}
          </TextEmpresa>
          <TextEmpresa>
            Razão social: {user?.razao_social || " não informado"}
          </TextEmpresa>
          <TextEmpresa>Abertura: {data || " não informado"}</TextEmpresa>
          <TextEmpresa>
            Situação: {user?.descricao_situacao_cadastral || " não informado"}
          </TextEmpresa>
          <TextEmpresa>
            Atividade Principal:{" "}
            {user?.cnae_fiscal_descricao || " não informado"}
          </TextEmpresa>
          <SubTitle>Contatos</SubTitle>
          <TextEmpresa>
            Telefone: {user?.ddd_telefone_1 || " não informado"}
          </TextEmpresa>
          <TextEmpresa>E-mail: {user?.email || " não informado"}</TextEmpresa>
          <SubTitle>Local</SubTitle>
          <TextEmpresa>Endereço: {endereço || " não informado"}</TextEmpresa>
          <SubTitle>Sócios</SubTitle>
          <ContainerSocios>

          {user.qsa.map((socio, index) => (
              <AreaSocio key={index}>
              <TextSocio>Nome: {socio.nome_socio}</TextSocio>
              <TextSocio>
                Qualificação: {socio.qualificacao_representante_legal}
              </TextSocio>
            </AreaSocio>
          ))}
          </ContainerSocios>
          <ButtonOpenForm onClick={() => setOpenForm(true)}>Editar</ButtonOpenForm>
        </AreaEmpresa>
      </ContainerUser>
      {openForm ? 
      <>
        <Form user={user}/>
        <ButtonCloseForm onClick={() => setOpenForm(false)}>X</ButtonCloseForm>
      </>
    : null}
    </>
  );
}
