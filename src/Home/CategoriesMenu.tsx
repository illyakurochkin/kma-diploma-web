import React from 'react';
import { Menu } from 'semantic-ui-react';
import {GetHomePageDataQueryResult} from "../types";

type Data = {categories: Array<any>} & GetHomePageDataQueryResult['data'];
type Categories = Data['categories'];

interface Props {
  categories: Categories;
  category: any | null;
  setCategory: (categoryId: string) => any;
}

const CategoriesMenu = ({categories, category: selectedCategory, setCategory}: Props) => {

  const renderSubmenu = (category: any) => category.subcategories.length ? (
    <Menu.Menu>
      {category.subcategories.map((subcategory: any) => (
        <Menu.Item active={subcategory.id === selectedCategory?.id} color={"green"} onClick={() => setCategory(subcategory)}>
          <Menu.Header>{subcategory.name}</Menu.Header>
          {renderSubmenu(subcategory)}
        </Menu.Item>
      ))}
    </Menu.Menu>
  ) : null;

  const renderMenuItems = () => categories.map((subcategory) => (
    <Menu.Item >
      <Menu.Header style={subcategory.id === selectedCategory?.id ? {color: 'green'} : undefined} onClick={() => setCategory(subcategory)}><b>{subcategory.name}</b></Menu.Header>
      {renderSubmenu(subcategory)}
    </Menu.Item>
  ))

  return (
    <Menu vertical>
      {renderMenuItems()}
    </Menu>
  );
};

export default CategoriesMenu;
