import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** Represents NULL values */
  Void: any;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String'];
  parentCategoryId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description: Scalars['String'];
  products: Array<Product>;
  subcategories: Array<Category>;
  parentCategories: Array<Category>;
};

export type CompatibleGroup = {
  __typename?: 'CompatibleGroup';
  id: Scalars['String'];
  description: Scalars['String'];
  productsIds: Array<Scalars['String']>;
  products: Array<Product>;
};

export type CreateCategoryInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  parentCategoryId?: Maybe<Scalars['String']>;
};

export type CreateCompatibleGroupInput = {
  description: Scalars['String'];
  productsIds: Array<Scalars['String']>;
};

export type CreateOrderInput = {
  email: Scalars['String'];
  items: Array<OrderItemInput>;
};

export type CreateProductInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  photo: Scalars['String'];
  categoriesIds?: Maybe<Array<Scalars['String']>>;
};


export type GetCategoriesInput = {
  parentCategoryId: Scalars['String'];
};

export type GetProductsInput = {
  query?: Maybe<Scalars['String']>;
  minPrice?: Maybe<Scalars['Float']>;
  maxPrice?: Maybe<Scalars['Float']>;
  categoriesIds?: Maybe<Array<Scalars['String']>>;
  compatibleProductsIds?: Maybe<Array<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  updateCategory: Category;
  deleteCategory?: Maybe<Scalars['Void']>;
  deleteCompatibleGroup: Scalars['Void'];
  createCompatibleGroup: CompatibleGroup;
  updateCompatibleGroup: CompatibleGroup;
  deleteOrder: Scalars['Void'];
  createOrder: Order;
  createProduct: Product;
  updateProduct: Product;
  deleteProduct?: Maybe<Scalars['Void']>;
};


export type MutationCreateCategoryArgs = {
  options: CreateCategoryInput;
};


export type MutationUpdateCategoryArgs = {
  options: UpdateCategoryInput;
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['String'];
};


export type MutationDeleteCompatibleGroupArgs = {
  compatibleGroupId: Scalars['String'];
};


export type MutationCreateCompatibleGroupArgs = {
  options: CreateCompatibleGroupInput;
};


export type MutationUpdateCompatibleGroupArgs = {
  options: UpdateCompatibleGroupInput;
};


export type MutationDeleteOrderArgs = {
  orderId: Scalars['String'];
};


export type MutationCreateOrderArgs = {
  options: CreateOrderInput;
};


export type MutationCreateProductArgs = {
  options: CreateProductInput;
};


export type MutationUpdateProductArgs = {
  options: UpdateProductInput;
};


export type MutationDeleteProductArgs = {
  productId: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['String'];
  email: Scalars['String'];
  date: Scalars['DateTime'];
  items: Array<OrderItem>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  productId: Scalars['String'];
  amount: Scalars['Int'];
  product: Product;
};

export type OrderItemInput = {
  productId: Scalars['String'];
  amount: Scalars['Int'];
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  photo: Scalars['String'];
  price: Scalars['Float'];
  categoriesIds: Array<Scalars['String']>;
  categories: Array<Category>;
  compatibleProducts: Array<Product>;
  compatibleGroups: Array<CompatibleGroup>;
};

export type Query = {
  __typename?: 'Query';
  getCategories: Array<Category>;
  getCategoryById: Category;
  getCompatibleGroupById: CompatibleGroup;
  getCompatibleGroups: Array<CompatibleGroup>;
  getOrderById: Order;
  getOrders: Array<Order>;
  getProducts: Array<Product>;
  getProductById: Product;
};


export type QueryGetCategoriesArgs = {
  options?: Maybe<GetCategoriesInput>;
};


export type QueryGetCategoryByIdArgs = {
  categoryId: Scalars['String'];
};


export type QueryGetCompatibleGroupByIdArgs = {
  compatibleGroupId: Scalars['String'];
};


export type QueryGetCompatibleGroupsArgs = {
  productId?: Maybe<Scalars['String']>;
};


export type QueryGetOrderByIdArgs = {
  orderId: Scalars['String'];
};


export type QueryGetOrdersArgs = {
  email?: Maybe<Scalars['String']>;
};


export type QueryGetProductsArgs = {
  options?: Maybe<GetProductsInput>;
};


export type QueryGetProductByIdArgs = {
  productId: Scalars['String'];
};

export type UpdateCategoryInput = {
  id: Scalars['String'];
  parentCategoryId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  description: Scalars['String'];
};

export type UpdateCompatibleGroupInput = {
  id: Scalars['String'];
  description: Scalars['String'];
  productsIds: Array<Scalars['String']>;
};

export type UpdateProductInput = {
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  photo: Scalars['String'];
  price: Scalars['Float'];
  categoriesIds?: Maybe<Array<Scalars['String']>>;
};


export type GetHomePageDataQueryVariables = Exact<{
  query?: Maybe<Scalars['String']>;
  categoriesIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type GetHomePageDataQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'description' | 'price' | 'photo'>
    & { categories: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'name' | 'description'>
    )> }
  )>, categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name' | 'description'>
    & { subcategories: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name' | 'description'>
      & { subcategories: Array<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'name' | 'description'>
      )> }
    )> }
  )> }
);

export type GetProductPageDataQueryVariables = Exact<{
  productId: Scalars['String'];
}>;


export type GetProductPageDataQuery = (
  { __typename?: 'Query' }
  & { product: (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'price' | 'description' | 'photo'>
    & { categories: Array<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    )>, compatibleProducts: Array<(
      { __typename?: 'Product' }
      & Pick<Product, 'id' | 'name' | 'photo'>
    )> }
  ) }
);

export type CreateOrderMutationVariables = Exact<{
  email: Scalars['String'];
  items: Array<OrderItemInput> | OrderItemInput;
}>;


export type CreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { createOrder: (
    { __typename?: 'Order' }
    & Pick<Order, 'id'>
  ) }
);


export const GetHomePageDataDocument = gql`
    query GetHomePageData($query: String, $categoriesIds: [String!]) {
  products: getProducts(options: {query: $query, categoriesIds: $categoriesIds}) {
    id
    name
    description
    price
    photo
    categories {
      name
      description
    }
  }
  categories: getCategories {
    id
    name
    description
    subcategories {
      id
      name
      description
      subcategories {
        id
        name
        description
      }
    }
  }
}
    `;

/**
 * __useGetHomePageDataQuery__
 *
 * To run a query within a React component, call `useGetHomePageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePageDataQuery({
 *   variables: {
 *      query: // value for 'query'
 *      categoriesIds: // value for 'categoriesIds'
 *   },
 * });
 */
export function useGetHomePageDataQuery(baseOptions?: Apollo.QueryHookOptions<GetHomePageDataQuery, GetHomePageDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHomePageDataQuery, GetHomePageDataQueryVariables>(GetHomePageDataDocument, options);
      }
export function useGetHomePageDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHomePageDataQuery, GetHomePageDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHomePageDataQuery, GetHomePageDataQueryVariables>(GetHomePageDataDocument, options);
        }
export type GetHomePageDataQueryHookResult = ReturnType<typeof useGetHomePageDataQuery>;
export type GetHomePageDataLazyQueryHookResult = ReturnType<typeof useGetHomePageDataLazyQuery>;
export type GetHomePageDataQueryResult = Apollo.QueryResult<GetHomePageDataQuery, GetHomePageDataQueryVariables>;
export const GetProductPageDataDocument = gql`
    query GetProductPageData($productId: String!) {
  product: getProductById(productId: $productId) {
    id
    name
    price
    description
    photo
    categories {
      id
      name
    }
    compatibleProducts {
      id
      name
      photo
    }
  }
}
    `;

/**
 * __useGetProductPageDataQuery__
 *
 * To run a query within a React component, call `useGetProductPageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductPageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductPageDataQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useGetProductPageDataQuery(baseOptions: Apollo.QueryHookOptions<GetProductPageDataQuery, GetProductPageDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductPageDataQuery, GetProductPageDataQueryVariables>(GetProductPageDataDocument, options);
      }
export function useGetProductPageDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductPageDataQuery, GetProductPageDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductPageDataQuery, GetProductPageDataQueryVariables>(GetProductPageDataDocument, options);
        }
export type GetProductPageDataQueryHookResult = ReturnType<typeof useGetProductPageDataQuery>;
export type GetProductPageDataLazyQueryHookResult = ReturnType<typeof useGetProductPageDataLazyQuery>;
export type GetProductPageDataQueryResult = Apollo.QueryResult<GetProductPageDataQuery, GetProductPageDataQueryVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($email: String!, $items: [OrderItemInput!]!) {
  createOrder(options: {email: $email, items: $items}) {
    id
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      email: // value for 'email'
 *      items: // value for 'items'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;