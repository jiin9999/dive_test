import styled from "styled-components";
import { FaWifi } from "react-icons/fa";
import { IoBatteryFull } from "react-icons/io5";
import { BsLightningChargeFill } from "react-icons/bs";

const Header = () => {
  return (
    <StatusBar className="page-container">
      <StatusLeft>
        <span>No Service</span>
        <FaWifi />
      </StatusLeft>
      <StatusCenter>
        <span>18:43</span>
      </StatusCenter>
      <StatusRight>
        <span>100%</span>
        <IoBatteryFull size="24" />
        <BsLightningChargeFill size="14" />
      </StatusRight>
    </StatusBar>
  );
};

const StatusBar = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 3px;

  div {
    width: 33%;
  }
`;

const StatusLeft = styled.div`
  display: flex;
  justify-content: flex-start;

  span {
    margin-right: 8px;
  }
`;

const StatusCenter = styled.div`
  display: flex;
  justify-content: center;

  span {
    font-weight: 700;
  }
`;

const StatusRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > * {
    margin-left: 5px;
  }
`;
export default Header;
