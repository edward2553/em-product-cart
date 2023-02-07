import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCart, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: "1",
  title: "Cofee Mug - Card",
  // img: "./coffee-mug.png",
};

const App = () => {
  return (
    <div>
      <ProductCart  
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCart>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
