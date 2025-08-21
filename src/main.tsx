import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import "./index.css";
import { ThemeProvider } from './shared/lib/theme/ThemeProvider';

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
    
)
