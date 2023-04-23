import { User } from "@/interfaces/user.interface";
import { asyncHandler } from "@/middlewares/async.middleware";
import { AuthService } from "@/services/auth.service";
import { createJWT } from "@/utils/jwt.util";
import { Request, Response } from "express";
import { container } from "tsyringe";

class AuthController {
    private authService = container.resolve(AuthService);

    constructor() { }

    public signin = asyncHandler(async (req: Request, res: Response) => {
        const { email, password } = req.body;

        const user: User = await this.authService.signin({ email, password });
        const token: string = await createJWT(user.id);

        res.status(200).send({
            token,
            user,
        });
    });

    public signup = asyncHandler(async (req: Request, res: Response) => {
        const { email, name, password, country }: User = req.body;

        const newUser = await this.authService.signup({ email, name, password, country });

        res.status(200).send(newUser);
    });
}

export default new AuthController();