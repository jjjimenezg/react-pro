// Configuration
import { rules, extensions, modules } from './configuration';
const isDevelopment = process.env.NODE_ENV !== 'production';
export default type => ({
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: rules(type)
  },
  resolve: {
    extensions: extensions(),
    modules: modules()
  }
});
