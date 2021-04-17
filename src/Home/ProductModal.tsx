import React from 'react';
import {Header, Modal, Image, Button } from 'semantic-ui-react';

const ProductModal = ({product, setProduct}: any) => {
  return (
    <Modal open={Boolean(product)}>
      <Modal.Header>{product?.name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={product?.photo} wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setProduct(null)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setProduct(null)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default ProductModal;
