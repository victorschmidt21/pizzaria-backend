import { response, Request, Response } from "express";
import { UserService } from "../../service/user/userService";
class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }
  createUser = async (req: Request, res: Response): Promise<any> => {
    const { name, email, password } = req.body;

    const user = await this.userService.createUser({
      name: name,
      email: email,
      password: password,
    });
    return res.json(user);
  };

  login = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    const login = await this.userService.login({
      email: email,
      password: password,
    });
    return res.json(login);
  };

  getInfo = async (req: Request, res: Response): Promise<any> => {
    const user = await this.userService.getInfo(req.userId);
    return res.json(user);
  };
}

export { UserController };
