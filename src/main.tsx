import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import "./index.css";
import { ThemeProvider } from './shared/lib/theme/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './app/providers/store/store';

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
