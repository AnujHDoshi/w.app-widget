import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Widget = (props) => {
    const { modal, setModal } = props;
    const toggle = () => setModal(!modal);
    return (
        <Modal isOpen={modal} toggle={toggle} fullscreen={true}>
            <ModalHeader toggle={toggle}>Messaging</ModalHeader>
            <ModalBody>
                <div class="container">
                    <div class="messaging">
                        <div class="inbox_msg">
                            <div class="inbox_people">
                                <div class="inbox_chat">
                                    <div class="chat_list active_chat">
                                        <div class="chat_people">
                                            <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                            <div class="chat_ib">
                                                <h5>Test <span class="chat_date">Aug 25</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default Widget;
