import * as crypto from 'crypto';

export const encrypt = (algorithm: string, password: string, salt: string, data: Buffer) => {
    const key = crypto.scryptSync(password, salt, 32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encryptedData = cipher.update(data)
    encryptedData = Buffer.concat([encryptedData, cipher.final()])
    return {iv, encryptedData}
};
