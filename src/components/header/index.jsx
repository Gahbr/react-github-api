import React from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import { useState } from "react";

const Header = () => {
  const { getUser } = useGithub();
  const [usenameForSearch, setUsenameForSearch] = useState();

  const submitGetUser = () => {
    if (!usenameForSearch) return;
    return getUser(usenameForSearch);
  };
  return (
    <header>
      <S.WrapperTitle> <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="git logo"/> API Interface</S.WrapperTitle>
      <S.Wrapper>
        <input
          type="text"
          onChange={(event) => setUsenameForSearch(event.target.value)}
          placeholder="Please, enter a valid Github username"
          
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
