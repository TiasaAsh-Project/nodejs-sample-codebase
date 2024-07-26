import { celebrate, Joi } from 'celebrate';

export const createWorkout = celebrate({
  body: Joi.object({
    name: Joi.string().required(),
    exercises: Joi.array().items(Joi.object({
      exerciseId: Joi.string().required(),
      sets: Joi.number().required(),
      reps: Joi.number().required(),
      duration: Joi.number().optional(),
    })),
  }),
});
