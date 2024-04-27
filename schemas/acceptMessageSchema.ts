import {z} from 'zod';

export const acceptingMessageSchema = z.object({
    code : z.boolean()
})
