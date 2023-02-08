import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from './style';
import { CommentSubmit } from '../../assets/commentSubmit';
import { postComment } from '../../apis/comments';
// import axios from 'axios';

interface Inputs {
  answer: string;
}
// interface Props {
//   commendId: number;
//   totalLike: number;
//   createdAt: string;
//   memberId: number;
//   commentStatus: string;
//   commentContent: string;
// }
interface propsType {
  topicId: string;
  setIsCreated: Function;
}

const CommentInput = ({ topicId, setIsCreated }: propsType) => {
  console.log(topicId);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      answer: '',
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsCreated(true);
    console.log(data.answer);
    postComment(topicId, data.answer);
    alert('댓글이 작성되었습니다');
    reset({ answer: '' });
    setIsCreated(false);
  };

  return (
    <>
      <S.CommentInputContainer onSubmit={handleSubmit(onSubmit)}>
        <S.CommentInput
          {...register('answer', {
            required: '글자를 입력하세요',
            maxLength: {
              value: 400,
              message: '400자 이하의 댓글만 작성이 가능합니다',
            },
          })}
          placeholder="댓글"
        />
        <input type="submit" id="btnSubmit" style={{ display: 'none' }} />
        <label htmlFor="btnSubmit">
          <CommentSubmit />
        </label>
      </S.CommentInputContainer>
    </>
  );
};
export default CommentInput;
