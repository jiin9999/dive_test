import styled from "styled-components";

import { GoSearch, GoGear } from "react-icons/go";
import { RiChatNewLine } from "react-icons/ri";
import { HiOutlineMusicalNote } from "react-icons/hi2";

const ChatsHeader = () => {
  return (
    <ChatsHeaderContainer>
      <h1>Chats</h1>
      <IconContainer>
        <GoSearch className="icon" />
        <RiChatNewLine className="icon" />
        <HiOutlineMusicalNote className="icon" />
        <GoGear className="icon" />
      </IconContainer>
    </ChatsHeaderContainer>
  );
};

const ChatsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;

  h1 {
    font-size: 40px;
    font-weight: 600;
  }
`;

const IconContainer = styled.div`
  svg {
    margin-left: 20px;
  }

  .icon {
    width: 24px;
    height: 24px;
    @media screen and (max-width: 340px) {
      width: 15px;
      height: 15px;
    }
  }
`;

export default ChatsHeader;
