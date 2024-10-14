import * as yup from 'yup';

export const formSchema = yup.object().shape({
  fullName: yup.string().required('O nome completo é obrigatório.'),
  email: yup.string().email('E-mail inválido.').required('O e-mail é obrigatório.'),
  phone: yup.string().required('O telefone é obrigatório.'),
  role: yup.string().required('Selecione um cargo.'),
  linkedin: yup
    .string()
    .nullable()
    .transform((value) => (value && !/^https?:\/\//i.test(value) ? `https://${value}` : value)) // Adiciona o protocolo se não existir
    .url('Insira um URL válido para o LinkedIn'),
  github: yup
    .string()
    .nullable()
    .transform((value) => (value && !/^https?:\/\//i.test(value) ? `https://${value}` : value)) // Adiciona o protocolo se não existir
    .url('Insira um URL válido para o GitHub'),
});
