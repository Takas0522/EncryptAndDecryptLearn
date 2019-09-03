import * as crypto from 'crypto';

export const decrypt = (algorithm: string, password: string, salt: string, iv: Buffer, encryptedData: Buffer) => {

    const key = crypto.scryptSync(password, salt, 32);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decryptedData = decipher.update(encryptedData);
    decryptedData =  Buffer.concat([decryptedData, decipher.final()]);
    return decryptedData;
};
