import styled from "styled-components";

export const TeacherItem = styled.li`
  
  margin: 16px;
  padding: 16px;

  display: flex;
  
  div:nth-child(2) {
    color: orange;
    padding-left:15px;
  }

  span:nth-child(3) {
    :hover {
      cursor: pointer;
    }
  }
`;