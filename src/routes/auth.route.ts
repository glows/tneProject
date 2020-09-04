// src/routes/auth.route.ts

import AuthController from "../controllers/AuthController"
import AuthMiddleware from "../middleware/logger";
import Route from "./route";

import {loginRequest} from "../requests/AuthRequest";

class AuthRoute extends Route{
    private authController = new AuthController();

    constructor() {
        super();

        this.router.use(AuthMiddleware);
        this.setRoutes();
    }

    

    protected setRoutes() {
        // this.router.get('/login', this.authController.echo);
        this.router.post('/login', loginRequest, this.authController.echo);
    
    }
}

export default AuthRoute;