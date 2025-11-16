import Joi, { ObjectSchema } from 'joi';

const loginSchema: ObjectSchema = Joi.object().keys({
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
});

export { loginSchema };
