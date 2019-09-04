import { encrypt } from './encrypt';
import { decrypt } from './decrypt';
import { hMac } from './hmac';
import * as crypto from 'crypto';

const alg = 'aes-256-cbc'
const pass = crypto.randomBytes(32).toString('base64');
const salt = crypto.randomBytes(16).toString('base64');
const message = 'testmessage';
console.log({ alg, pass, salt, message });

const data = Buffer.from(message)
console.log({data});

const {iv, encryptedData} = encrypt(alg, pass, salt, data);
console.log({iv, encryptedData});
const ivBase64 = iv.toString('base64');
const encryptedDataBase64 = encryptedData.toString('base64');
console.log({ivBase64, encryptedDataBase64});

let decryptedData = decrypt(alg, pass, salt, iv, encryptedData)
console.log({'buffer': decryptedData, 'string': decryptedData.toString('utf-8')});

console.log('sha256');
let hmacSr = hMac(message, pass);
console.log(hmacSr.toString('base64'));