import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, lightColors, darkColors } from 'react-floating-action-button';

// import { Widget } from './WidgetV2';
import Widget from './Widget';
function App() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Container>
        <Button
          tooltip="The big plus button!"
          icon={<i class="fa-brands fa-whatsapp"></i>}
          styles={{ backgroundColor: darkColors.green, color: lightColors.white, }}
          onClick={() => setModal(true)} />
      </Container>
      {/* {ReactDOM.createPortal(<Button
        tooltip="The big plus button!"
        icon={<i class="fa-brands fa-whatsapp"></i>}
        styles={{ backgroundColor: darkColors.green, color: lightColors.white, }}
        onClick={() => setModal(true)} />, document.getElementById("portal"))} */}

      {modal && <Widget modal={modal} setModal={setModal} />}
      {/* <Widget modal={modal} setModal={setModal} /> */}
    </div>
  );
}

// const App = () => {
//   new Widget({
//     position: 'bottom-right',
//   });
// }

export default App;
