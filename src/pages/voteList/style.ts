import Link from 'next/link';
import styled from 'styled-components';

export const pageNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const pageNumFont = styled.p`
  font-size: 1.3rem;
  margin-right: 1rem;
  cursor: default;
`;
export const VoteList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const PageContainer = styled.div`
  display: flex;
  padding: 5% 20% 0 20%;
  @media (max-width: 375px) {
    padding: 15px;
  }
`;
export const Sidebar = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  margin-right: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Pagename = styled.p`
  height: 70px;
  font-size: 2rem;
  color: #667085;
  font-family: 'yg-jalnan' !important;
  margin: 45px 0 10px 4px;
  line-height: 40px;
`;
export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const SidebarCategory = styled.p`
  font-size: 1.3rem;
  color: #667085;
  font-family: 'yg-jalnan' !important;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
  margin-bottom: 1rem;
  margin-top: 30px;
`;
export const CategoryTitle = styled.p`
  color: #667085;
  margin-top: 0.5rem;
  padding-left: 1rem;
  line-height: 30px;
`;
export const PageLink = styled(Link)`
  display: flex;
  justify-content: end;
`;

export const PageHeader = styled.div`
  display: flex;
  height: 135px;
  justify-content: space-between;
  padding-top: 68px;
  color: #667085;
  margin-bottom: 90px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 10%;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  @media (max-width: 375px) {
    margin-bottom: 10px;
    display: flex;
    justify-content: end;
  }
`;
export const PageTitle = styled.div`
  font-size: 2rem;
  font-family: 'yg-jalnan' !important;
  margin-bottom: 1rem;
  color: black;
  @media (max-width: 375px) {
    margin-bottom: 5px;
  }
`;
export const PageSubTitle = styled.p`
  padding: 5px;
  font-size: 1rem;
  @media (max-width: 780px) {
    font-size: 0.8rem;
    width: 180px;
    line-height: 140%;
  }
`;
