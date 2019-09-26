using System;

namespace EncryptAndDecryptLearn
{
    class Program
    {
        static void Main(string[] args)
        {
            var ret = HmacSha256.Generate("testsecret", "testmessage");
            Console.WriteLine(ret);
        }
    }
}
