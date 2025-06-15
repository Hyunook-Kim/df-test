import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <HeaderSection>Header</HeaderSection>

      <ProfileSection>Profile</ProfileSection>

      <SubscribeSection>Subscribe with full bleed image</SubscribeSection>

      <CardSection>Cards</CardSection>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1680px;
  width: 100%;
  flex-grow: 0;
  padding: 0 0 80px;
  background-color: #fff;
  margin: 0 auto;
  border: 10px solid black;
  min-height: 100vh;
`;

const HeaderSection = styled.section`
  background-color: lightblue;
`;

const ProfileSection = styled.section`
  background-color: lightgreen;
`;

const SubscribeSection = styled.section`
  background-color: lightcoral;
`;

const CardSection = styled.section`
  background-color: lightyellow;
`;

export default App;
