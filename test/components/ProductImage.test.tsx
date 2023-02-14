import renderer from 'react-test-renderer';
import React from 'react';
import ProductCart, { ProductImage } from '../../src/components';
import { product2 } from '../data.ts/products';

describe('ProductImage to have the url passed and match the snapshot', () => {
    test('It should have the url passed by props', () => {
        const wrapper = renderer.create(<ProductImage img={product2.img} />)
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
    test('Debe de mostrar el componente correctamente con el nombre del producto', () => {
        const wrapper = renderer.create(
          <ProductCart product={product2}>{() => <ProductImage />}</ProductCart>
        );
        expect(wrapper.toJSON()).toMatchSnapshot();
      });
});