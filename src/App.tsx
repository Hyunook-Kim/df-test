import styled from "styled-components";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Subscribe from "./components/Subscribe";
import CardSection from "./components/CardSection";

function App() {
  return (
    <AppContainer>
      <Header />
      <Profile />
      <Subscribe />
      <CardSection />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1920px;
  width: 100%;
  flex-grow: 0;
  padding: 0 0 5rem;
  background-color: #fff;
  margin: 0 auto;
  border: 10px solid black;
  min-height: 100vh;
`;

export default App;
