import styled from "styled-components";

const WelcomeLogin = () => {
  return (
    <WelcomeContainer>
      <h1>Welcome to KakaoTalk</h1>
      <p>
        If you have a Kakao Account, <br />
        log in with your email or phone number.
      </p>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 90px 0;

  h1 {
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  p {
    color: #868686;
    font-weight: 300;
    text-align: center;
    line-height: 1.2em;
  }
`;

export default WelcomeLogin;
