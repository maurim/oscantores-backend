import Joi, { ObjectSchema } from 'joi';

const emailSchema: ObjectSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.base': 'O campo deve ser válido.',
    'string.required': 'O campo deve ser válido.',
    'string.email': 'O campo deve ser válido.',
  }),
});

const passwordSchema: ObjectSchema = Joi.object().keys({
  password: Joi.string().required().min(4).max(8).messages({
    'string.base': 'A senha deve ser do tipo alfabetica.',
    'string.min': 'A senha deve ter no minimo 4 caracteres',
    'string.max': 'A senha deve ter no máximo 8 caracteres',
    'string.empty': 'A senha é um campo obrigatório.',
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
    'any.only': 'As senhas devem ser iguais.',
    'any.required': 'Confirme a senha. Este campo é obrigatório.',
  }),
});

export { emailSchema, passwordSchema };
