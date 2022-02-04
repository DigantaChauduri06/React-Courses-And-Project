import React, { useState } from "react";
import Title from "./components/Title";
import "./css/App.css";
import Modal from "./components/Modal";
import Event from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  // const [name, setName] = useState("Diganta");
  const [show, setShow] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [showModalView, setShowModalView] = useState(true);
  const [events, setEvents] = useState([]);
  const addEvents = (ev) => {
    setEvents((prev) => {
      return [...prev, ev];
    });
    setShowModal(false);
    setShowModalView(true);
  };
  // Best Practice to change state in an array
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
          className="btn-add-show"
          onClick={() => {
            setShowModalView(!showModalView);
            console.log(showModalView);
            // setShowModal(false);
          }}
        >
          Add A show
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
            <h2>Add A new Event</h2>
            <NewEventForm addEvents={addEvents} />
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;
