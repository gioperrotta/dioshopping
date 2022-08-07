import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

import { Provider } from 'react-redux';
import { ProductsProvider } from '../src/hooks/useProducts';
import store from './components/store';
import Routes from './routes';
import { Container } from '@material-ui/core/';
import { Header } from './components/Header';

const App = () => {

  const localCart = JSON.parse(localStorage.getItem('dioshopping: cart'))

  if (localCart !== null) {
    store.dispatch({ type: 'CHANGE_CART', localCart })
  }

  return (
    <ThemeProvider theme={theme} >
      <Provider store={store}>
      <ProductsProvider>
          <Container maxWidth="xl">
            <GlobalStyle />
            <Router>
              <Header />
              <Routes />
            </Router>
          </Container>

        </ProductsProvider>
      </Provider>
    </ThemeProvider>
  )
}

export default App;
