import * as Yup from 'yup';

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    codigo: Yup.string()
      .required('O código da Instituilção é obrigatória'),
    matric: Yup.string()
      .required('Matrícula é obrigatória'),
    senha: Yup.string()
      .required('A senha é obrigatória')
      .min(4, 'A senha deve conter no mínimo 4 caracteres.'),
  });

  schema
    .validate(req.body)
    .then(() => {
      next();
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
};
