import { TitleComponent } from './Title/Title';
import { Product } from './Product/Product';
import { productsData } from 'Data/productsData';
import css from './App.module.css';
import Section from './Section/Section';

export const App = () => {
  return (
    <div>
      <Section>
        <TitleComponent />
        <TitleComponent />
      </Section>

      <Section title="Product List">
        <div className={css.productList}>
          {productsData.map(({ id, title, price, discount }) => {
            return (
              <Product
                key={id}
                title={title}
                price={price}
                discount={discount}
              />
            );
          })}
        </div>
      </Section>
    </div>
  );
};
