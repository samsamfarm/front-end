import styled from "styled-components";

export const FooterContainer = styled.footer`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  height: 150px;
  background-color: #ffe387;
  width: 100%;
`;

export const Footerbox = styled.div`
  width: 80%;
  height: 150px;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const FooterText = styled.div`
  font-size: 1.2rem;
  float: right;
  /* margin: 45px 0 0 30px; */
  color: #555;
`;

export const FooterLogo = styled.img`
  float: left;
  width: 250px;
  /* margin: 45px 0 0 30px; */
  /* margin-left: 150px; */

  @media screen and (max-width: 768px) {
    width: 130px;
    margin-left: 10px;
  }
`;
