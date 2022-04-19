import styled from "styled-components";

export const ContainerBackground = styled.div`
  width: 500px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  border: solid yellow 1px;
  background: rgba(27, 10, 11, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerDetails = styled.div`
  margin-left: 45px;
  margin-top: 16px;
  margin-bottom: 24px;

  span {
    color: #FFFAF0
  }

  h2 {
    color: #cccc00
  }

  p {
    font-weight: bold;
    color: yellow;
  }
`;
