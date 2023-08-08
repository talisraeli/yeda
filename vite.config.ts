import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [preact()],
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName:
        mode === 'development' ? '[local]_[hash:base64:2]' : '[hash:base64:5]',
    },
    preprocessorOptions: {
      sass: {
        additionalData: "@import './src/style/variables'\n",
      },
    },
  },
}));
