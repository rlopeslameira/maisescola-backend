import * as Yup from 'yup';

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    matric: Yup.string()
      .required('Matrícula é obrigatória'),
    senha: Yup.string()
      .required('A senha é obrigatória')
      .min(4, 'A senha deve conter no mínimo 4 caracteres.'),
    matric: Yup.string()
      .when('guerra', (guerra, field) =>
        guerra ? field : field.required('Matrícula é obrigatória.')
      ),
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
