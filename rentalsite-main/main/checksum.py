import hashlib
import base64
import string
import random


def __id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


def generate_checksum(param_dict, merchant_key, salt=None):
    params_string = __get_param_string__(param_dict)
    salt = salt if salt else __id_generator(4)
    final_string = '%s|%s' % (params_string, salt)

    hasher = hashlib.sha256(final_string.encode())
    hash_string = hasher.hexdigest()
    hash_string += salt

    return base64.b64encode(hash_string.encode()).decode()


def verify_checksum(param_dict, merchant_key, checksum):
    # Remove checksum
    if 'CHECKSUMHASH' in param_dict:
        param_dict.pop('CHECKSUMHASH')

    # Get salt
    salt = checksum[-4:]
    params_string = __get_param_string__(param_dict)
    final_string = '%s|%s' % (params_string, salt)

    hasher = hashlib.sha256(final_string.encode())
    hash_string = hasher.hexdigest()
    hash_string += salt

    return checksum == base64.b64encode(hash_string.encode()).decode()


def __get_param_string__(params):
    params_string = []
    for key in sorted(params.keys()):
        if 'mid' != key and 'ORDER_ID' != key:
            params_string.append(str(params[key]))

    return '|'.join(params_string)
