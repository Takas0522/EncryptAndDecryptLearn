import * as crypto from 'crypto';

export const hMac = (data: string, secretKey: string) => {
    const hmac = crypto.createHmac('sha256', secretKey);
    hmac.update(data);
    return hmac.digest();
};
