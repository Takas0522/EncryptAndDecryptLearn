using System;
using System.Collections.Generic;
using System.Text;
using System.Security.Cryptography;

namespace EncryptAndDecryptLearn
{
    public static class HmacSha256
    {
        public static string Generate(string secretSt, string messageSt)
        {
            var secret = Encoding.UTF8.GetBytes(secretSt);
            var message = Encoding.UTF8.GetBytes(messageSt);
            var hash = new HMACSHA256(secret);
            var byteArray = hash.ComputeHash(message);
            var base64St = Convert.ToBase64String(byteArray);
            return base64St;
        }
    }
}
