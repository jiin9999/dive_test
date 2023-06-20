import styled from "styled-components";
import { Link } from "react-router-dom";

const InputBox = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <InputBoxForm onSumbit={formSubmitHandler}>
      <input name="username" type="text" placeholder="Email or phone number" />
      <input name="password" type="password" placeholder="Password" />
      <Link to="/chats">
        <button type="submit">Log In</button>
      </Link>
      <Link to="/">
        <button type="button">Sign Up</button>
      </Link>
      <FindIdPassword to="/">Find Kakao Account or Password</FindIdPassword>
    </InputBoxForm>
  );
};

const InputBoxForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 80%;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 20px;
    padding: 15px 0;
    margin-bottom: 15px;
  }

  input::placeholder {
    font-size: 20px;
    color: #999999;
  }

  a {
    width: 100%;
    text-align: center;

    button {
      width: 80%;
      height: 50px;
      background-color: #f6f6f6;
      border: 0;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 10px;
      cursor: pointer;
    }
  }
`;

const FindIdPassword = styled(Link)`
  color: black;
  font-weight: 400;
  text-decoration: none;
  margin-top: 15px;
`;
export default InputBox;
