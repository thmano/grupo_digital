import "./style.ts";
import {
  ButtonSearch,
  ContainerSearch,
  ImageLogo,
  InputSearch,
  SearchArea,
  TextError,
} from "./style.ts";
import { api } from "../../services/api.jsx";
import { useState } from "react";
import { User } from "../User/index.jsx";
import imgLogo from "../../assets/logo.png";
import { cnpj } from "cpf-cnpj-validator";

export function Search() {
  const [valueInput, setValueInput] = useState("");
  const [user, setUser] = useState();
  const [error, setError] = useState(false);

  const searchCnpj = () => {
    if (cnpj.isValid(valueInput)) {
      setError(false);
      api
        .get(valueInput)
        .then((response) => setUser(response))
        .catch(function (error) {
          console.error(error);
        });
    } else {
      setError(true);
      setUser(null);
    }
  };

  return (
    <ContainerSearch>
      <SearchArea>
        <ImageLogo src={imgLogo} />
        <InputSearch
          placeholder="Digite apenas números..."
          maxLength="14"
          onChange={(e) => setValueInput(e.target.value)}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        {error ? <TextError>Por favor digite um cnpj válido!</TextError> : null}
        <ButtonSearch onClick={searchCnpj}>Pesquisar</ButtonSearch>
      </SearchArea>
      {user ? <User item={{ ...user }} /> : ""}
    </ContainerSearch>
  );
}
