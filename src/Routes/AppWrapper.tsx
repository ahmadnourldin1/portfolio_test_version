import styled from "styled-components";
import HomeContainer from "../components/page/Home";
import { mobile } from "../styles/media";

const MainComponent = styled.div`
  width: 100%;
  padding: 4rem 6rem;
  ${mobile(`
    padding: 1rem;
  `)}
`;

function AppWrapper() {
  return (
    <MainComponent>
      <HomeContainer />
    </MainComponent>
  );
}

export default AppWrapper;
