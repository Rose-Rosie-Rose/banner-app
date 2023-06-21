import styled from "styled-components";

export const JoinBox = styled.div`
  border: 1px solid #eee; cursor: text;
  padding: 16px; margin: 0; text-align: left;
  width: 480px; height: 58px;
  position: relative;
`
export const JoinLabel = styled.label`
  position: absolute; left: 16px;
`
export const JoinLabelTitle = styled.span`
  font-size: 16px; color: #666;
`
export const JoinLableDescription = styled.span`
  font-size: 14px; font-weight: 400;
  color: #CCC; margin: 0; padding: 0;
  border: 0;
`
export const InputJoin = styled.input`
  font-size: 16px; color: #333; padding: 0; 
  margin:0; border: 0; position: absolute; top: 50%; left: 18px;
  width: 430px; caret-color: #F52644;
  &:focus{
    outline: none;
  }
`
export const JoinBtn = styled.button`
  width: 100%; 
  background-color: #F52644; color: #FFF;
  cursor: pointer; font-size: 18px;
  padding: 1em 0; text-align: center;
  box-sizing: border-box; font-weight: 500;
  border:0;
`

/*
export const JoinBox = styled.div`
  border: 1px solid #eee; cursor: text;
  padding: 16px; margin: 0; text-align: left;
  width: 480px; height: 42px;
  position: relative;
`
export const InputJoinBox = styled.div`
  width:480px; height: 58px;
  border:1px solid #f52644;
  position: relative; padding-top: 42px;
`
*/