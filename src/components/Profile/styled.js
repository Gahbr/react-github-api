import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    padding-top: 30px;

    @media (max-width: 625px){
       img { width:150px }
    }
    @media (max-width: 500px){
      display:block;
      img{  padding-bottom:20px}
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div {
        margin: 8px;
        text-align: center
    }
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
   h3 { 
        margin-right : 8px;
   }

   a { 
    font-size:18px;
    color: blue;
    font-weight:bold; 
}
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height:200px;
    margin-left: 8px;
    h1 { 
        font-size:24px;
        font-weight:bold;
    }

    h3 { 
        font-size:18px;
        font-weight:bold;
    }

    h4 { 
        font-size:16px;
        font-weight:bold;
    }

    @media (max-width: 625px){
       h1 { font-size: 20px; }
       h3 { font-size: 14px;}
       h4 { font-size:12px }
       a { font-size: 14px; }
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin:8px;
`;