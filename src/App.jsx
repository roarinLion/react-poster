import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false); // [state, function to update state

  const showModalHandler = () => {
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList modalIsVisible={modalIsVisible} onClose={showModalHandler} />
      </main>
    </>
  );
}

export default App;
