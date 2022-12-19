import { Router } from 'express';

import { createProductUseCase } from './use-case/createProductUseCase.js';

const router = Router();

router.post('/products', async (request, response) => {
    const product = request.body;
    const createdProduct = await createProductUseCase(product);

    return response.status(201).json(createdProduct);
})

export { router };