import React from 'react';
import * as S from './style';

interface propTypes {
  username: string;
  content: string;
}
const AnswerCard = ({ username, content }: propTypes) => {
  return (
    <S.AnswerCard>
      "{username}"의 "{content}" 카드 입니다
    </S.AnswerCard>
  );
};
export default AnswerCard;
