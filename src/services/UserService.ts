import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';

interface IRequest extends Request {
  users?: Array<string>;
}

class UserService {
  private usersConnect: Array<string> = [];

  public generateUserId(req: IRequest): string {
    const newUserId = uuidv4();
    this.usersConnect.push(newUserId);
    req.users = this.usersConnect;
    return newUserId;
  }

  public removeUser(userId: string): string {
    const usersFiltered = this.usersConnect.filter(user => user != userId);
    if (usersFiltered.length != this.usersConnect.length) {
      this.usersConnect = usersFiltered;
      return 'User removed from array';
    }
    return 'User not removed!';
  }

  public getUsersConnected(): Array<string> {
    return this.usersConnect;
  }
}

export default new UserService();
