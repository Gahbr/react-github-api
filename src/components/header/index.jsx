import React from 'react'
import * as S from './styled'
import useGithub from '../../hooks/github-hooks'
import { useState } from 'react'

const Header = () => {
  const {getUser} = useGithub();
  const [usenameForSearch, setUsenameForSearch] = useState()

  const submitGetUser = () =>{

    if(!usenameForSearch) return;
    return getUser(usenameForSearch);
  
  }
  return (
    <header>
        <S.Wrapper>
            <input type="text" onChange={submitGetUser} placeholder ="Digite o nome do usuário para pesquisa" name="" id="" />
            <button type="submit"><span>Buscar</span></button>
        </S.Wrapper>
    </header> 
  )
}

export default Header;