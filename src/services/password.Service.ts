export default function generatePass(length: number, type: 'text' | 'number' | 'mixed'){
    let resultPassword: string = ''
    let charset = "";

    switch (type) {
        case 'text':
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        case 'number':
            charset = "0123456789";
            break;
        case 'mixed':
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            break;
    }

    for (let i = 0, n = charset.length; i < length; ++i) {
        resultPassword += charset.charAt(Math.floor(Math.random() * n));
    }

    return resultPassword
}

// export default generatePass;