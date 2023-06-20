import styled from "styled-components";

import {
  IoPersonOutline,
  IoChatbubbleSharp,
  IoSearchOutline,
} from "react-icons/io5";
import { TbDots } from "react-icons/tb";

const ChatsNav = () => {
  return (
    <NavContainer className="page-container">
      <IconBox>
        <li>
          <IoPersonOutline size="30" />
        </li>
        <BadgeBox>
          <IoChatbubbleSharp size="30" />
          <NewBadge>1</NewBadge>
        </BadgeBox>
        <li>
          <IoSearchOutline size="30" />
        </li>
        <li>
          <TbDots size="30" />
        </li>
      </IconBox>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f9f9fa;
  padding: 20px 50px;
  border-top: 1px solid #dadada;
`;

const IconBox = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const BadgeBox = styled.li`
  position: relative;
`;

const NewBadge = styled.span`
  position: absolute;
  bottom: 17px;
  left: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff5400;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: white;
  font-size: 14px;
`;

export default ChatsNav;
