import { body, checkSchema } from 'express-validator';



export const name = body('name').isLength({ max: 15 });
export const youtubeUrl = body('youtubeUrl').isLength({ max: 100 }).isURL();


export const createBlogSchema = checkSchema({
    name: {
        in: ['body'],
        isLength: {
            options: { max: 15 },
        },
    },
    youtubeUrl: {
        in: ['body'],
        isLength: {
            options: { max: 100 },
        },
        isURL: {}
    }
})