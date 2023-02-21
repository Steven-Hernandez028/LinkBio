import { Button, Description, FlexContainer, InputText } from '@/styles/styledComponents';
import Modal from "react-modal";
import { Styles } from '@/styles/styles';


const ModalEmail = ({
    modalIsOpen,
    closeModal,
    handleOnChange,
    handleSubmit,
    ToggleMsg
  }: any) => {
    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={Styles.modal}
        ariaHideApp={false}
      >
        <FlexContainer flexDirection="column" width="100%" heigth="80%">
          <Description bottom="0">
    
            {ToggleMsg.ShowMessage? "Thanks": `Did you donate? i would like to thank you, please leave your email here:`}
          </Description>
          <InputText
            onChange={(e) => handleOnChange(e)}
            marginLeft="0"
            type="input"
          />
        </FlexContainer>
  
        <Button onClick={handleSubmit} top="80%">Send</Button>
      </Modal>
    );
  };

export default ModalEmail