import styled from "styled-components";
import { Link } from "react-router-dom";

import chatMockData from "./chatMockData";

const ChatsBox = () => {
  return (
    <div>
      {chatMockData.map((chat) => {
        return (
          <StyledLink to={`/chats/${chat.id}`}>
            <ChatContainer key={chat.id}>
              <img src={chat.imgUrl} />
              <ChatName>{chat.name}</ChatName>
              <ChatTime>{chat.lastTime}</ChatTime>
              <ChatDetail>{chat.lastDetail}</ChatDetail>
              {chat.new ? (
                <NewBadge new={true}>{chat.newNumber}</NewBadge>
              ) : (
                <NewBadge new={false}></NewBadge>
              )}
            </ChatContainer>
          </StyledLink>
        );
      })}
    </div>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ChatContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 80px 1fr 50px;
  align-items: center;
  margin: 0 25px 25px 25px;

  img {
    grid-row: 1 / 3;
    width: 70px;
    height: 70px;
    border-radius: 30px;
    margin-right: 10px;
  }
`;

const ChatName = styled.span`
  align-self: flex-end;
  font-size: 24px;
  color: black;
`;

const ChatTime = styled.span`
  justify-self: center;
  color: #b8b8b8;
`;

const ChatDetail = styled.p`
  color: #8e8e8e;
  font-weight: 300;
  font-size: 18px;
`;

const NewBadge = styled.div`
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.new ? "#ff5400" : "white")};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
`;

export default ChatsBox;
