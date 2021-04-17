import React from 'react';
import { Flex } from '@chakra-ui/react';
import {Button, Card, Header, Icon, Image, Segment} from 'semantic-ui-react';
import {Product} from "../types";

const ProductList = ({products, category, setOrders, orders, setShowOrders}: any) => {
  console.log('category', category);

  const addProductToOrders = (product: Product) => {
    setShowOrders(true);
    const newOrders = orders.find((order: any) => order.product.id === product.id) ?
      orders.map((order: any) => order.product.id === product.id ? ({...order, amount: order.amount + 1}) : order) :
      [...orders, {product, amount: 1}];
    setOrders(newOrders);
  };

  const renderHeader = () => (
    <Flex direction="column" padding="10px" paddingBottom="30px" textAlign="left">
      <Header size="huge">Products</Header>
      {category && (<Header style={{margin: 0}} secondary>{category.name}</Header>)}
      {category && (<Header style={{margin: 0}}>{category.description}</Header>)}
      {!category && (<Header style={{margin: 0}}>All Products</Header>)}
    </Flex>
  );

  const renderContent = () => {
    if(!products.length) {
      return <p>No products found</p>
    }

    return (
      <Flex marginLeft="20px" direction="row" wrap="wrap" overflowY="scroll" height="100%" padding="2px" paddingBottom="100px">
        {products.map((product: any) => (
          <Card style={{height: 200, width: 240, margin: 0, marginBottom: 10, marginRight: 20}}>
            {/*<Image src={product.photo} wrapped ui={false}/>*/}
            <Card.Content>
              <Card.Header>{product.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{product.description}</span>
              </Card.Meta>
              <Card.Description>
                {product.categories.map((category: any) => category.name).join(", ")}
              </Card.Description>
            </Card.Content>
            <Card.Content extra style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <a>
                <Icon name='money bill alternate'/>
                {product.price}$
              </a>

              <Button color="green" onClick={() => addProductToOrders(product)}>Buy</Button>
            </Card.Content>
          </Card>
        ))}
      </Flex>
    );
  }

  return (
    <Segment
      style={{
        flex: 1,
        marginLeft: 20,
        marginTop: 0,
        marginBottom: '1rem',
        overflowY: 'hidden',
        position: 'relative'
      }}
    >
      {renderHeader()}
      {renderContent()}
    </Segment>
  );
};

export default ProductList;
