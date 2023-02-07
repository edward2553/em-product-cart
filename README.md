# EM-Product-Card

Este es un paquete de pruebas de despliegue de NPM

### Edward Andres Moron Quintana

# Ejemplo

```
<ProductCart
    key={product.id}
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {
        ({ 
        reset,
        increaseBy,
        isMaxCountReached,
        count
        }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
        )
    }
</ProductCart>

```
