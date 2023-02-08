import React, { useState, useEffect, useMemo } from 'react';
import * as S from './style';
import { LikeSvg, ClickedLikeSvg } from '../../assets/likeSvg';
import { ProfileImage } from '../../assets/profileImage';
import { ChangDateFormat } from '../../utils/parseDate';
import { BestCommentItem } from '../../assets/bestCommentItem';
import { postCommentLike } from '../../apis/comments';

interface propTypes {
  username: number | undefined;
  content: string | undefined;
  commendId: number | undefined;
  like: number | undefined;
  createdAt: string | undefined;
  status: string | undefined;
  index: number | null;
  setDeletedCommentId: Function;
}
const CommentCard = ({
  commendId,
  username,
  content,
  like,
  createdAt,
  status,
  index,
  setDeletedCommentId,
}: propTypes) => {
  const [created, setCreated] = useState('');
  const [commentStatus, setCommentStatus] = useState(status);
  const [commentLikeStatus, setCommentLikeStatus] = useState(false);
  useEffect(() => {
    const changedDate = ChangDateFormat(createdAt);
    setCreated(changedDate);
  }, []);

  const deletedCommentColor = useMemo(() => {
    return { color: '#667085' };
  }, []);
  const handleDeleteComment = () => {
    alert('삭제되었습니다');
    setDeletedCommentId(commendId);
  };
  const handleCommentLike = () => {
    postCommentLike(commendId).then((res) => {
      console.log(res);
      setCommentLikeStatus(res?.data.commentLikeStatus);
      alert('좋아요!');
    });
  };

  return (
    <>
      <S.CommentCard>
        {commentStatus === 'REMOVED' ? (
          <p style={deletedCommentColor}>삭제된 댓글입니다</p>
        ) : (
          <>
            <S.CommentCardTop>
              <S.UserDataDiv>
                <ProfileImage />
                <S.CommentUserName>{username}</S.CommentUserName>
                {index === null ? <BestCommentItem /> : null}
              </S.UserDataDiv>
              <S.CommentLike onClick={handleCommentLike}>
                {commentLikeStatus ? <ClickedLikeSvg /> : <LikeSvg />}
                {like}
              </S.CommentLike>
            </S.CommentCardTop>
            <S.CommentContent>{content}</S.CommentContent>
            <S.CommentCardBottomContainer>
              <S.CommentCreatedAt>{created}</S.CommentCreatedAt>
              <p>|</p>
              <S.CommentButtons>수정</S.CommentButtons>
              <p>|</p>
              <S.CommentButtons onClick={handleDeleteComment}>
                삭제
              </S.CommentButtons>
            </S.CommentCardBottomContainer>
          </>
        )}
      </S.CommentCard>
    </>
  );
};
export default CommentCard;
