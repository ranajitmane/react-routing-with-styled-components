import styled from "styled-components";

export const HeaderStyle = styled.div`
  ul {
    background: #efefef;
    text-align: left;
    padding: 0;
    box-shadow: 15px 13px 20px 0px #494444;
    li {
      display: inline-block;
      margin: 20px;
      a {
        text-decoration: none;
        font-weight: 600;
        &:hover {
          color: red;
        }
      }
    }
  }
`;
