import { PythonSandbox } from '../../components/PythonSandbox';

export default {
  render: PythonSandbox,
  attributes: {
    height: { type: String },
    options: { type: Object }
  }
};
