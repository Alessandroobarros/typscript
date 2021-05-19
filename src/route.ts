import { Request, Response } from 'express';
import CreateUser from './services/CreateUser';

//string, number, boolean, object, array
//interfaces

export function hellowWorld(request: Request, response: Response)  {
    const user = CreateUser({
        name:'Alessandro', 
        email:'alextexte@gmail.com', 
        password:'013333',
        techs:[
            'NodeJs', 
            'ReactJs', 
            'React Native',
            {title: 'Javascript', experience: 100}
        ],
    });

    return response.json({message: 'Hello World'});
}