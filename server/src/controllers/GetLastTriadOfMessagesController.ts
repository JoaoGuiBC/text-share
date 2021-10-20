import { Request, Response } from 'express';
import { GetLastTriadOfMessagesService } from '../services/GetLastTriadOfMessagesService';

class GetLastTriadOfMessagesController {
  async handle(_: Request, response: Response) {
    const getLastTriadOfMessagesService = new GetLastTriadOfMessagesService();

    const result = await getLastTriadOfMessagesService.execute();

    return response.json(result);
  }
}

export { GetLastTriadOfMessagesController };
