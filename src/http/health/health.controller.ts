import  type {Request, Response} from 'express';

const health = (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Success',
    });
}

export default {
    health
}
