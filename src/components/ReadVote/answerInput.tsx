import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface Inputs {
  answer: string;
}

const AnswerInput = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      answer: '',
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    alert('댓글이 작성되었습니다!');
  };

  console.log(errors);
  //console.log(watch('answer'));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>댓글</label>
      <input
        {...register('answer', {
          required: '글자를 입력하세요',
          maxLength: {
            value: 4,
            message: '4자 이하의 댓글만 작성이 가능합니다',
          },
        })}
        placeholder="댓글을 입력하세요"
      />
      <input type="submit" />
      <p>{errors.answer?.message}</p>
    </form>
  );
};
export default AnswerInput;
