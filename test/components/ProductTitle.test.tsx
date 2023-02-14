import React from 'react';
import renderer from 'react-test-renderer';
import ProductCart, { ProductTitle } from '../../src/components';
import { product1 } from '../data.ts/products';

describe('ProductTitle', () => {
  test('Debe de mostrar el componente correctamente con el titulo personalizado', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  // <<>
  test('Debe de mostrar el componente correctamente con el nombre del producto', () => {
    const wrapper = renderer.create(
      <ProductCart product={product1}>{() => <ProductTitle />}</ProductCart>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
