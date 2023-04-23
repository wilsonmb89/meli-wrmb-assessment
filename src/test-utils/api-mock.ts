import { setupServer } from 'msw/node';
import { rest } from 'msw';

import { justProductListDataState, justProductSelectedDataState } from './store-mock';

const { productListState } = justProductListDataState;
const { productSelectedState } = justProductSelectedDataState;

const server = setupServer(
  rest.post('http://localhost:8080/products/search', (rq, rs, ctx) => rs(ctx.json(productListState))),
  rest.post('http://localhost:8080/item/itemid', (rq, rs, ctx) => rs(ctx.json(productSelectedState)))
);

export default server;
