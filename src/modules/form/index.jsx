import { useState } from "react";
import {
  AreaForm,
  AreaSuccess,
  ButtonSalvar,
  ContainerForm,
  ContainerInput,
  ImageFormSuccess,
  InputEdit,
  TitleEdit,
} from "./style";
import ImageSuccess from '../../assets/thanksIcon.svg'

export function Form({ ...user }) {
  const data = user.user;
  const [name, setName] = useState(data.nome_fantasia);
  const [razao, setRazao] = useState(data.razao_social);
  const [logradouro, setLogradouro] = useState(data.logradouro);
  const [numero, setNumero] = useState(data.numero);
  const [bairro, setBairro] = useState(data.bairro);
  const [municipio, setMunicipio] = useState(data.municipio);
  const [uf, setUf] = useState(data.uf);
  const [situacao, setSituacao] = useState(data.descricao_situacao_cadastral);
  const [atividade, setAtividade] = useState(data.cnae_fiscal_descricao);
  const [dateIncio, setDateInicio] = useState(data.data_inicio_atividade);
  const [telefone, setTelefone] = useState(data.ddd_telefone_1);
  const [email, setEmail] = useState(data.email);

  const [complete, setComplete] = useState(false)


  const SaveForm = () => {
   const dataForm = {
        nome_fantasia: name,
        razao_social: razao,
        logradouro: logradouro,
        numero: numero,
        bairro: bairro,
        municipio: municipio,
        uf: uf,
        descricao_situacao_cadastral: situacao,
        cnae_fiscal_descricao: atividade,
        data_inicio_atividade: dateIncio,
        ddd_telefone_1: telefone,
        email
    }

    console.log(JSON.stringify(dataForm))
    setComplete(true)
  }
  return (
    <ContainerForm>
        {complete ? 
        <AreaSuccess>
         <TitleEdit>Formulario enviado com sucesso:</TitleEdit>
            <ImageFormSuccess src={ImageSuccess} />
        </AreaSuccess>: 
      <AreaForm>
        <TitleEdit>Editar dados da empresa:</TitleEdit>
        <ContainerInput>
          <label htmlFor="name">Nome:</label>
          <InputEdit
            id="name"
            value={name || ''}
            onChange={(e) => setName(e.target.value)}
            />

          <label htmlFor="razao_social">Razão social:</label>
          <InputEdit
            id="razao_social"
            value={razao || ''}
            onChange={(e) => setRazao(e.target.value)}
            />

          <label htmlFor="logradouro">Logradouro:</label>
          <InputEdit
            id="logradouro"
            value={logradouro || ''}
            onChange={(e) => setLogradouro(e.target.value)}
            />

          <label htmlFor="numero">Numero:</label>
          <InputEdit
            id="numero"
            value={numero || ''}
            onChange={(e) => setNumero(e.target.value)}
            />

          <label htmlFor="bairro">Bairro:</label>
          <InputEdit
            id="bairro"
            value={bairro || ''}
            onChange={(e) => setBairro(e.target.value)}
            />

          <label htmlFor="municipio">Municipio:</label>
          <InputEdit
            id="municipio"
            value={municipio || ''}
            onChange={(e) => setMunicipio(e.target.value)}
            />

          <label htmlFor="uf">UF:</label>
          <InputEdit
            id="uf"
            value={uf || ''}
            onChange={(e) => setUf(e.target.value)}
            />

          <label htmlFor="situacao">Situação:</label>
          <InputEdit
            id="situacao"
            value={situacao || ''}
            onChange={(e) => setSituacao(e.target.value)}
            />

          <label htmlFor="atividade">Atividade Principal:</label>
          <InputEdit
            id="atividade"
            value={atividade || ''}
            onChange={(e) => setAtividade(e.target.value)}
            />

          <label htmlFor="data_inicio">Data de abertura:</label>
          <InputEdit
            id="data_inicio"
            type="date"
            value={dateIncio }
            onChange={(e) => setDateInicio(e.target.value)}
            />

          <label htmlFor="telefone">Telefone:</label>
          <InputEdit
            id="telefone"
            maxLength='11'
            onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                }
            }}
            value={telefone || ''}
            onChange={(e) => setTelefone(e.target.value)}
            />

          <label htmlFor="email">E-mail:</label>
          <InputEdit
            id="email"
            type="email"
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
            />

          <ButtonSalvar onClick={() => SaveForm()}>Salvar</ButtonSalvar>
        </ContainerInput>
      </AreaForm>
}
    </ContainerForm>
  );
}
