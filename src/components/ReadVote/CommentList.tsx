import React, { useState, useCallback, useEffect } from 'react';
import CommentInput from './CommentInput';
import CommentCard from './CommentCard';
import * as S from './style';
import { getComments } from '../../apis/comments';

interface Props {
  commendId: number;
  totalLike: number;
  createdAt: string;
  memberId: number;
  commentStatus: string;
  commentContent: string;
}
const CommentList = ({ topicId }: any) => {
  console.log(typeof topicId);
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [commentTotalPage, setCommentTotalPage] = useState(1);
  const [bestComment, setBestComment] = useState<Props>();
  const [totalComments, setTotalComments] = useState(0);
  const [deletedCommentId, setDeletedCommentId] = useState(0);
  const [isCreated, setIsCreated] = useState(false);
  const [data, setData] = useState<Props[]>();
  const page = Array.from({ length: commentTotalPage }, (_, i) => i + 1);
  const [commentPage, setCommentPage] = useState<number[]>(page);

  const handleAnsPageNum = useCallback((e: any) => {
    let num = Number(e.target.textContent);
    setPageNum(num);
  }, []);

  useEffect(() => {
    getComments(pageNum, pageSize, topicId)?.then((res) => {
      setCommentPage([...page]);
      console.log('여기', res.data);
      setData([...res.data]);
      setBestComment({ ...res.best[0] });
      setCommentTotalPage(res.pageInfo.totalPages);
      setTotalComments(res.pageInfo.totalElements);
    });
    console.log('삭제된아이디', deletedCommentId);
  }, [pageNum, pageSize, topicId, deletedCommentId, isCreated]);

  return (
    <S.CommentListContainer>
      <S.CommentHeader>댓글 ({totalComments})</S.CommentHeader>
      <CommentInput topicId={topicId} setIsCreated={setIsCreated} />
      <>
        <CommentCard
          index={null}
          key={bestComment?.commendId}
          commendId={bestComment?.commendId}
          like={bestComment?.totalLike}
          createdAt={bestComment?.createdAt}
          username={bestComment?.memberId}
          content={bestComment?.commentContent}
          status={bestComment?.commentStatus}
          setDeletedCommentId={setDeletedCommentId}
        />
        {data?.map((el, idx) => (
          <CommentCard
            index={idx}
            key={el.commendId}
            commendId={el.commendId}
            like={el.totalLike}
            createdAt={el.createdAt}
            username={el.memberId}
            content={el.commentContent}
            status={el.commentStatus}
            setDeletedCommentId={setDeletedCommentId}
          />
        ))}
      </>
      <S.CommentPageBtns>
        {commentPage.map((el, idx) => {
          return (
            <S.CommentPage key={idx} onClick={handleAnsPageNum}>
              {el}
            </S.CommentPage>
          );
        })}
      </S.CommentPageBtns>
    </S.CommentListContainer>
  );
};

export default CommentList;
