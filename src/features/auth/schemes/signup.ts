import Joi, { ObjectSchema } from 'joi';

const signupSchema: ObjectSchema = Joi.object().keys({
  username: Joi.string().required().min(4).max(8).messages({
    'string.base': 'O nome de usuário deve ser do tipo alfabetico.',
    'string.min': 'Usuário deve ter no minimo 4 caracteres',
    'string.max': 'Usuário deve ter no máximo 8 caracteres',
    'string.empty': 'O nome de usuário é um campo obrigatório.',
  }),
  password: Joi.string().required().min(4).max(8).messages({
    'string.base': 'A senha deve ser do tipo alfabetico.',
    'string.min': 'A senha deve ter no minimo 4 caracteres',
    'string.max': 'A senha deve ter no máximo 8 caracteres',
    'string.empty': 'A senha é um campo obrigatório.',
  }),
  email: Joi.string().required().email().messages({
    'string.base': 'Email deve ser do tipo alfabetico.',
    'string.email': 'O e-mail deve ser válido.',
    'string.empty': 'Email é um campo obrigatório.',
  }),
  avatarColor: Joi.string().required().messages({
    'any.required': 'É necessário colorir o avatar.',
  }),
  avatarImage: Joi.string().required().messages({
    'any.required': 'É necessário ter uma imagem de avatar.',
  }),
});

export { signupSchema };
