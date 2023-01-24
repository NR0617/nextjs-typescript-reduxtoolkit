import React from 'react';
import AnswerInput from './AnswerInput';
import AnswerCard from './answerCard';
import * as S from './style';
const AnswerList = () => {
  let answercount = 11;
  let answerdata = [
    { id: 1, username: '한국', content: '영어로 코리아' },
    { id: 2, username: '제주', content: '영어로 제주 아일랜드' },
    { id: 3, username: '제주', content: '영어로 제주 아일랜드' },
    { id: 4, username: '제주', content: '영어로 제주 아일랜드' },
    { id: 5, username: '제주', content: '영어로 제주 아일랜드' },
  ];
  return (
    <div>
      <p>댓글({answercount})</p>
      <AnswerInput />
      <>
        {answerdata.map((el) => (
          <AnswerCard key={el.id} username={el.username} content={el.content} />
        ))}
      </>
    </div>
  );
};

export default AnswerList;
