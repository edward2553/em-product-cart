import React from 'react';
import renderer from 'react-test-renderer';
import ProductCart from '../../src/components';
import { product1, product2 } from '../data.ts/products';

const { act } = renderer;

describe('ProductCard', () => {
  test('Debe de mostrar el componente correctamente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCart product={product2}>{() => <h1>Hang out</h1>}</ProductCart>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('Debe de incrementar el contador', () => {

      const wrapper = renderer.create(
        <ProductCart product={product1}>
          {({ count, increaseBy }) => (
            <>
              <h1>Product Card</h1>
              <span>{count}</span>
              <button onClick={() => increaseBy(1)}></button>
            </>
          )}
        </ProductCart>
      );
  
      let tree = wrapper.toJSON();
  
      expect(tree).toMatchSnapshot();

      act(() => {
        (tree as any).children[2].props.onClick();
      })

      tree = wrapper.toJSON();
      console.log((tree as any).children[1].children[0]);
      expect((tree as any).children[1].children[0]).toBe('1');
  });
});
