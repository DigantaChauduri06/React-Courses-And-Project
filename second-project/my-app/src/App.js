import React, { useState } from "react";
import Title from "./components/Title";
import "./css/App.css";
import Modal from "./components/Modal";
import Event from "./components/EventList";

function App() {
  // const [name, setName] = useState("Diganta");
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [showModalView, setShowModalView] = useState(true);
  const [events, setEvents] = useState([
    { title: "This is Title No 1 Nothing.........", id: 1 },
    { title: "This is Title No 2 And This is jubriish", id: 2 },
    { title: "This is Title No 3 And We are going to Kolkata", id: 3 },
  ]);
  // Best Practice to change state in an array
  const arr = [1, 2, 3, 4, 5];
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((item) => {
        return item.id !== id;
      });
    });
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModalView = () => {
    setShowModalView(true);
  };
  const subtitle = "All the Events organized by me written here";
  return (
    <div className="App">
      <Title title="Diganta's Events" subtitle={subtitle} />
      {/* <Title title="Another's Events" subtitle="Another subtitle" /> */}
      {!show && (
        <div>
          <button onClick={() => setShow(true)}>show Events</button>
        </div>
      )}
      {show && (
        <div>
          <button onClick={() => setShow(false)}>Hide Events</button>
        </div>
      )}
      {show && <Event events={events} handleClick={handleClick} />}
      {/* <Modal>
        <h2>10% off</h2>
        <p>Use MyName20 to get 20% off</p>
      </Modal> */}
      <br />
      <br />
      <br />
      <br />
      {showModal && (
        <button
          onClick={() => {
            setShowModalView(!showModalView);
            console.log(showModalView);
            // setShowModal(false);
          }}
        >
          Show Modal
        </button>
      )}

      {!showModalView && showModal && (
        <>
          <Modal
            handleCloseModal={handleCloseModal}
            handleShowModalView={handleShowModalView}
            isModal={true}
            upper={false}
          >
            <h2>Hello</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              facilis. Sint excepturi, quasi praesentium illum tempora molestias
              quibusdam similique, officiis dolore eos error omnis at impedit!
              Sed dolore maiores animi, beatae aliquid quisquam cumque accusamus
              odio perspiciatis harum architecto iste illum laborum aspernatur
              labore quibusdam deleniti. Illo doloribus qui sit corrupti
              voluptatibus. Blanditiis repudiandae at expedita earum dolorem
              vitae deserunt quia pariatur, ratione debitis veritatis sed
              eveniet consequatur praesentium, laborum, natus fuga velit est
              quaerat? Eos aut officiis eaque vel voluptatibus reprehenderit,
              laboriosam harum dignissimos nam, quasi voluptas culpa voluptatum
              magni. Sit sunt error architecto quidem doloribus molestiae,
              numquam mollitia?
            </p>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              Google
            </a>
            )
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;
