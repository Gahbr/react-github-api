import React from 'react'
import RepositoryItem from '../repository-item';
import * as S from './styled';

const  Repositories = () => {
  return  <S.WrapperTabs
    selectedTabClassName='is-selected'
    selectedTabPanelClassName='is-selected'
  >
    <S.WrapperTabList>
      <S.WrapperTab>Repositories</S.WrapperTab>
      <S.WrapperTab>Starred</S.WrapperTab>
    </S.WrapperTabList>
    <S.WrapperTabPanel>
      <RepositoryItem 
        name="repo 1" 
        linkToRepo="https://github.com/Gahbr/dsmeta"
        fullName = "Gahbr/dsmeta"/>
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
      <RepositoryItem 
        name="repo 2" 
        linkToRepo="https://github.com/Gahbr/Portfolio-react"
        fullName = "Gahbr/portfolio-react"/>
      </S.WrapperTabPanel>
    <S.WrapperTabPanel>Panel Starred</S.WrapperTabPanel>
  </S.WrapperTabs>
}

export default Repositories;