import styled from "styled-components";
import palette from "../../styles/palette";

const Wrapper = styled.div`
  width: 100%;
  z-index: -999;
  position: absolute;
  background-color: ${palette.firefly};
`;

const BGimg = styled.img`
  width: 100%;
  position: absolute;
`;

const BGoverlay = styled.div`
  width: 100%;
  position: absolute;
`;

const UpperOverlayBG = styled(BGoverlay)`
  height: 100%;
  background: linear-gradient(
    330.24deg,
    rgba(11, 29, 38, 0) 31.06%,
    #0b1d26 108.93%
  );
  z-index: -19;
`;

const LowerOverlayBG = styled(BGoverlay)`
  top: 65rem;
  height: 70rem;
  background: linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0b1d26 41.38%);
  z-index: -16;
`;

const FirstBG = styled(BGimg)`
  z-index: -20;
`;

const SecondBG = styled(BGimg)`
  top: 35vh;
  z-index: -18;
`;

const ThirdBG = styled(BGimg)`
  z-index: -17;
`;

const ContentContainer = styled.div`
  gap: 15rem;
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export {
  Wrapper,
  UpperOverlayBG,
  LowerOverlayBG,
  FirstBG,
  SecondBG,
  ThirdBG,
  ContentContainer,
};
