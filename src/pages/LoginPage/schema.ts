import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email('Campo de email inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

export default schema;
