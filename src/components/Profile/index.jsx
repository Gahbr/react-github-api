import React from 'react'
import * as S  from './styled'

const  Profile = () => {
  return (<S.Wrapper>
    <S.WrapperImage src="https://avatars.githubusercontent.com/u/80289718?v=4" alt="profile" />
    <S.WrapperInfoUser>
    <div>
    <h1>Gabriel Ribeiro</h1>
    <S.WrapperUserName>
        <h3>Username: </h3>
        <a href='https://github.com/Gahbr' target="_blank" rel="noreferrer">Gahbr</a>
    </S.WrapperUserName>
    </div>
    <S.WrapperStatusCount>
        <div>
            <h4>Followers</h4>
            <span>50</span>
        </div>
        <div>
            <h4>Starred</h4>
            <span>12</span>
        </div>
        <div>
            <h4>Following</h4>
            <span>50</span>
        </div>
    </S.WrapperStatusCount>
    </S.WrapperInfoUser>
  </S.Wrapper>
  );
}
 
export default Profile;