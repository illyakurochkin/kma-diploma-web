import React, {useEffect, useState} from 'react';
import { Flex } from '@chakra-ui/react';
import {Button, Header, Input, List, Modal} from 'semantic-ui-react';
import {useCreateOrderMutation} from "../types";
import {useToasts} from "react-toast-notifications";

const OrderList = ({show, onClose,  orders, setOrders}: any) => {
  const { addToast } = useToasts()
  const [email, setEmail] = useState<string | null>(null);

  const [requestOrder, {loading, called}] = useCreateOrderMutation();

  const onSubmit = () => {
    if(email) {
      requestOrder({variables: {email, items: orders
            .map((order: any) => ({productId: order.product.id, amount: order.amount}))}})
    }
  };

  useEffect(() => {
    if(called && !loading) {
      onClose();
      setOrders([]);
      addToast('Successfully submitted', {
        appearance: 'success',
        autoDismiss: true,
      })
    }
  }, [called, loading]);

  const removeProduct = (order: any) => order.amount > 1 ? null : {...order, amount: order.amount - 1};
  const removeProductFromOrder = (productId: any) => setOrders(
    orders.map((order: any) => order.product.id === productId ? removeProduct(order) : order)
      .filter(Boolean),
  );

  const addProduct = (order: any) => ({...order, amount: order.amount + 1});
  const addProductToOrder = (productId: any) => setOrders(
    orders.map((order: any) => order.product.id === productId ? addProduct(order) : order)
  );

  const renderContent = () => {
    if(!orders.length) {
      return <Modal.Content>No products added</Modal.Content>;
    }

    return (
      <Modal.Content image>
        <List style={{width: '100%'}}>
          {orders.map((order: any) => (
            <List.Item style={{width: '100%', marginBottom: 30}}>
                <Flex direction="row" align="center" justify="space-between" style={{width: '100%'}}>
                  <Flex direction="column" flex="1">
                    <Header>{order.product.name}</Header>
                    <p>{order.product.description}</p>
                    <p>Amount: {order.amount}</p>
                    <strong>Price: {(order.product.price * order.amount).toFixed(2)}$</strong>
                  </Flex>
                  <Flex direction="row">
                    <Button color='red' onClick={() => removeProductFromOrder(order.product.id)}>
                      Remove
                    </Button>
                    <Button color='green' onClick={() => addProductToOrder(order.product.id)}>
                      Add
                    </Button>
                  </Flex>
                </Flex>
            </List.Item>
          ))}
        </List>
      </Modal.Content>
    );
  }

  return (
    <Modal open={show} onClose={onClose}>
      <Modal.Header>Shopping Card</Modal.Header>
      {renderContent()}
      <Modal.Content>
        <Input type='text' value={email} onChange={(e: any, {value}: any) => setEmail(value)} />
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={onClose}>
          Close
        </Button>
        <Button
          content={`Submit order ${orders.reduce((acc: any, order: any) => acc + order.product.price * order.amount, 0)}$`}
          labelPosition='right'
          icon='checkmark'
          onClick={onSubmit}
          loading={loading}
          disabled={orders.length === 0 || !email || loading}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default OrderList;
