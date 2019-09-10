import hmac
import hashlib
import base64

secretkey = b'test'
message = b'message'

print(secretkey)
print(message)

signature = hmac.new(secretkey, message, hashlib.sha256).digest()

print(signature)

print(base64.b64encode(signature))
