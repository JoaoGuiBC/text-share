import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;

    const service = new AuthenticateUserService();

    try {
      const result = await service.execute(code);

      return response.json(result);
    } catch (_) {
      return response.status(401).json({ error: 'Código de login inválido.' });
    }
  }
}

export { AuthenticateUserController };
