import React, {useEffect, useState} from 'react';
import {Category, useGetHomePageDataQuery} from "../types";
import {Button, Icon, Label, Loader} from "semantic-ui-react";
import {Flex} from '@chakra-ui/react';
import CategoriesMenu from "./CategoriesMenu";
import ProductList from './ProductList';
import OrderList from "./OrderList";

const Home = () => {
  const [category, setCategory] = useState<any | null>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [showOrders, setShowOrders] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<any | null>(null);

  const variables = category ? {categoriesIds: [category.id]} : {};
  const {data} = useGetHomePageDataQuery({variables});

  useEffect(() => {
    if(data) {
      setCurrentData(data);
    }
  }, [data])

  const renderContent = () => {
    if(!currentData) {
      return (
        <Loader
          size="huge"
          inverted
          height={100}
          width={100}
          active
        />
      );
    }

    const ordersCount = orders.reduce((acc: any, o: any) => acc + o.amount, 0);

    return (
      <Flex direction="row" minHeight="500px" maxHeight="700px" padding="20px" width="1140px" position="relative">
        <CategoriesMenu
          categories={currentData.categories} category={category} setCategory={setCategory}/>
        <ProductList
          category={category}
          products={currentData.products}
          orders={orders}
          setOrders={setOrders}
          setShowOrders={setShowOrders}
        />
        <Button
          color="green"
          size="huge"
          style={{position: 'absolute', top: 40, right: 40}}
          onClick={() => setShowOrders(true)} icon
        >
          <Icon name="shopping bag" />
          {ordersCount ? (
            <Label floating color="blue">{ordersCount}</Label>
          ) : null}
        </Button>
      </Flex>
    )
  }

  return (
    <Flex align="center" justify="center" height="100vh" background="gray">
      {renderContent()}
      <OrderList
        orders={orders}
        setOrders={setOrders}
        show={showOrders}
        onClose={() => setShowOrders(false)}
        submitting={false}
        onSubmit={() => null}
      />
    </Flex>
  );
};

export default Home;
