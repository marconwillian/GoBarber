import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../erros/appError';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email }
    });

    if (checkUserExists) {
      throw new AppError('Email address already in used.');
    }

    const handledPassword = await hash(password, 10);

    const user = usersRepository.create({
      name,
      email,
      password: handledPassword
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
