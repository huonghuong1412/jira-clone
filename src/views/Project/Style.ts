import styled from "styled-components";

// board
export const Container = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const TaskList = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  background: rgb(244, 245, 247);
  width: 25%;
  border-radius: 3px;
  margin: 0px 5px;
`;

export const Title = styled.div`
    padding: 13px 10px 17px;
    text-transform: uppercase;
    color: rgb(94, 108, 132);
    font-size: 13px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

// card
export const IssueInformation = styled.div`
    border-radius: 3px;
    background: rgb(255, 255, 255);
    box-shadow: rgb(9 30 66 / 25%) 0px 1px 2px 0px;
    transition: background 0.1s ease 0s;
    cursor: pointer;
    user-select: none;
    padding: 10px;
    margin: 4px
`;

export const IssueDetail = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
`;