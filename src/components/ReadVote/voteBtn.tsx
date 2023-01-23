import React, { useState } from 'react';
import * as S from './style';

const VoteBtn = () => {
  const [login, setIsLogin] = useState(true);
  const [ended, setEnded] = useState(false);
  const onClickBtn = (e) => {
    console.log(e.target.id)
  }
  return (
    <S.buttonContainer>
      {login ? (
        <>
          {ended ? (
            <>
              <S.button id="vote" onClick={onClickBtn}>투표하기</S.button>
              <S.button id="votelist" onClick={onClickBtn} color={'#4285f4'}>목록가기</S.button>
            </>
          ) : (
            <>
              <S.button id="delete" onClick={onClickBtn}>삭제하기</S.button>
              <S.button id="patch" onClick={onClickBtn} color={'gray'}>수정하기</S.button>
              <S.button id="votelist" onClick={onClickBtn} color={'#4285f4'}>목록가기</S.button>
            </>
          )}
        </>
      ) : (
        <S.button id="votelist" onClick={onClickBtn} color={'#4285f4'}>목록가기</S.button>
      )}
    </S.buttonContainer>
  );
};

export default VoteBtn;
