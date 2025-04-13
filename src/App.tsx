
import { HashRouter  } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;