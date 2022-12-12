import { randomUUID } from 'node:crypto';

export async function createProductUseCase(product) {
    const id = randomUUID();
    const createdDate = new Date().toISOString().substring(0, 10);

    const createdProduct = { ...product, id, createdDate };

    return createdProduct;
}