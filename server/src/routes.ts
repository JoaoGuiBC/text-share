import { Router } from 'express';

import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLastTriadOfMessagesController } from './controllers/GetLastTriadOfMessagesController';
import { ProfileUserController } from './controllers/ProfileUserController';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get(
  '/messages/lastTriad',
  new GetLastTriadOfMessagesController().handle
);

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle);

export { router };
