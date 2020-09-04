import { Request, Response } from "express";


class AuthController {

    echo(req: Request, resp: Response){
        resp.send('echo')
    }
}

export default AuthController