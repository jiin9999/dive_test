import styled from "styled-components";

import { GoSearch, GoGear } from "react-icons/go";
import { RiChatNewLine } from "react-icons/ri";
import { HiOutlineMusicalNote } from "react-icons/hi2";

const ChatsHeader = () => {
  return (
    <ChatsHeaderContainer>
      <h1>Chats</h1>
      <IconContainer>
        <GoSearch size="30" />
        <RiChatNewLine size="30" />
        <HiOutlineMusicalNote size="30" />
        <GoGear size="30" />
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
    margin-left: 25px;
  }
`;

export default ChatsHeader;
